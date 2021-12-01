import { Modal, Button } from "react-bootstrap"

function ShowError({ message, handleMessageErr }) {
	return (
		<Modal show={true}>
			<Modal.Header className="text-white bg-danger">
				<Modal.Title>UPSSS!!! se produjo un Error</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4 className="text-danger">Error:</h4>
				<p>{message}</p>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="danger"
					onClick={() => {
						handleMessageErr()
					}}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default ShowError
