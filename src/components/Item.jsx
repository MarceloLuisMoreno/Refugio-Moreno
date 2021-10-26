import Button from "@restart/ui/esm/Button";
import { Card } from "react-bootstrap";

function Item({ id, tipo, nombre, descripcion, imagen, precio, stock }) {
	return (
		<div className="container">
			<Card style={{ width: "15rem"}} className="mt-5 shadow p-3 mb-5 bg-white rounded">
				<Card.Img variant="top" src={imagen} />

				<Card.Body>
					<Card.Title className="text-center">Id: {id} - {nombre}</Card.Title>
					<Card.Text className="text-center">{descripcion}</Card.Text>
					<Card.Title className="text-center">$ {precio}</Card.Title>
					<Button className="btn btn-success">+ Info</Button>
					<Card.Title className="text-center m-2">Stock {stock}</Card.Title>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Item;
