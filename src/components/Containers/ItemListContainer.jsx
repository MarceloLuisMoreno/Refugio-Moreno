import { Container } from "react-bootstrap";
import ItemProducto from "../ItemProducto";

function ItemListContainer({ greeting }) {
	const onAdd = (count) => {
		alert(`La cantidad del Item agregada al carrito es ${count}`);
		return (
			<>
				<h2>mlm</h2>);
			</>
		);
	};

	return (
		<div>
			<Container>
				<img
					src="assets/img/productos.jpg"
					className="container"
					alt="Refugio Tienda Deco productos"
				/>
				<h2 className="text-center">{greeting}</h2>
				<h2 className="text-center">Objetos de Diseño para tu casa</h2>
				<ItemProducto stock={10} initial={1} onAdd={onAdd} />
			</Container>
		</div>
	);
}

export default ItemListContainer;
