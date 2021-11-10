import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item({ item }) {
	return (
		<div className="container col">
			<Card style={{ width: "15rem" }} className="mt-5 shadow p-3 mb-5 bg-white rounded">
				<Link to={`/item/${item.id}`}>
					<Card.Img variant="top" src={item.imagen} />
				</Link>
				<Card.Body>
					<Card.Title className="text-center">
						Id: {item.id} - {item.nombre}
					</Card.Title>
					<Card.Title className="text-center">$ {item.precio}</Card.Title>
					<Link to={`/item/${item.id}`}>
						<button className="btn btn-success btn-sm">+ Info</button>
					</Link>
					<Card.Title className="text-center m-2">Stock {item.stock}</Card.Title>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Item;
