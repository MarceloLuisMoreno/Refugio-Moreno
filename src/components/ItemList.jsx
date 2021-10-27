import Item from "./Item";
import { Button } from "react-bootstrap";
import { useState } from "react";

function ItemList({ items }) {
	const [filtro, setFiltro] = useState("todos");

	const plantas = () => {
		setFiltro("plantas");
	};
	const cuadros = () => {
		setFiltro("cuadros");
	};
	const macetas = () => {
		setFiltro("macetas");
	};
	const vinilos = () => {
		setFiltro("vinilos");
	};
	const todos = () => {
		setFiltro("todos");
	};

	return (
		<>
			<div>
				<Button onClick={todos} variant="success">
					Todos
				</Button>{" "}
				<Button onClick={plantas} variant="success">
					Plantas
				</Button>{" "}
				<Button onClick={cuadros} variant="success">
					Cuadros
				</Button>{" "}
				<Button onClick={macetas} variant="success">
					Macetas
				</Button>{" "}
				<Button onClick={vinilos} variant="success">
					Vinilos
				</Button>
			</div>
			{filtro === "todos"
				? items.map((item) => (
						<div className="d-inline-flex">
							<Item key={item.id} item={item} />
						</div>
				  		))
				: items
						.filter((items) => items.tipo === filtro)
						.map((item) => (
							<div className="d-inline-flex">
								<Item key={item.id} item={item} />
							</div>
						))}
		</>
	);
}
export default ItemList;
