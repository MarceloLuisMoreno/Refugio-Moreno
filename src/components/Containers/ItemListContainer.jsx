import { Container, Button, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/getFirestore";
import ItemList from "./../ItemList";

function ItemListContainer() {
	const { categoryId } = useParams();
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		/* 		if (categoryId === "todos") {
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
 */

		if (categoryId === "todos") {
			const db = getFirestore()
			const dbQuery = db.collection("items").orderBy("category", "asc").orderBy("name").get()
			dbQuery
				.then((resp) =>
					setItems(resp.docs.map((items) => ({ id: items.id, ...items.data() })))
				)
				.catch((err) => alert(`Error: ${err}`))
				.finally(() => setLoading(false));
		} else {
			const db = getFirestore();
			//			const dbQuery = db.collection("categories").get();  
			const dbQuery = db
				.collection("items")
				.where("category", "==", categoryId)
				.orderBy("name")
				.get();

			dbQuery
				.then((resp) =>
					setItems(
						resp.docs.map((items) => ({ id: items.id, ...items.data() }))
					)
				)
				.catch((err) => alert(`Upss!! Error: ${err}`))
				.finally(() => setLoading(false));
		}
	}, [categoryId]);

	return (
		<Container>
			<br />
			<br />
			<h2 className="mt-5">Nuestros productos - {categoryId.toUpperCase()}</h2>
			{loading ? (
				<Button className="m-5" variant="success" disabled>
					<Spinner
						as="span"
						animation="border"
						role="status"
						aria-hidden="true"
						size="lg"
					/>
					L O A D I N G ...
				</Button>
			) : (
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xxl-4 mb-5 text-center">
					<ItemList items={items} />
				</div>
			)}
		</Container>
	);
}

export default ItemListContainer;
