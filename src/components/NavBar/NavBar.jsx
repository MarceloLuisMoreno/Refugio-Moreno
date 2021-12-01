//Component NavBar
import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from "react-bootstrap"
import CardWidget from "./../CardWidget/CardWidget"

function NavBar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="fs-5">
			<Container>
				<Link to="/home">
					<img src="/refugio.png" className="nav-link d-inline-block align-top" loading="lazy" alt="Refugio Tienda Deco logo" />
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-5 ps-5">
						<Link className="nav-link" to="/home">
							Home
						</Link>
						<Link className="nav-link" to="/us">
							Nosotros
						</Link>
						<Link className="nav-link" to="/">
							Catálogo
						</Link>
						<Link className="nav-link" to="/gallery">
							Galería
						</Link>
						<Link className="nav-link" to="/contact">
							Contacto
						</Link>
					</Nav>
				</Navbar.Collapse>
				<Link to="/cart" className="nav-link ms-5 ps-5">
					<CardWidget />
				</Link>
			</Container>
		</Navbar>
	)
}

export default NavBar
