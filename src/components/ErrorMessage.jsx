import {Modal, Button} from "react-bootstrap";

function ErrorMessage({closeModal}) {
	
const mensaje="kjasdlfkjasdlfkjalskdfjaslkdfjlkasdjf"
	return (
		<>
			<Modal show={true} onHide={closeModal}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>{mensaje}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeModal}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ErrorMessage;
