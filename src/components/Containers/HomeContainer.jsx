import {Container} from "react-bootstrap";

function HomeContainer({greeting}) {
	return (
		<Container>
			<h2 className="text-center pt-5 mt-5">{greeting}</h2>
			<img
				src="assets/img/productos.png"
				className="container pt-5"
				alt="Refugio Tienda Deco productos"
			/>
			<h2 className="text-center p-3">Objetos de Diseño para tu casa</h2>
			<br />
			<br />
			<br />
		</Container>
	);
}

export default HomeContainer;
