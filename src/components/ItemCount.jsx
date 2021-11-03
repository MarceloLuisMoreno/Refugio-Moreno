import {useState} from "react";
import {Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function InputCart({count, onAdd}) {
	return (
		<Button
			variant="success"
			onClick={() => {
				onAdd(count);
			}}>
			Agregar al Carrito
		</Button>
	);
}

const InputBuy = () => {
	return (
		<Button as={Link} to="/cart" variant="primary">
			Continuar la Compra
		</Button>
	);
};

function ItemCount({stock, initial, onAdd}) {
	const [count, setCount] = useState(initial);

	const [inputType, setInputType] = useState("input");

	const handleInput = () => {
		setInputType("buy");
	};

	return (
		<>
			<Table>
				<td>
					<Button
						onClick={() => setCount(count - 1)}
						variant="light"
						size="lg"
						className="bi bi-dash-circle-fill"
						disabled={count === 1}></Button>
				</td>
				<td className="fs-3">{count}</td>
				<td>
					<Button
						onClick={() => setCount(count + 1)}
						variant="light"
						size="lg"
						color="danger"
						className="bi bi-plus-circle-fill"
						disabled={count === stock}></Button>
				</td>
			</Table>
			<div className="text-center" onClick={handleInput}>
				{inputType === "input" ? <InputCart count={count} onAdd={onAdd} /> : <InputBuy />}
			</div>
		</>
	);
}

export default ItemCount;
