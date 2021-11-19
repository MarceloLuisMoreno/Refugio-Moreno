import {Button, Form, Col, Row} from "react-bootstrap";

function CartForm({formData, handleSubmit, handleChange}) {
	return (
		<form onSubmit={handleSubmit} onChange={handleChange}>
			<Form.Group as={Row} className="mb-3">
				<Form.Label column sm={3}>
					Nombre
				</Form.Label>
				<Col sm={11}>
					<Form.Control
						placeholder="Nombre y Apellido"
						name="name"
						required
						defaultValue={formData.name}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label column sm={3}>
					Telefono
				</Form.Label>
				<Col sm={11}>
					<Form.Control
						placeholder="Telefono"
						name="phone"
						defaultValue={formData.phone}
						required
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label column sm={3}>
					email
				</Form.Label>
				<Col sm={11}>
					<Form.Control
						placeholder="@email"
						name="email"
						required
						defaultValue={formData.email}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3">
				<Form.Label column sm={3}>
					Reingresar
				</Form.Label>
				<Col sm={11}>
					<Form.Control
						placeholder="@email2"
						name="email2"
						required
						defaultValue={formData.email2}
					/>
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
	);
}

export default CartForm;
