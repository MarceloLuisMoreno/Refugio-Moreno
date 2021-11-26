import { useState, useEffect } from "react"
import ItemDetail from "./../ItemDetail"
import { useParams } from "react-router-dom"
import { getFirestore } from "./../../services/getFirestore"
import { Button, Spinner } from "react-bootstrap"
import { Container } from "react-bootstrap"

function ItemDetailContainer() {
	const { itemId } = useParams()
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const db = getFirestore()
		const dbQuery = db.collection("items").doc(itemId).get()
		dbQuery
			.then((resp) => setItems({ id: resp.id, ...resp.data() }))
			.catch((err) => alert(`UPSSS Error: ${err}`))
			.finally(() => setLoading(false))
		//  comando para eliminar el warning
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemId])

	return (
		<>
			<br />
			<br />
			{loading ? (
				<Container>
					<Button className="m-5" variant="success" disabled>
						<Spinner as="span" animation="border" size="lg" role="status" aria-hidden="true" />L O A D I N G ...
					</Button>
				</Container>
			) : (
				<ItemDetail item={items} />
			)}
		</>
	)
}

export default ItemDetailContainer
