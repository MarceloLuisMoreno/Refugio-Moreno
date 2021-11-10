// Component Carrito
import {Link} from "react-router-dom";

function CardWidget({cantidad}) {
	return (
		<Link to="/cart" className="bi bi-cart4 fs-4 text-secondary text-decoration-none">
			{` ` + cantidad}
		</Link>
	);
}

export default CardWidget;
