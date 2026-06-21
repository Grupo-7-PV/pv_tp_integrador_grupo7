import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Form, Container, Button } from "react-bootstrap";
import { obtenerClientePorId} from "../services/clienteService";
import { useAdmin } from '../hook/useAdmin';

const FichaCliente = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [cliente, setCliente] = useState(null);
    const { adminActivo } = useAdmin();

    useEffect(() => {
        const cargarCliente = async () => {
            const datos = await obtenerClientePorId(id);
            setCliente(datos); 
        };
    
        cargarCliente();
    }, [id]);

    if (!cliente) {
        return <Container className="mt-4"><h3>Cargando...</h3></Container>;
    }

    return (
        <Container className="mt-4">
            <Card>
                <Card.Header className="bg-dark text-white">
                    <h3>Ficha de Cliente</h3>
                </Card.Header>
                <Card.Body>
                    <Form.Group className="mb-2">
                        <Form.Label><strong>Nombre:</strong></Form.Label>
                        <Form.Control
                            value={`${cliente.name?.firstname || ""} ${cliente.name?.lastname || ""}`}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label><strong>Email:</strong></Form.Label>
                        <Form.Control value={cliente.email || ""} disabled />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label><strong>Calle:</strong></Form.Label>
                        <Form.Control value={cliente.address?.street || ""} disabled />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label><strong>Ciudad:</strong></Form.Label>
                        <Form.Control value={cliente.address?.city || ""} disabled />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label><strong>Código Postal:</strong></Form.Label>
                        <Form.Control value={cliente.address?.zipcode || ""} disabled />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><strong>Contraseña:</strong></Form.Label>
                        <Form.Control type="password" value={cliente.password} disabled />
                    </Form.Group>
                    <div className="d-flex justify-content-between mt-4">
                        <Button variant="primary" onClick={() => navigate("/clientes")}>
                            Volver
                        </Button>
                        {adminActivo?.sector === "Gerencia" && (
                            <Button variant="danger" className="fw-bold px-4">
                                Eliminar Cliente
                            </Button>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default FichaCliente;