import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getFetch } from "../../services/getFetch";
import ItemList from "./../ItemList";

function ItemListContainer({ greeting }) {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getFetch
			.then((res) => {
				setItems(res);
			})
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	}, []);

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
				<h2 className="text-center">Objetos de Diseño para tu casa</h2>
				<br />
				<h2>Nuestros productos</h2>
				{loading ? (
					<div class="spinner-border text-success" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				) : (
					<ItemList items={items} />
				)}
			</Container>
		</div>
	);
}

export default ItemListContainer;
