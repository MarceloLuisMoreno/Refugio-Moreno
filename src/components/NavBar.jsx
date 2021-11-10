//Component NavBar
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import CardWidget from "./CardWidget";


function NavBar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
			<Link to="/">
				<img
					src="/refugio.png"
					className="d-inline-block align-top mx-5 ps-5"
					alt="Refugio Tienda Deco logo"
				/>
			</Link>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link as={Link} to="/">Home</Nav.Link>
					<Nav.Link as={Link} to="/category/todos">Productos</Nav.Link>
					<Nav.Link as={Link} to="/category/plantas">Plantas</Nav.Link>
					<Nav.Link as={Link} to="/category/cuadros">Cuadros</Nav.Link>
					<Nav.Link as={Link} to="/category/macetas">Macetas</Nav.Link>
					<Nav.Link as={Link} to="/category/vinilos">Vinilos</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			<Nav.Link to="/cart" className="ms-5 ps-5">
				<CardWidget cantidad={0} />
			</Nav.Link>
		</Navbar>
	);
}

export default NavBar;
