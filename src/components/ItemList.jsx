import Item from "./Item";

function ItemList({ items }) {
	return (
		<>
				{items.map((item) => (
					<div className="d-inline-flex">
						<Item key={item.id} item={item} />
					</div>
				))}
		</>
	);
}
export default ItemList;
