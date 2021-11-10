import {useState} from "react";
import {Button} from "react-bootstrap";

function ItemCount({stock, initial, onAdd}) {
	const [count, setCount] = useState(initial);

	return (
		<div>
			<Button
				onClick={() => setCount(count - 1)}
				variant="light"
				size="lg"
				className="bi bi-dash-circle-fill"
				disabled={count === 1}></Button>
			<label className="fs-3 mx-4">{count}</label>
			<Button
				onClick={() => setCount(count + 1)}
				variant="light"
				size="lg"
				color="danger"
				className="bi bi-plus-circle-fill"
				disabled={count === stock}></Button>
			<div className="text-center">
				<Button
					variant="success"
					onClick={() => {
						onAdd(count);
					}}>
					 Agregar al Carrito 
				</Button>
			</div>
		</div>
	);
}

export default ItemCount;
