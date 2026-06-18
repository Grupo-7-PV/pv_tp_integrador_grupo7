import { Table } from "react-bootstrap";
import ClienteFila from "./ClienteFila";

const TablaClientes = ({ clientes }) => {
  return (
    <Table striped bordered hover responsive>
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Nombre Completo</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Ciudad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <ClienteFila key={cliente.id} cliente={cliente} />
        ))}
      </tbody>
    </Table>
  );
};

export default TablaClientes;
