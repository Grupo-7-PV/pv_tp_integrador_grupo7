import { useState } from "react";
import { Container, Spinner, Alert, Button, Modal } from 'react-bootstrap';
import { useClientes } from "../hook/useClientes";


import TablaClientes from '../components/common/TablaClientes';
import BuscadorDeClientes from "../components/common/BuscadorDeClientes";
import FormularioCliente from "../components/common/FormularioCliente";
import FeedbackToast from "../components/FeedbackToast";

const ClientesPage = () => {

    const { clientes, cargando, error, toast, handleGuardarCliente } = useClientes();

    const [busqueda, setBusqueda] = useState("");
    const [mostrarModal, setMostrarModal] = useState(false);

        const clientesFiltrados = clientes.filter((cliente) => {
        const apellido = cliente.name.lastname.toLowerCase();
        const ciudad = cliente.address.city.toLowerCase();
        const textoBuscado = busqueda.toLowerCase();

        return apellido.includes(textoBuscado) || ciudad.includes(textoBuscado);
    });

    const onGuardar = async (nuevoCliente) => {
        const exito = await handleGuardarCliente(nuevoCliente);
        if(exito) setMostrarModal(false);
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
                    <FormularioCliente onGuardar={onGuardar} />
                </Modal.Body>
            </Modal>

            {toast && (
                <FeedbackToast estado={toast.estado} id={toast.id} />
            )}
        </Container>
    );
};

export default ClientesPage;
