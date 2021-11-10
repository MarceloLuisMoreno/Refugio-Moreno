import {Container} from "react-bootstrap";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getFetch} from "../../services/getFetch";
import ItemList from "./../ItemList";

function ItemListContainer() {
	const {categoryId} = useParams();
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (categoryId === "todos") {
			getFetch
				.then((res) => {
					setItems(res);
				})
				.catch((err) => alert(`Error: ${err}`))
				.finally(() => setLoading(false));
		} else {
			getFetch
				.then((res) => {
					setItems(res.filter((items) => items.tipo === categoryId));
				})
				.catch((err) => alert(`Error: ${err}`))
				.finally(() => setLoading(false));
		}
	}, [categoryId]);

	return (
		<Container>
			<br />
			<br />
			<h2 className="mt-5">Nuestros productos - {categoryId.toUpperCase()}</h2>
			{loading ? (
				<div className="spinner-border text-success" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			) : (
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xxl-4 mb-5 text-center">
					<ItemList items={items} />
				</div>
			)}
		</Container>
	);
}

export default ItemListContainer;
