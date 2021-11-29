import "firebase/firestore"
import firebase from "firebase/app"
import { useState } from "react"
import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCartContext } from './../../context/CartContext';
import { getFirestore } from './../../services/getFirestore';
import Cartlist from "./../CartList/CartList"
import CartForm from "./../CartForm/CartForm"
import ShowError from './../ShowError/ShowError';
import EmptyCart from './../EmptyCart/EmptyCart';


function Cart() {
	const { cartList, totalCart, clearCart, itemsCart } = useCartContext()
	const [showForm, setShowForm] = useState(false)
	const [orderId, setOrderId] = useState("")
	const [orderProcess, setOrderProcess] = useState(false)
	const [messageErr, setmessageErr] = useState("")
		// formData para los datos del formulario, los seteo en blanco
	const [formData, setFormData] = useState({ name: "", phone: "", email: "", email2: "" })

	// Para tomar los datos del formulario
	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const generateOrder = () => {
		setOrderProcess(true)
		let order = {}
		order.date = firebase.firestore.Timestamp.fromDate(new Date())
		order.buyer = formData
		order.total = totalCart()
		order.state = "Generada"
		order.items = cartList.map((prod) => {
			const id = prod.id
			const name = prod.name
			const quantity = prod.quantity
			const price = prod.price
			return { id, name, quantity, price }
		})
		setOrderId("")
		const dbQuery = getFirestore()
		dbQuery
			.collection("orders")
			.add(order)
			.then((resp) => setOrderId(resp.id))
			.catch((err) => setmessageErr(err))
			.finally(() => setFormData({ name: "", phone: "", email: "", email2: "" }))

		//Actualiza todos los items que estan en el listado de Cart del CartContext
		const itemsToUpdate = dbQuery.collection("items").where(
			firebase.firestore.FieldPath.documentId(),
			"in",
			cartList.map((i) => i.id)
		)

		const batch = dbQuery.batch()
		// por cada item restar del stock la cantidad del carrito
		itemsToUpdate.get().then((collection) => {
			collection.docs.forEach((docSnapshot) => {
				batch.update(docSnapshot.ref, {
					stock: docSnapshot.data().stock - cartList.find((item) => item.id === docSnapshot.id).quantity,
				})
			})
			batch.commit().catch((err) => setmessageErr(err))
		})
	}

	// Submit del Formulario
	const handleSubmit = (e) => {
		e.preventDefault()
		generateOrder()
	}

	// Para cerrar el Formulario una vez generada la order
	function handleClose() {
		setShowForm(false)
		setOrderProcess(false)
		clearCart()
	}

	// Para resetear el Mensaje de error
	const handleMessageErr = () => setmessageErr("")

	return (
		<>
			
			{itemsCart() === 0 ? (
					<EmptyCart />
				) : (
				<Container className="text-center">
				{/* Funcion CartList para listar el contenido del carrito  */}
				<Cartlist />
				<Button as={Link} to="/" variant="success" className="mx-3">
					Seguir comprando
				</Button>
				<Button	onClick={() => { setShowForm(true) }} variant="success" className="mx-3">
						Finalizar compra
				</Button>
				<Button onClick={() => { clearCart() }} variant="success" className="mx-3">
					Vaciar carrito
				</Button>
				<br />
				<h6 className="mt-3">Medios de Pago:</h6>
				<img src={"/assets/mediosPago/mediosPago.png"} alt="distintos medios de pago" className="w-50" loading="lazy" />
				{/* Funcion CartForm para llenar formulario compra y generar orden  */}
				<CartForm
					showForm={showForm}
					formData={formData}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					handleClose={handleClose}
					orderId={orderId}
					orderProcess={orderProcess}
				/>
				<div>
					{messageErr !== "" && (
						<>
							<ShowError message={messageErr} handleMessageErr={handleMessageErr} />
						</>
					)}
				</div></Container>
				)}
			
		</>
	)
}

export default Cart
