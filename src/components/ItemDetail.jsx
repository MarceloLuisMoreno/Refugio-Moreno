import ItemCount from "./ItemCount";
import {Container, Row, Col, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useCartContext} from "../context/CartContext";
import Fade from 'react-reveal/Fade';

function ItemDetail({item}) {
	const {addItem} = useCartContext();
	const [purchaseQ, setPurchaseQ] = useState(false);

	const onAdd = (count) => {
		addItem({item, quantity: count});
		setPurchaseQ(true);
	};

	return (
		<Container className="p-2">
			<Fade left>
			<br />
			<Row className="gx-5  shadow p-3 mb-5 bg-white rounded">
				<Col>
					<img
						src={item.image}
						className="containerImagenItem"
						loading="lazy"
						alt="Producto de Refugio Tienda Deco productos"
					/>
				</Col>
				<Col>
					<div className="container">
						<h3>{item.name}</h3>
						<h5>{item.description}</h5>
						<h3>$ {item.price}</h3>

						{purchaseQ ? (
							<>
								<br />
								<br />
								<Button as={Link} to="/cart" variant="secondary">
									Terminar Compra
								</Button>
								<br />
							</>
						) : (
							<ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
						)}

						<br />
						<button type="button" className="btn btn-outline-dark btn-sm m-1" disabled>
							{item.stock} cantidades disponibles
						</button>
						<br />
						<Link to="/category/todos">
							<button className="btn btn-outline-success btn-sm m-1">Volver</button>
						</Link>
						<h6>Medios de Pago:</h6>
						<img
							src={"/assets/mediosPago/mediosPago.png"}
							alt="distintos medios de pago"
							className="w-75"
						/>
					</div>
				</Col>
			</Row>
			</Fade>
		</Container>
	);
}

export default ItemDetail;
