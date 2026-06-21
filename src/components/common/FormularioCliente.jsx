import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import { useFormCliente } from '../../hook/useFormCliente';

const FormularioCliente = ({onGuardar}) => {
    const {formData,errores,mostrarPassword,togglePassword,handleChange,handleSubmit} = useFormCliente(onGuardar);


    return (
        <Form noValidate onSubmit={handleSubmit}>
            <h4 className="mb-4 text-primary">Alta de Nuevo Cliente</h4>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre"
                            placeholder="Ingrese el nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            isInvalid={!!errores.nombre}
                        />
                        <Form.Control.Feedback type="invalid">{errores.nombre}</Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            name="apellido"
                            placeholder="Ingrese el apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            isInvalid={!!errores.apellido}
                        />
                        <Form.Control.Feedback type="invalid">{errores.apellido}</Form.Control.Feedback>

                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Ingrese el email"
                            value={formData.email}
                            onChange={handleChange}
                            isInvalid={!!errores.email}
                        />
                        <Form.Control.Feedback type="invalid">{errores.email}</Form.Control.Feedback>

                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            type="text"
                            name="telefono"
                            placeholder="Ingrese el teléfono"
                            value={formData.telefono}
                            onChange={handleChange}
                            isInvalid={!!errores.telefono}
                        />
                        <Form.Control.Feedback type="invalid">{errores.telefono}</Form.Control.Feedback>

                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control
                            type="text"
                            name="ciudad"
                            placeholder="Ingrese la ciudad"
                            value={formData.ciudad}
                            onChange={handleChange}
                            isInvalid={!!errores.ciudad}
                        />
                        <Form.Control.Feedback type="invalid">{errores.ciudad}</Form.Control.Feedback>

                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            placeholder="Ingrese el username"
                            value={formData.username}
                            onChange={handleChange}
                            isInvalid={!!errores.username}
                        />
                        <Form.Control.Feedback type="invalid">{errores.username}</Form.Control.Feedback>

                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                            type={mostrarPassword ? "text" :"password"}
                            name="password"
                            placeholder="Ingrese contraseña"
                            value={formData.password}
                            onChange={handleChange}
                            isInvalid={!!errores.password}
                        />
                        <Button 
                            variant="outline-secondary" 
                            onClick={togglePassword}
                            tabIndex="-1" 
                            >{mostrarPassword ? "Ocultar" : "Ver"}
                        </Button>
                        <Form.Control.Feedback type="invalid">{errores.password}</Form.Control.Feedback>

                        </InputGroup>
 
                    </Form.Group>
                </Col>
            </Row>

            <Button type="submit" variant="primary" className="w-100 fw-bold">
                Guardar Cliente
            </Button>

        </Form>
    );
};

export default FormularioCliente;