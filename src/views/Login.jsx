import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../Services/authService.js';
import { useAdmin } from '../hook/useAdmin.js';



const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [sector, setSector] = useState('');
    const { iniciarSesion } = useAdmin();
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        if (!usuario || !password || !sector) {
            setError("Completar todos los campos");
            return;
        }

        try {
            const perfil = await login(usuario, password, sector);
            iniciarSesion(perfil);

            console.log("Perfil del usuario:", perfil);

            navigate('/dashboard')


        } catch (error) {
            console.error("Error al iniciar sesión:", error);

            setError("Usuario o contraseña incorrectos");
        }
    };

    return (<Container
        className="login-container d-flex align-items-center justify-content-center"
    >
        <Card className='login-card'
        >
            <Card.Body>
                <Card.Title className="text-center mb-4">
                    Login
                </Card.Title>
                {error && (
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text"
                            placeholder="usuario"
                            className='login-input'
                            value={usuario}
                            onChange={e => setUsuario(e.target.value)}>

                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="password"
                            placeholder="contraseña"
                            className='login-input'
                            value={password}
                            onChange={e => setPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Select className='login-select'
                            value={sector}
                            onChange={e => setSector(e.target.value)}>
                            <option value="">Seleccionar sector</option>
                            <option value="Gerencia">Gerencia</option>
                            <option value="Soporte">Soporte</option>
                        </Form.Select>
                    </Form.Group>
                    <Button type="submit" className="boton-ingresar">
                        INGRESAR
                    </Button>
                </Form>

            </Card.Body>
        </Card>
    </Container >)
}

export default Login;
