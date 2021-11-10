import Item from "./Item";

function ItemList({ items }) {
	return (
		<>
				{items.map((item) => (
						<Item key={item.id} item={item} />
				))}
		</>
	);
}
export default ItemList;
