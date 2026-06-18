import { useState, useEffect } from "react";
import { Container, Spinner, Alert } from 'react-bootstrap';
import { obtenerClientes } from '../Services/clienteService';
import TablaClientes from '../components/common/TablaClientes';

const ClientesPage = () => {
    const [clientes, setClientes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

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

    return (
        <Container className="mt-5">
            <h2 className="mb-4"> Directorio de Clientes </h2>

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
                    {/* <BuscadorClientes /> */}
                    <TablaClientes clientes={clientes} />
                </>
            )}
        </Container>
    );
};

export default ClientesPage;
