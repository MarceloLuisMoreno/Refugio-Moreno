import ItemCount from "./ItemCount";
import "../styles/styles.css";
import { Container, Row, Col } from "react-bootstrap";

function ItemProducto({ stock, initial, onAdd }) {
	return (
		/* 		<div className="containerItem">
			<img
				src="\assets\productos\planta-1.jpg"
				className="containerImagenItem"
				alt="Producto de Refugio Tienda Deco productos"
			/>
			<div className="container">
				<br /><br />
				<h3>Aloe</h3>
				<h4>Planta en Maceta de cemento con plato</h4>
				<h3>$ 950.-</h3>
				<br /><br />
				<ItemCount stock={stock} initial={initial} onAdd={onAdd} />
			</div>
		</div>
 */

		<div>
			<Container>
				<Row className="gx-5">
					<Col>
						<img
							src="\assets\productos\planta-1.jpg"
							className="containerImagenItem"
							alt="Producto de Refugio Tienda Deco productos"
						/>{" "}
					</Col>
					<Col>
						<div className="container">
							<br />
							<br />
							<h3>Aloe</h3>
							<h5>Planta en Maceta de cemento con plato</h5>
							<br />
							<h3>$ 950.-</h3>
							<br />
							<br />
							<ItemCount stock={stock} initial={initial} onAdd={onAdd} />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default ItemProducto;
