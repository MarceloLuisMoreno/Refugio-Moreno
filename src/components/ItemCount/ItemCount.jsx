import { useState } from "react"
import { Button } from "react-bootstrap"

function ItemCount({ stock, initial, onAdd }) {
	const [count, setCount] = useState(initial)

	return (
		<div>
			<Button onClick={() => setCount(count - 1)} className="btn-lg btn-light bi bi-dash-circle-fill" disabled={count === 1}></Button>
				<label className="fs-3 mx-4 text-success">{count}</label>
			<Button
				onClick={() => setCount(count + 1)}
				className="btn-lg btn-light btn-danger bi bi-plus-circle-fill"
				disabled={count > stock - 1}></Button>
			<div className="text-center">
				<Button
					onClick={() => {
						onAdd(count)
					}}
					className="btn-success"
					disabled={stock === 0}>
					Agregar al Carrito
				</Button>
			</div>
		</div>
	)
}

export default ItemCount
