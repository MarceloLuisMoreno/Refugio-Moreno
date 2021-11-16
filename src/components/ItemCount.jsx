import {useState} from "react";
import {Button} from "react-bootstrap";
import Swing from 'react-reveal/Swing';

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
			<Swing spy={count}>
				<label className="fs-3 mx-4 text-success">{count}</label>
			</Swing>
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
