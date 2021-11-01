//Component NavBar
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import CardWidget from "./CardWidget";

function NavBar() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
				<Container>
					<Navbar.Brand as={Link} to="/">
						<img
							src="/refugio.png"
							className="d-inline-block align-top"
							alt="Refugio Tienda Deco logo"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/category/todos">
								Productos
							</Nav.Link>
							<Nav.Link as={Link} to="/category/plantas">
								Plantas
							</Nav.Link>
							<Nav.Link as={Link} to="/category/cuadros">
								Cuadros
							</Nav.Link>
							<Nav.Link as={Link} to="/category/macetas">
								Macetas
							</Nav.Link>
							<Nav.Link as={Link} to="/category/vinilos">
								Vinilos
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Nav>
						<Nav.Link href="#carrito">
							<CardWidget cantidad="0" />
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<br />
		</>
	);
}

export default NavBar;
