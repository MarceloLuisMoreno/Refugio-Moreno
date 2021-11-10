import {useState, useEffect} from "react";
import {getItem} from "../../services/getItem";
import ItemDetail from "./../ItemDetail";
import {useParams} from "react-router-dom";

function ItemDetailContainer() {
	const {itemId} = useParams();
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getItem
			.then((res) => {
				setItems(res.find((item) => item.id === parseInt(itemId)));
			})
			.catch((err) => alert(`Error: ${err}`))
			.finally(() => setLoading(false));
	}, [itemId]);

	return (
		<>
			<br />
			<br />
			{loading ? (
				<div className="spinner-border text-success" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			) : (
				<ItemDetail item={items} />
			)}
		</>
	);
}

export default ItemDetailContainer;
