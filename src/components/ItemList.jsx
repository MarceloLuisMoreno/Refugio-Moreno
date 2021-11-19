import {memo} from 'react'
import Item from "./Item";

const ItemList = memo(
	({ items }) => {
	return (
		<>
				{items.map((item) => (
						<Item key={item.id} item={item} />
				))}
		</>
	);
})
export default ItemList;
