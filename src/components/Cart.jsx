import {useCartContext} from "../context/CartContext";
import {Button, Modal} from "react-bootstrap";
import {Flip} from "react-reveal";
import {getFirestore} from "./../services/getFirestore";
import {useState} from "react";
import firebase from "firebase";
import "firebase/firestore";
import Cartlist from "./CartList";
import CartForm from "./CartForm";

function Cart() {
	const {cartList, totalCart, clearCart} = useCartContext();
	const [show, setShow] = useState(false);
	const [ordenId, setOrdenId] = useState("");
	// formData para los datos del formulario, los seteo en blanco
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
	});

	// Para tomar los datos del formulario
	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	const generarOrden = () => {

		let orden = {};
		orden.date = firebase.firestore.Timestamp.fromDate(new Date());
		orden.buyer = formData;
		orden.total = totalCart();
		orden.items = cartList.map((prod) => {
			const id = prod.id;
			const name = prod.name;
			const quantity = prod.quantity;
			const price = prod.price;
			return {id, name, quantity, price};
		});
		setOrdenId("");
		const dbQuery = getFirestore();
		dbQuery
			.collection("orders")
			.add(orden)
			.then((resp) => setOrdenId(resp.id))
			.catch((err) => alert(`UPSSS Error: ${err}`))
			.finally(() =>
				setFormData({
					name: "",
					phone: "",
					email: "",
					email2: "",
				})
			);

		//Actualiza todos los items que estan en el listado de Cart del CartContext
		const itemsToUpdate = dbQuery.collection("items").where(
			firebase.firestore.FieldPath.documentId(),
			"in",
			cartList.map((i) => i.id)
		);

		const batch = dbQuery.batch();

		// por cada item restar del stock la cantidad de el carrito
		itemsToUpdate.get().then((collection) => {
			collection.docs.forEach((docSnapshot) => {
				batch.update(docSnapshot.ref, {
					stock:
						docSnapshot.data().stock -
						cartList.find((item) => item.id === docSnapshot.id).quantity,
				});
			});

			batch.commit().then((res) => {
				console.log("resultado batch:", res);

				//.catch
			});
		});
	};

	// Submit del Formulario
	const handleSubmit = (e) => {
		e.preventDefault();
		generarOrden();
	};

	// Para cerrar el Formulario una vez generada la orden
	function handleClose() {
		setShow(false);
		clearCart();
	}

	// Función para ver el Modal del Formulario
	const modalClose = () => setShow(false);
	// Función para cerrar el Modal del Formulario
	const modalShow = () => setShow(true);

	return (
		<>
			<Cartlist modalShow={modalShow} />
			<Modal show={show} onHide={modalClose}>
				<Modal.Header closeButton className="bg-success">
					<Modal.Title className="text-white">Formulario de Compra</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<CartForm
						formData={formData}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
					/>
				</Modal.Body>
				<Modal.Footer>
					{ordenId !== "" && (
						<>
							<Flip left opposite cascade>
								<Modal.Body className="bg-danger text-center text-white fw-normal">
									{`Muchas GRACIAS por su Compra!!! Tome nota del Número de
											Orden: ${ordenId}`}
								</Modal.Body>
							</Flip>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
						</>
					)}
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Cart;
