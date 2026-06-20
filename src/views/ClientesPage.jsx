import { useState, useEffect } from "react";
import { Container, Spinner, Alert, Button, Modal } from 'react-bootstrap';
import { obtenerClientes, crearCliente } from '../Services/clienteService';
import TablaClientes from '../components/common/TablaClientes';
import BuscadorDeClientes from "../components/common/BuscadorDeClientes";
import FormularioCliente from "../components/common/FormularioCliente";
import FeedbackToast from "../components/FeedbackToast";

const ClientesPage = () => {
    const [clientes, setClientes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [busqueda, setBusqueda] = useState("");

    const [mostrarModal, setMostrarModal] = useState(false);
    const [toast, setToast] = useState(null); // { estado, id }

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const data = await obtenerClientes();
                setClientes(data);
                setCargando(false);
            } catch (err) {
                setError('Problema al cargar los clientes. Por favor intente de nuevo mas tarde...');
                setCargando(false);
            }
        };

        cargarDatos();
    }, []);

    const clientesFiltrados = clientes.filter((cliente) => {
        const apellido = cliente.name.lastname.toLowerCase();
        const ciudad = cliente.address.city.toLowerCase();
        const textoBuscado = busqueda.toLowerCase();

        return apellido.includes(textoBuscado) || ciudad.includes(textoBuscado);
    });

    const handleGuardarCliente = async (nuevoCliente) => {
        try {
            const respuesta = await crearCliente(nuevoCliente);

            setClientes((prev) => [...prev, { ...nuevoCliente, id: respuesta.id }]);
            setToast({ estado: 201, id: respuesta.id });
            setMostrarModal(false);
        } catch (err) {
            setToast({ estado: 500, id: null });
        }
    };

    return (
        <Container className="mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="m-0">Directorio de Clientes</h2>
                <Button variant="success" onClick={() => setMostrarModal(true)}>
                    + Nuevo Cliente
                </Button>
            </div>

            {cargando && (
                <div className="d-flex justify-content-center my-5">
                    <Spinner animation="border" variant="primary" role="status">
                        <span className="visually-hidden">Cargando... </span>
                    </Spinner>
                </div>
            )}

            {error && (
                <Alert variant="danger">
                    {error}
                </Alert>
            )}

            {!cargando && !error && (
                <>
                    <BuscadorDeClientes onBuscar={setBusqueda} />

                    <TablaClientes clientes={clientesFiltrados} />
                </>
            )}

            <Modal show={mostrarModal} onHide={() => setMostrarModal(false)} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo Cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormularioCliente onGuardar={handleGuardarCliente} />
                </Modal.Body>
            </Modal>

            {toast && (
                <FeedbackToast estado={toast.estado} id={toast.id} />
            )}
        </Container>
    );
};

export default ClientesPage;
