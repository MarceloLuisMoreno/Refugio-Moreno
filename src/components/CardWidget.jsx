// Component Carrito
import {useCartContext} from "../context/CartContext";
import Spin from "react-reveal/Spin";

function CardWidget() {
	const {itemsCarrito} = useCartContext();
	return (
		<Spin spy={itemsCarrito()}>
			<div className="bi bi-cart4 fs-4 text-secondary text-decoration-none">
				{` ` + itemsCarrito()}
			</div>
		</Spin>
	);
}

export default CardWidget;
