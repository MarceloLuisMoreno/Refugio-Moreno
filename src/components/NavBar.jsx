//Component NavBar

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import CardWidget from "./CardWidget";

function NavBar() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
				<Container>
					<Navbar.Brand href="#home">
						<img
							src="/refugio.png"
							className="d-inline-block align-top"
							alt="Refugio Tienda Deco logo"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#nosotros">Nosotros</Nav.Link>
							<Nav.Link href="#fotos">Fotos</Nav.Link>
							<NavDropdown title="Productos" id="basic-nav-dropdown">
								<NavDropdown.Item href="#cuadros">Cuadros</NavDropdown.Item>
								<NavDropdown.Item href="#macetas">Macetas</NavDropdown.Item>
								<NavDropdown.Item href="#plantas">Plantas</NavDropdown.Item>
							</NavDropdown>
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
		</div>
	);
}

export default NavBar;
