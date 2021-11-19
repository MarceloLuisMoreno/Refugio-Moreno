import {useCartContext} from "../context/CartContext";
import {Container, Button} from "react-bootstrap";
import {Flip} from "react-reveal";
import {Link} from "react-router-dom";

function CartList({modalShow}) {
	const {cartList, itemsCarrito, totalCart, clearItem, clearCart} = useCartContext();

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
							alt="Marketing illustrations by Storyset"
							loading="lazy"></source>
					</video>
					<br />
				</Container>
			) : (
				<Container>
					<h1 className="mt-5 p-1">Carrito de compras</h1>
					<table className="table table-bordered table-primary text-center table-striped">
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
									<td>
										<img
											src={prod.image}
											alt="Productos de Refugio Tienda Deco"
											className="shadow-lg"
											style={{height: 100}}
										/>
									</td>
									<td className="align-middle">{prod.quantity}</td>
									<td className="align-middle">{prod.name}</td>
									<td className="align-middle">
										{Intl.NumberFormat("es-AR", {
											currency: "ARS",
											style: "currency",
										}).format(prod.price)}
									</td>
									<td className="align-middle">
										{Intl.NumberFormat("es-AR", {
											currency: "ARS",
											style: "currency",
										}).format(prod.quantity * prod.price)}
									</td>
									<td
										className="bi bi-trash-fill align-middle fs-4"
										onClick={() => clearItem(prod.id)}></td>
								</tr>
							))}
							<tr >
								<td className="fw-bold">Cant.Unidades</td>
								<td className="fw-bold">{itemsCarrito()}</td>
								<td></td>
								<td className="fw-bold">TOTAL</td>
								<td className="fw-bold">
									{Intl.NumberFormat("es-AR", {
										currency: "ARS",
										style: "currency",
									}).format(totalCart())}
								</td>
								<td></td>
							</tr>
						</tbody>
					</table>
					<br />
					<Button as={Link} to="/category/todos" variant="success" className="mx-3">
						Seguir comprando
					</Button>
					<Button
						onClick={() => {
							modalShow();
						}}
						variant="success"
						className="mx-3">
						Finalizar compra
					</Button>
					<Button
						onClick={() => {
							clearCart();
						}}
						variant="success"
						className="mx-3">
						Vaciar carrito
					</Button>
					<br />
					<h6 className="mt-3">Medios de Pago:</h6>
					<img
						src={"/assets/mediosPago/mediosPago.png"}
						alt="distintos medios de pago"
						className="w-50"
						loading="lazy"
					/>
				</Container>
			)}
		</>
	);
}

export default CartList;
