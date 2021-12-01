import { Container } from "react-bootstrap"
import { Bounce } from "react-awesome-reveal"

function UsContainer() {
	return (
		<Container className="text-center">
			<Bounce cascade damping="1">
				<img src="assets/img/nosotros.png" className="container pt-5 m-3 w-75" alt="Refugio Tienda Deco productos" />
				<h2 className="text-center">Refugio - Tienda Deco</h2>
				<p className="fst-italic m-3 fs-5">
					Somos un emprendimiento Familiar que CREE que siempre es posible salir adelante, amigarse con la vida, con nosotros mismos y con
					lo que nos rodea. Así surge REFUGIO, como un espacio que abriga y protege, para creer y crear productos que integran el reciclado,
					el amor por la naturaleza y el diseño, para desarrollar un nuevo mundo de "objetos con alma", endientes a mostrar el cuidado a
					nosotros mismos, a nuestra historia y a nuestro entorno, con productos que buscan el cuidado de nuestro medio ambiente y la buena
					manufactura como distintivo.
				</p>
				<br />
			</Bounce>
		</Container>
	)
}

export default UsContainer
