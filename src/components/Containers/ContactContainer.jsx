import { Container } from "react-bootstrap"
import { Fade } from "react-awesome-reveal"

function ContactContainer() {
	return (
		<Container className="text-center">
			<Fade cascade damping="1">
				<div className="mt-5">
					<img src="assets/img/RefugioLogo.png" className="pt-5 m-1" style={{ width: 300 }} alt="Logo MLM Diseño Web" />
					<h2 className="fs-5 m-4 fw-bolder">
						REFUGIO Contactos: <br />
						<br /> MARCELO LUIS MORENO
						<br />
						<br />
						Celular: +54 9 381 519-3030 <br />
						<br />
						Email: refugio@gmail.com
					</h2>
					<a href="https://api.whatsapp.com/send?phone=5493814016822" target="_blank" rel="noopener noreferrer">
						<i className="btn bi-whatsapp btn fs-2"></i>
					</a>
					<a href="https://www.facebook.com/Refugio-Tienda-Deco-432894180958098" target="_blank" rel="noopener noreferrer">
						<i className="btn bi-facebook fs-2"></i>
					</a>
					<a href="https://www.instagram.com/refugio_tiendadeco/" target="_blank" rel="noopener noreferrer">
						<i className="btn bi-instagram fs-2"></i>
					</a>
				</div>
				<div className="text-center">
					<a href="https://github.com/MarceloLuisMoreno" target="blank">
						<img src="assets/img/logoMlm.png" className="pt-5 m-1" style={{ width: 70 }} alt="Logo MLM Diseño Web" />
					</a>
				</div>
				<p>Diseño Web</p>
				<br />
			</Fade>
		</Container>
	)
}

export default ContactContainer
