import { Navbar, Nav, Container, Button, Spinner } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Slide } from "react-awesome-reveal"
import { getFirestore } from "./../../services/getFirestore"
import ItemList from "./../ItemList/ItemList"
import ShowError from "./../ShowError/ShowError"

function ItemListContainer() {
	const { categoryId } = useParams()
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)
	const [messageErr, setmessageErr] = useState("")
	
	useEffect(() => {
		const db = getFirestore()
		const dbQuery =
			categoryId === undefined
				? db.collection("items").orderBy("category", "asc").orderBy("name")
				: db.collection("items").where("category", "==", categoryId).orderBy("name")
		dbQuery
			.get()
			.then((resp) => setItems(resp.docs.map((items) => ({ id: items.id, ...items.data() }))))
			.catch((err) => setmessageErr(err))
			.finally(() => setLoading(false))
	}, [categoryId])

	// Para resetear el Mensaje de error
	const handleMessageErr = () => setmessageErr("")

	return (
		<Container className="text-center">
			<Slide direction="down">
				<br />
				<h2 className="mt-5 text-center fw-bolder">Catálogo de Productos</h2>
			</Slide>
			<Navbar className=" fs-5 justify-content-center shadow">
				<Nav className="mx-auto fw-bolder">
					<p className="mt-2 me-5 text-success">Seleccionar Categoría:</p>
					<Link className="nav-link" to="/">
						Todas
					</Link>
					<Link className="nav-link" to="/category/cuadros">
						Cuadros
					</Link>
					<Link className="nav-link" to="/category/macetas">
						Macetas
					</Link>
					<Link className="nav-link" to="/category/plantas">
						Plantas
					</Link>
					<Link className="nav-link" to="/category/vinilos">
						Vinilos
					</Link>
				</Nav>
			</Navbar>

			{loading ? (
				<Button className="m-5" variant="success" disabled>
					<Spinner as="span" animation="border" role="status" aria-hidden="true" size="lg" />L O A D I N G ...
				</Button>
			) : (
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xxl-4 mb-5 text-center">
					<ItemList items={items} />
				</div>
			)}
			<div>
				{messageErr !== "" && (
					<>
						<ShowError message={messageErr} handleMessageErr={handleMessageErr} />
					</>
				)}
			</div>
		</Container>
	)
}

export default ItemListContainer
