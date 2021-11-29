import { Container, Button } from "react-bootstrap"
import { AttentionSeeker, Slide } from "react-awesome-reveal"
import { Link } from "react-router-dom"

function EmptyCart() {
	return (
		<Container className="text-center">
			<AttentionSeeker effect="shake" triggerOnce="true" delay={2300}>
				<br />
				<h1 className="mt-4 text-danger">El carrito está vacío...</h1>
				<Button as={Link} to="/" variant="danger" className="mx-2">
					Hacé tu COMPRA!!!
				</Button>
			</AttentionSeeker>
			<Slide damping="0" triggerOnce>
				<br />
				<video loop autoPlay>
					<source src="/assets/videos/carritoVacio.mp4" type="video/mp4" alt="Marketing illustrations by Storyset" loading="lazy"></source>
				</video>
				<br />
			</Slide>
		</Container>
	)
}

export default EmptyCart
