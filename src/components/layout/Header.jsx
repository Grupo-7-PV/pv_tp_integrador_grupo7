import {useNavigate} from 'react-router-dom';
import {Navbar, Container, Button} from 'react-bootstrap';
import {useAuth} from '../../hook/useAuth';

const Header = () => {
    const navigate = useNavigate();
    const {userActivo, cerrarSesion}=useAuth();

    const handleLogout = () => {
        cerrarSesion();
        localStorage.removeItem('adminSession');
        navigate('/login');
    }


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Sistema de Gestión</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                    {userActivo && (
                        <>
                            <Navbar.Text className="me-3 text-white">
                                {userActivo.nombre} | {userActivo.sector}
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