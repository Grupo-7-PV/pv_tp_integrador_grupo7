import { Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';


const FormularioCliente = ({onGuardar}) => {

    const[formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        ciudad: '',
        username: '',
        password: ''  
    });

    const [errores, setErrores] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData,[name]:value})

        if(errores[name]){
            setErrores({...errores, [name]:null});
        }
    };
    const validarFormulario = () => {
        const nuevosErrores = {};
        if (!formData.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.';
        if (!formData.apellido.trim()) nuevosErrores.apellido = 'El apellido es obligatorio.';
        if (!formData.city.trim()) nuevosErrores.city = 'La ciudad es obligatoria.';
        if (!formData.username.trim()) nuevosErrores.username = 'El nombre de usuario es obligatorio.';
        
        const emailVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            nuevosErrores.email = 'El email es obligatorio.';
        } else if (!emailVal.test(formData.email)) {
            nuevosErrores.email = 'El formato del email no es válido.';
        }

        const phoneVal = /^[0-9]{8,15}$/;
        if (!formData.telefono.trim()) {
            nuevosErrores.telefono = 'El teléfono es obligatorio.';
        } else if (!phoneVal.test(formData.telefono)) {
            nuevosErrores.telefono = 'Ingrese un número válido (8 a 15 dígitos).';
        }

        if (formData.password.length < 6) {
            nuevosErrores.password = 'La contraseña debe tener al menos 6 caracteres.';
        }

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0; 
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (validarFormulario()) {
            const dataAnidada = {
                email: formData.email,
                username: formData.username,
                password: formData.password,
                name: {
                    firstname: formData.nombre,
                    lastname: formData.apellido
                },
                address: {
                    city: formData.ciudad
                },
                phone: formData.telefono
            };

            onGuardar(dataAnidada);
            setFormData({
                nombre: '', apellido: '', email: '', telefono: '', ciudad: '', username: '', password: ''
            });
        }
    };



    return (
        <Form onSubmit={handleSubmit}>
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
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Ingrese contraseña"
                            value={formData.password}
                            onChange={handleChange}
                            isInvalid={!!errores.password}
                        />
                        <Form.Control.Feedback type="invalid">{errores.password}</Form.Control.Feedback>

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