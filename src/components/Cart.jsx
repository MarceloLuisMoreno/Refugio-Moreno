import {useCartContext} from "../context/CartContext";
import {Button, Container, Modal, Form, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Flip} from "react-reveal";
import {getFirestore} from "./../services/getFirestore";
import {useState} from "react";
import firebase from "firebase";
import "firebase/firestore";

function Cart() {
	const {cartList, itemsCarrito, totalCart, clearCart, clearItem} = useCartContext();
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
			.catch((err) => alert(`Upss!! Error: ${err}`))
			.finally(
				() =>
					setFormData({
						name: "",
						phone: "",
						email: "",
					}),
			);

			//Actualiza todos los items que estan en el listado de Cart del CartContext
    
        const itemsToUpdate = dbQuery.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.id)
        )
    
        const batch = dbQuery.batch();
        
        // por cada item restar del stock la cantidad de el carrito
    
        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).quantity
                })
            })
    
            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })
	};

	// Submit del Formulario
	const handleSubmit = (e) => {
		e.preventDefault()
		generarOrden()
	}

	// Para cerrar el Formulario una vez generada la orden
	function handleClose() {
		setShow(false);
		clearCart()
	}


	// Función para ver el Modal del Formulario
	const modalClose = () => setShow(false);
	// Función para cerrar el Modal del Formulario
	const modalShow = () => setShow(true);

	return (
		<>
			{itemsCarrito() === 0 ? (
				<Container>
					<br />
					<Flip top>
						<h1 className="mt-4 text-danger">El carrito está vacío...</h1>
						<Button as={Link} to="/category/todos" variant="danger" className="mx-2">
							Hacé tu COMPRA!!!
						</Button>
					</Flip>
					<br />
					<video loop autoPlay>
						<source
							src="/assets/videos/carritoVacio.mp4"
							type="video/mp4"
							alt="Marketing illustrations by Storyset"></source>
					</video>
					<br />
				</Container>
			) : (
				<div>
					<Container>
						<h1 className="mt-5 p-1">Carrito de compras</h1>
						<table className="table table-bordered table-primary text-center">
							<thead>
								<tr className="fs-5 fw-bold">
									<th>Id.</th>
									<th>Cantidad</th>
									<th>Descripción</th>
									<th>Precio Unit</th>
									<th>Subtotal</th>
									<th>Eliminar</th>
								</tr>
							</thead>
							<tbody>
								{cartList.map((prod) => (
									<tr key={prod.id}>
										<td>{prod.id}</td>
										<td>{prod.quantity}</td>
										<td>{prod.name}</td>
										<td>
											{Intl.NumberFormat("es-AR", {
												currency: "ARS",
												style: "currency",
											}).format(prod.price)}
										</td>
										<td>
											{Intl.NumberFormat("es-AR", {
												currency: "ARS",
												style: "currency",
											}).format(prod.quantity * prod.price)}
										</td>
										<td
											className="bi bi-trash-fill"
											onClick={() => clearItem(prod.id)}></td>
									</tr>
								))}
							</tbody>
						</table>
						<h5>{`Totales de unidades del carrito: ${itemsCarrito()} -  Importe Total de la Compra ${Intl.NumberFormat(
							"es-AR",
							{
								currency: "ARS",
								style: "currency",
							}
						).format(totalCart())}`}</h5>
						<h6>Medios de Pago:</h6>
						<img
							src={"/assets/mediosPago/mediosPago.png"}
							alt="distintos medios de pago"
							className="w-50 m-2"
						/>
						<br />
						<Button
							as={Link}
							to="/category/todos"
							variant="success"
							className="mx-3 mt-2">
							Seguir comprando
						</Button>
						<Button
							onClick={() => {
								modalShow();
							}}
							variant="success"
							className="mx-3 mt-2">
							Finalizar compra
						</Button>
						<Button
							onClick={() => {
								clearCart();
							}}
							variant="success"
							className="mx-3 mt-2">
							Vaciar carrito
						</Button>
						<br />

						<Modal show={show} onHide={modalClose}>
							<Modal.Header closeButton className="bg-success">
								<Modal.Title className="text-white">
									Formulario de Compra
								</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<form onSubmit={handleSubmit} onChange={handleChange}>
									<Form.Group
										as={Row}
										className="mb-3"
										controlId="validationCustomUsername">
										<Form.Label column sm={3}>
											Nombre
										</Form.Label>
										<Col sm={11}>
											<Form.Control
												placeholder="Nombre y Apellido"
												name="name"
												defaultValue={formData.name}
											/>
										</Col>
									</Form.Group>
									<Form.Group
										as={Row}
										className="mb-3"
										controlId="formHorizontalPassword">
										<Form.Label column sm={3}>
											Telefono
										</Form.Label>
										<Col sm={11}>
											<Form.Control
												placeholder="Telefono"
												name="phone"
												defaultValue={formData.phone}
											/>
										</Col>
									</Form.Group>

									<Form.Group
										as={Row}
										className="mb-3"
										controlId="formHorizontalEmail">
										<Form.Label column sm={3}>
											Email
										</Form.Label>
										<Col sm={11}>
											<Form.Control
												placeholder="@email"
												name="email"
												defaultValue={formData.email}
											/>
										</Col>
									</Form.Group>

									<Form.Group as={Row} className="mb-4 align-items-center">
										<Col sm={10}>
											<Button type="submit" variant="success">
												Generar Orden
											</Button>
										</Col>
									</Form.Group>
								</form>
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
					</Container>
				</div>
			)}
		</>
	);
}

export default Cart;
