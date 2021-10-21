import { Container } from "react-bootstrap";
import CardProductos from './../CardProductos';

function ItemListContainer({ greeting }) {
    return (
        <div>
            <Container>
                <img
                    src="assets/img/productos.jpg"
                    className="container"
                    alt="Refugio Tienda Deco productos"
                />
                <h2 className="text-center">{greeting}</h2>
                <h2 className="text-center">Objetos de Diseño para tu casa</h2>
                <CardProductos />
            </Container>
        </div>
    );
}

export default ItemListContainer;
