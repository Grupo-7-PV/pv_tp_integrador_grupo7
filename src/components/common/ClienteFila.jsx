import { Link } from "react-router-dom";

const ClienteFila = ({ cliente }) => {
    return (
        <tr>
            <td>{cliente.id}</td>
            <td>{cliente.name.firstname} {cliente.name.lastname}</td>
            <td>{cliente.email}</td>
            <td>{cliente.phone}</td>
            <td>{cliente.address.city}</td>
            <td>
                <Link
                    to={`/clientes/${cliente.id}`} className="btn btn-primary btn-sm">
                    Ver Ficha Completa
                </Link>
            </td>
        </tr>
    );
};

export default ClienteFila;