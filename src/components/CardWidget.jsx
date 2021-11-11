// Component Carrito
import {useCartContext} from "../context/CartContext";

function CardWidget({cantidad}) {
	const { itemsCarrito } = useCartContext();

	if (itemsCarrito()!==0){
	return (
		<div  className="bi bi-cart4 fs-4 text-secondary text-decoration-none">
			{` ` + itemsCarrito()}
		</div>
	);}
	
	return <></>  //Si el carrito está vacío no muestra nada

}

export default CardWidget;
