//Component NavBar
import {Link} from "react-router-dom";
import {Navbar, Nav, Container} from "react-bootstrap";
import CardWidget from "./CardWidget";

function NavBar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
			<Container>
			<Link to="/">
				<img
					src="/refugio.png"
					className="nav-link d-inline-block align-top mx-5 ps-5"
					alt="Refugio Tienda Deco logo"
				/>
			</Link>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Link className="nav-link" to="/">Home</Link>
					<Link className="nav-link"  to="/category/todos">Productos</Link>
					<Link className="nav-link"  to="/category/plantas">Plantas</Link>
					<Link className="nav-link"  to="/category/cuadros">Cuadros</Link>
					<Link className="nav-link"  to="/category/macetas">Macetas</Link>
					<Link className="nav-link"  to="/category/vinilos">Vinilos</Link>
				</Nav>
			</Navbar.Collapse>
			<Link to="/cart" className="nav-link ms-5 ps-5">
				<CardWidget />
			</Link>
			</Container>

		</Navbar>
	);
}

export default NavBar;
