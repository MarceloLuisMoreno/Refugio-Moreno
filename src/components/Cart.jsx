import {useCartContext} from "../context/CartContext";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function Cart() {
	const {cartList, itemsCarrito, totalCart, clear, clearItem} = useCartContext();

	return (
		<>
			{itemsCarrito() === 0 ? (
				<Container>
					<br />
					<h1 className="mt-5" >El carrito está vacío...</h1>
					<br />
					<video loop autoPlay>
                        <source src="/assets/videos/carritoVacio.mp4" type="video/mp4" alt="Marketing illustrations by Storyset" ></source>
                    </video>
					<br />
					<Button as={Link} to="/category/todos" variant="success" className="mx-2">
						Hacé tu COMPRA!!!
					</Button>
				</Container>
			) : (
				<div>
					<Container>
					< >
						<br />
						<h1 className="mt-2 p-4">Carrito de compras</h1>
						<table className="table table-bordered table-primary text-center" >
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
						<br></br>
						<h5>{`Totales de unidades del carrito: ${itemsCarrito()} -  Importe Total de la Compra ${Intl.NumberFormat(
							"es-AR",
							{
								currency: "ARS",
								style: "currency",
							}
						).format(totalCart())}`}</h5>

						<br />
						<h6>Medios de Pago:</h6>
						<img
							src={"/assets/mediosPago/mediosPago.png"}
							alt="distintos medios de pago"
							className="w-50 m-3"
						/>
						<br />
						<Button as={Link} to="/category/todos" variant="success" className="mx-2">
							Seguir comprando
						</Button>
						<Button as={Link} to="/" variant="success" className="mx-2">
							Finalizar compra
						</Button>
						<Button
							onClick={() => {
								clear();
							}}
							variant="success"
							className="mx-2">
							Vaciar carrito
						</Button>
						<br />
						</>
					</Container>
				</div>
			)}
		</>
	);
}

export default Cart;
