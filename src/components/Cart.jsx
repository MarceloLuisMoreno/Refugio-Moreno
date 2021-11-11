import { useCartContext } from "../context/CartContext";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
	const { cartList, itemsCarrito, totalCart, clear, clearItem } = useCartContext();

	return (
		<>
			{itemsCarrito() === 0 ? (
				<div>
					<br />
					<br />
					<br />
					<br />
					<br />
					<h1>EL CARRITO ESTA VACIO</h1>
					<br />
					<br />
					<Button as={Link} to="/category/todos" variant="success" className="mx-2">
						Hacé tu COMPRA!!!
					</Button>
				</div>
			) : (
				<div>
					<Container>
						<br />
						<h1 className="mt-2 p-4">Carrito de compras</h1>
						<table className="table table-bordered table-success text-center">
							<tr>
								<th>Id.</th>
								<th>Cantidad</th>
								<th>Descripción</th>
								<th>Precio Unit</th>
								<th>Subtotal</th>
								<th>Eliminar</th>
							</tr>
							{cartList.map((prod) => (
								<tr>
									<td key={prod.id}>{prod.id}</td>
									<td>{prod.cantidad}</td>
									<td>{prod.nombre}</td>
									<td>
										{Intl.NumberFormat("es-AR", {
											currency: "ARS",
											style: "currency",
										}).format(prod.precio)}
									</td>
									<td>

										{Intl.NumberFormat("es-AR", {
											currency: "ARS",
											style: "currency",
										}).format(prod.cantidad * prod.precio)}
									</td>
									<td
										className="bi bi-trash-fill"
										onClick={() => clearItem(prod.id)}></td>
								</tr>
							))}
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
					</Container>
				</div>
			)}
		</>
	);
}

export default Cart;
