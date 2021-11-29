import { useCartContext } from "../../context/CartContext"
import { Container } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"

function CartList() {
	const { cartList, itemsCart, totalCart, clearItem } = useCartContext()

	return (
		<>
			<Fade dampimg="2">
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
										<img src={prod.image} alt="Productos de Refugio Tienda Deco" className="shadow-lg" style={{ height: 100 }} />
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
									<td className="bi bi-trash-fill align-middle fs-4" onClick={() => clearItem(prod.id)}></td>
								</tr>
							))}
							<tr>
								<td className="fw-bold">Cant.Unidades:</td>
								<td className="fw-bold">{itemsCart()}</td>
								<td></td>
								<td className="fw-bold">TOTAL COMPRA</td>
								<td className="fw-bold">{Intl.NumberFormat("es-AR", { currency: "ARS", style: "currency" }).format(totalCart())}</td>
								<td></td>
							</tr>
						</tbody>
					</table>
					<br />
				</Container>
			</Fade>
		</>
	)
}

export default CartList
