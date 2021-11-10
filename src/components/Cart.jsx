import {useCartContext} from "../context/CartContext";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Cart() {
	const {cartList, itemsCarrito, clear} = useCartContext();

	return (
		<>
			<h1 className="mt-5">Carrito de compras</h1>
			{/* 			{mostrarListado()}
			 */}
			{cartList.map((prod) => (
				<div key={prod.id}>
					<p>
						{`Id: ${prod.id}  -  Cantidad: ${prod.cantidad}  -   Detalle: ${
							prod.nombre
						}  -  Precio: $${prod.precio}  -  Total $${prod.cantidad * prod.precio}`}
					</p>
				</div>
			))}
			<h5>{`Totales de unidades del carrito: ${itemsCarrito()}`}</h5>

			<br />
			<br />
			<Button as={Link} to="/category/todos" variant="success" className="mx-2">
				Seguir comprando
			</Button>
			<Button as={Link} to="/" variant="success" className="mx-2">
				Finalizar compra
			</Button>
			<Button onClick={() => {clear()}} variant="success" className="mx-2">
				Vaciar carrito
			</Button>
			<br />
		</>
	);
}

export default Cart;
