import { useState, useEffect } from "react";
import { getItem } from "../../services/getItem";

import ItemDetail from "./../ItemDetail";

function ItemDetailContainer() {
	const onAdd = (count) => {
		alert(`La cantidad del Item agregada al carrito es ${count}`);
	};

	const [item, setItem] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getItem
			.then((res) => {
				setItem(res);
			})
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	}, []);

	return (
		<>
			<h2>Item Detalle</h2>

			{loading ? (
				<div class="spinner-border text-success" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			) : (
				<ItemDetail item={item} onAdd={onAdd} />
			)}
		</>
	);
}

export default ItemDetailContainer;
