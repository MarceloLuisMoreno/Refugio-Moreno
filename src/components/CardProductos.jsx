import ItemCount from "./ItemCount";
import { Card } from "react-bootstrap";

function CardProductos() {
    return (
        <div className="container">
            <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src=".\assets\productos\planta-1.jpg" />
                <Card.Body>
                    <Card.Title className="text-center">Aloe</Card.Title>
                    <Card.Text className="text-center">
                        Maceta de cemento c/plato.
                    </Card.Text>
                    <Card.Title className="text-center">$950</Card.Title>
                    <Card border="info" className="text-center">
                        <ItemCount stock={5} initial={1} />
                    </Card>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardProductos;
