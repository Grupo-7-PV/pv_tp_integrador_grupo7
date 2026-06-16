import { Container, Card, Form, Button } from 'react-bootstrap';

const Login = () => {
    return (<Container
        className="d-flex align-items-center justify-content-center vh-100"
    >
        <Card  style={{ width: '300px' , borderRadius:"30px" }} 
        >
            <Card.Body>
                <Card.Title className="text-center mb-4">
                    Login
                </Card.Title>
                    <Form>
                    <Form.Group className="mb-3">
                        <Form.Control type="text"
                            placeholder="usuario"
                            style={{ borderRadius: "50px" }}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="password"
                            placeholder="contraseña"
                            style={{ borderRadius: "50px" }}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Select style={{ borderRadius: "50px" }}>
                            <option value="">Seleccionar sector</option>
                            <option value="Gerencia">Gerencia</option>
                            <option value="Soporte">Soporte</option>
                        </Form.Select>
                    </Form.Group>
                    <Button className="w-100"style={{ borderRadius: "50px" }}>
                        INGRESAR
                    </Button>
                    </Form>
                
            </Card.Body>
        </Card>
    </Container>)
}
export default Login;
