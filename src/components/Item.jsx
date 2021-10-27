import { Card, Button } from "react-bootstrap";

function Item({ item }) {
	return (
		<div className="container">
			<Card style={{ width: "15rem"}} className="mt-5 shadow p-3 mb-5 bg-white rounded">
				<Card.Img variant="top" src={item.imagen} />

				<Card.Body>
					<Card.Title className="text-center">Id: {item.id} - {item.nombre}</Card.Title>
{/* 					<Card.Text className="text-center">{item.descripcion}</Card.Text>
 */}					<Card.Title className="text-center">$ {item.precio}</Card.Title>
					<Button className="btn btn-success">+ Info</Button>
					<Card.Title className="text-center m-2">Stock {item.stock}</Card.Title>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Item;
