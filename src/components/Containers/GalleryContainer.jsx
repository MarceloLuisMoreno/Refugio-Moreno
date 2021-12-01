import { Carousel, Container } from "react-bootstrap"

function GalleryContainer() {
	return (
		<Container>
			<br />
			<br />
			<Carousel className="m-5 pt-5">
				<Carousel.Item>
					<img className="d-block w-100" src="assets/gallery/gallery1.png" alt="First slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="assets/gallery/gallery2.png" alt="Second slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="assets/gallery/gallery3.png" alt="Third slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="assets/gallery/gallery4.png" alt="Four slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="assets/gallery/gallery5.png" alt="Five slide" />
				</Carousel.Item>
			</Carousel>
			<h2 className="text-center">Refugio - Galería de Productos</h2>
			<br />
			<br />
			<br />
		</Container>
	)
}

export default GalleryContainer
