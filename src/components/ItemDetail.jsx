import ItemCount from "./ItemCount";
import "../styles/styles.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function ItemDetail({ item, onAdd }) {
	return (
		<div>
			<Container>
				<Row className="gx-5  shadow p-3 mb-5 bg-white rounded">
					<Col>
						<img
							src={item.imagen}
							className="containerImagenItem"
							alt="Producto de Refugio Tienda Deco productos"
						/>{" "}
					</Col>
					<Col>
						<div className="container">
							<br />
							<h3>{item.nombre}</h3>
							<h5>{item.descripcion}</h5>
							<br />
							<h3>$ {item.precio}</h3>
							<br />
							<ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
							<br />
							<button type="button" class="btn btn-outline-dark btn-sm" disabled>
								{item.stock} cantidades disponibles
							</button> <br /><br />
							<button type="button" class="btn btn-outline-success">
								Volver
							</button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default ItemDetail;
