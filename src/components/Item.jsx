import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';

function Item({ item }) {
	return (
		<div className="container col">
			<Zoom>
			<Card style={{ width: "16rem" }} className="mt-5 shadow p-3 mb-5 bg-white rounded">
				<Link to={`/item/${item.id}`}>
					<Card.Img variant="top" src={item.image} alt="Productos de Refugio Tienda Deco" loading="lazy" />
				</Link>
				<Card.Body>

					<Card.Title className="text-center fs-6">
						Id: {item.id}
					</Card.Title>
					
					<Card.Title className="text-center">
						{item.name}
					</Card.Title>
					<Card.Title className="text-center">$ {item.price}</Card.Title>
					<Link to={`/item/${item.id}`}>
						<button className="btn btn-success btn-sm">+ Info</button>
					</Link>
					<Card.Title className="text-center m-2">Stock {item.stock}</Card.Title>
				</Card.Body>
			</Card>
			</Zoom>
		</div>
	);
}

export default Item;
