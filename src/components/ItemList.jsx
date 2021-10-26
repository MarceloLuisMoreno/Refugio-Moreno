import { useState, useEffect } from "react";
import { getFetch } from "./../services/getFetch";
import Item from "./Item";
import { Button } from "react-bootstrap";

const ItemList = () => {
	const [item, setItem] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getFetch
			.then((res) => {
				setItem(res);
			})
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	}, []);

	return (
		<>
			<h2>Listado de Productos</h2>
			<div>
				<Button variant="success">Plantas</Button>{" "}
				<Button variant="success">Cuadros</Button>{" "}
				<Button variant="success">Macetas</Button>{" "}
				<Button variant="success">Vinilos</Button>{" "}
				<Button variant="success">Todos</Button>
			</div>
			{loading ? (
				<h1>Cargando...</h1>
			) : (
				item.map((item) => (
					<div className="d-inline-flex">
						<Item
							id={item.id}
							tipo={item.tipo}
							nombre={item.nombre}
							descripcion={item.descripcion}
							imagen={item.imagen}
							precio={item.precio}
							stock={item.stock}
						/>
					</div>
				))
			)}
		</>
	);
};
export default ItemList;
