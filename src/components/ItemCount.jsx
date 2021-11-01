import { useState } from "react";
import { Table, Button } from "react-bootstrap";

function ItemCount({ stock, initial, onAdd }) {
	const [count, setCount] = useState(initial);

	return (
		<>
			<Table>
				<td>
					<Button
						onClick={() => setCount(count - 1)}
						variant="light"
						size="lg"
						className="bi bi-dash-circle-fill"
						disabled={count === 1}
					></Button>
				</td>
				<td className="fs-3">{count}</td>
				<td>
					<Button
						onClick={() => setCount(count + 1)}
						variant="light"
						size="lg"
						color="danger"
						className="bi bi-plus-circle-fill"
						disabled={count === stock}
					></Button>
				</td>
			</Table>
			<div className="text-center">
				<Button
					onClick={() => {onAdd(count)}}
					variant="success"
				>
					Agregar al Carrito
				</Button>
			</div>
		</>
	);
}

export default ItemCount;
