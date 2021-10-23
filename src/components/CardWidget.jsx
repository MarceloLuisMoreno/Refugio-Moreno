// Component Carrito

function CardWidget({ cantidad }) {
	return (
		<>
			<a href="#carrito" className="bi bi-cart4 fs-4 text-secondary text-decoration-none">
				{` ` + cantidad}
			</a>
		</>
	);
}

export default CardWidget;
