import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFirestore } from "./../../services/getFirestore"
import { Button, Spinner } from "react-bootstrap"
import { Container } from "react-bootstrap"
import ItemDetail from "./../ItemDetail/ItemDetail"
import ShowError from "./../ShowError/ShowError"

function ItemDetailContainer() {
	const { itemId } = useParams()
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)
	const [messageErr, setmessageErr] = useState("")

	useEffect(() => {
		const db = getFirestore()
		const dbQuery = db.collection("items").doc(itemId).get()
		dbQuery
			.then((resp) => setItems({ id: resp.id, ...resp.data() }))
			.catch((err) => setmessageErr(err))
			.finally(() => setLoading(false))
		//  comando para eliminar el warning
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemId])

	// Para resetear el Mensaje de error
	const handleMessageErr = () => setmessageErr("")

	return (
		<>
			<br />
			<br />
			{loading ? (
				<Container className="text-center">
					<Button className="m-5" variant="success" disabled>
						<Spinner as="span" animation="border" size="lg" role="status" aria-hidden="true" />L O A D I N G ...
					</Button>
				</Container>
			) : (
				<ItemDetail item={items} />
			)}
			<div>
				{messageErr !== "" && (
					<>
						<ShowError message={messageErr} handleMessageErr={handleMessageErr} />
					</>
				)}
			</div>
		</>
	)
}

export default ItemDetailContainer
