import { Form, InputGroup } from 'react-bootstrap';

const BuscadorDeClientes = ({ onBuscar }) => {

    const capturarEscritura = (e) => {
        onBuscar(e.target.value); 
    };

    return (
        <InputGroup className="mb-4 shadow-sm">
            <InputGroup.Text id="buscador-icono">🔍</InputGroup.Text>
            <Form.Control
                type="text"
                placeholder="Buscar cliente por apellido o ciudad"
                onChange={capturarEscritura}
                aria-label="Buscar cliente"
            />
        </InputGroup>
    );
};

export default BuscadorDeClientes;