// Component Carrito
import {useCartContext} from "../context/CartContext";

function CardWidget({cantidad}) {
	const {itemsCarrito} = useCartContext();
	return (
		<div className="bi bi-cart4 fs-4 text-secondary text-decoration-none">
			{` ` + itemsCarrito()}
		</div>
	);
}

export default CardWidget;
