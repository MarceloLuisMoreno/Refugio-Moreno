import { Container } from "react-bootstrap"
import { Zoom } from "react-awesome-reveal"

function HomeContainer({ greeting }) {
	return (
		<div>
			<Container className="text-center">
				<Zoom cascade delay={100} damping="1">
					<h2 className="text-center mt-5 pt-4">{greeting}</h2>
					<img src="assets/img/productos.png" className="container pt-5" alt="Refugio Tienda Deco productos" />
					<h2 className="text-center p-3">Objetos de Diseño para tu casa</h2>
					<p className="fst-italic fs-5">Somos un emprendimiento Familiar que CREE que siempre es posible salir adelante, amigarse con la vida, con nosotros mismos y con lo que nos rodea. Así surge REFUGIO, como un espacio que abriga y protege, para creer y crear productos que integran el reciclado, el amor por la naturaleza y el diseño, para desarrollar un nuevo mundo de "objetos con alma", endientes a mostrar el cuidado a nosotros mismos, a nuestra historia y a nuestro entorno, con productos que buscan el cuidado de nuestro medio ambiente y la buena manufactura como distintivo.</p>
					<br />
				</Zoom>
			</Container>
		</div>
	)
}

export default HomeContainer
