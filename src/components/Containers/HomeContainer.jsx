import { Container } from "react-bootstrap"
import { Zoom } from "react-awesome-reveal"

function HomeContainer({ greeting }) {
	return (
		<Container className="text-center">
			<Zoom cascade delay={90} damping="1">
				<h2 className="text-center mt-5 pt-3">{greeting}</h2>
				<img src="assets/img/productos.png" className="container pt-3" alt="Refugio Tienda Deco productos" />
				<h2 className="text-center p-2">Objetos de Diseño para tu casa</h2>
				<br />
			</Zoom>
		</Container>
	)
}

export default HomeContainer
