import { Container } from "react-bootstrap"
import { Zoom } from "react-awesome-reveal"

function HomeContainer({ greeting }) {
	return (
		<div>
			<Container>
				<Zoom cascade delay={100} damping="1">
					<h2 className="text-center mt-5 pt-4">{greeting}</h2>
					<img src="assets/img/productos.png" className="container pt-5" alt="Refugio Tienda Deco productos" />
					<h2 className="text-center p-3">Objetos de Diseño para tu casa</h2>
					<br />
					<br />
					<br />
				</Zoom>
			</Container>
		</div>
	)
}

export default HomeContainer
