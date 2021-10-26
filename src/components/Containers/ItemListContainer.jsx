import { Container } from "react-bootstrap";
import ItemProducto from "../ItemProducto";
import ItemList from "./../ItemList";

function ItemListContainer({ greeting }) {
	const onAdd = (count) => {
		alert(`La cantidad del Item agregada al carrito es ${count}`);
	};

	return (
		<div>
			<Container>
				<br />
				<img
					src="assets/img/productos.png"
					className="container pt-5"
					alt="Refugio Tienda Deco productos"
				/>
				<h2 className="text-center">{greeting}</h2>
				<br />
				<h2 className="text-center">Objetos de Diseño para tu casa</h2>
				<ItemProducto stock={10} initial={1} onAdd={onAdd} />
				<ItemList />
			</Container>
		</div>
	);
}

export default ItemListContainer;
