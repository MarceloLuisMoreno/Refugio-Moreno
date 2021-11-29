// Component Carrito
import { useCartContext } from "../../context/CartContext"
import { Fade } from "react-awesome-reveal"

function CardWidget() {
	const { itemsCart } = useCartContext()
	return (
		<div>
			<Fade>
				<p className="bi bi-cart4 fs-4 text-secondary text-decoration-none">{` ` + itemsCart()}</p>
			</Fade>
		</div>
	)
}

export default CardWidget
