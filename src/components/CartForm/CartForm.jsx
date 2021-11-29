import { Button, Form, Col, Row, Modal, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Fade } from "react-awesome-reveal"

function CartForm({ showForm, formData, handleSubmit, handleChange, handleClose, orderId, orderProcess }) {
	return (
		<Modal show={showForm}>
			<Modal.Header className="bg-success">
				<Modal.Title className="text-white">Formulario de Compra</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form onSubmit={handleSubmit} onChange={handleChange}>
					<Form.Group as={Row} className="mb-3">
						<Form.Label column sm={3}>
							Nombre
						</Form.Label>
						<Col sm={11}>
							<Form.Control placeholder="Nombre y Apellido" name="name" required defaultValue={formData.name} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3">
						<Form.Label column sm={3}>
							Telefono
						</Form.Label>
						<Col sm={11}>
							<Form.Control placeholder="Telefono" name="phone" required defaultValue={formData.phone} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3">
						<Form.Label column sm={3}>
							email
						</Form.Label>
						<Col sm={11}>
							<Form.Control placeholder="@email" name="email" required defaultValue={formData.email} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3">
						<Form.Label column sm={3}>
							Reingresar
						</Form.Label>
						<Col sm={11}>
							<Form.Control placeholder="repetir email" name="email2" required defaultValue={formData.email2} />
						</Col>
					</Form.Group>
					{formData.email !== "" && formData.email === formData.email2 ? (
						<Form.Group as={Row} className="mb-4 align-items-center">
							<Col sm={10}>
								<Button type="submit" variant="success">
									Generar Orden
								</Button>
							</Col>
						</Form.Group>
					) : (
						<></>
					)}
				</form>
			</Modal.Body>
			<Modal.Footer>
				{orderProcess &&
					(orderId === "" ? (
						<Modal.Body className="text-center text-success">
							<Spinner as="span" animation="border" role="status" aria-hidden="true" size="lg" />
							Procesando ...
						</Modal.Body>
					) : (
						<>
							<Fade left opposite cascade>
								<Modal.Body className="bg-danger text-center text-white fw-normal">
									{`La Orden se generó correctamente, muchas GRACIAS por su Compra!!! Para seguimiento de la misma tome nota del siguiente Número: ${orderId}`}
								</Modal.Body>
							</Fade>
							<Button as={Link} to="/" variant="success" onClick={handleClose}>
								Close
							</Button>
						</>
					))}
			</Modal.Footer>
		</Modal>
	)
}

export default CartForm
