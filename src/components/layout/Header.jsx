import {useNavigate} from 'react-router-dom';
import {Navbar, Container, Button} from 'react-bootstrap';
import {useAdmin} from '../../hook/useAdmin';

const Header = () => {
    const navigate = useNavigate();
    const {adminActivo, cerrarSesion}=useAdmin();

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

                    {adminActivo && (
                        <>
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