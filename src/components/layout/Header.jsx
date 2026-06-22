import {useNavigate, Link} from 'react-router-dom';
import {Navbar, Container, Button, Nav} from 'react-bootstrap';
import {useAdmin} from '../../hook/useAdmin';

const Header = () => {
    const navigate = useNavigate();
    const { adminActivo, cerrarSesion } = useAdmin();

    const handleLogout = () => {
        cerrarSesion();
        localStorage.removeItem('adminSession');
        navigate('/login');
    }


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/dashboard">Sistema de Gestión</Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                    {adminActivo && (
                        <>
                        <Nav className="me-3">

                                <Nav.Link onClick={() => navigate('/clientes')}>
                                    Clientes
                                </Nav.Link>

                                <Nav.Link onClick={() => navigate('/dashboard')}>
                                    Dashboard
                                </Nav.Link>

                            </Nav>
                            <Nav.Link as={Link} to="/dashboard" className="text-white me-3">
                                Dashboard
                            </Nav.Link>
                            <Navbar.Text className="me-3 text-white">
                                {adminActivo.nombre} | {adminActivo.sector}
                            </Navbar.Text>
                            <Button variant="danger" size="sm" onClick={handleLogout}>
                                Cerrar Sesión
                            </Button>
                        </>
                    )}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;