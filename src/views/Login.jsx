import { Container, Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import {login} from '../Services/authService.js';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [sector, setSector] = useState('');
    const handleSubmit = async (e) => { e.preventDefault();
       
        try {
            const perfil = await login(usuario, contraseña, sector);
            console.log("Perfil del usuario:", perfil);
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };
    return (<Container
        className="d-flex align-items-center justify-content-center vh-100"
    >
        <Card style={{ width: '300px', borderRadius: "30px" }}
        >
            <Card.Body>
                <Card.Title className="text-center mb-4">
                    Login
                </Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text"
                            placeholder="usuario"
                            style={{ borderRadius: "50px" }}
                            value={usuario}
                            onChange={e => setUsuario(e.target.value)}>

                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="password"
                            placeholder="contraseña"
                            style={{ borderRadius: "50px" }}
                            value={contraseña}
                            onChange={e => setContraseña(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Select style={{ borderRadius: "50px" }}
                            value={sector}
                            onChange={e => setSector(e.target.value)}>
                            <option value="">Seleccionar sector</option>
                            <option value="Gerencia">Gerencia</option>
                            <option value="Soporte">Soporte</option>
                        </Form.Select>
                    </Form.Group>
                    <Button type="submit" className="w-100" style={{ borderRadius: "50px" }}>
                        INGRESAR
                    </Button>
                </Form>

            </Card.Body>
        </Card>
    </Container >)
}

export default Login;
