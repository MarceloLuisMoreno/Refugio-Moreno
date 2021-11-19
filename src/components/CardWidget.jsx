// Component Carrito
import {useCartContext} from "../context/CartContext";
import Spin from "react-reveal/Spin";

function CardWidget() {
	const {itemsCarrito} = useCartContext();
	return (
		<>
			<Spin spy={itemsCarrito()}>
				<p className="bi bi-cart4 fs-4 text-secondary text-decoration-none">
					{` ` + itemsCarrito()}
				</p>
			</Spin>
		</>
	);
}

export default CardWidget;
