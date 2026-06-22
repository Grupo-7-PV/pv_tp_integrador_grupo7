import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useDashboardStats } from "../hook/useDashboardStats";

const Dashboard = () => {
  const { totalClientes, ciudadTop, clientesPorCiudad, cargando, error } =
    useDashboardStats();

  if (cargando) {
    return (
      <Container className="mt-5 d-flex justify-content-center">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Panel de Control</h2>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Total de Clientes</Card.Title>
              <Card.Text className="display-5 fw-bold">
                {totalClientes}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Ciudad con más clientes</Card.Title>
              <Card.Text className="display-6 fw-bold">
                {ciudadTop ? ciudadTop.ciudad : "Sin datos"}
              </Card.Text>
              {ciudadTop && (
                <Card.Subtitle className="text-muted">
                  {ciudadTop.cantidad} cliente(s)
                </Card.Subtitle>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="mb-3">Clientes por Ciudad</Card.Title>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={clientesPorCiudad}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ciudad" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="cantidad" fill="#0d6efd" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;
