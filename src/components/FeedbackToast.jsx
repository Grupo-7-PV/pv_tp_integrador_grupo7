import { ToastContainer, Toast } from "react-bootstrap"
import { useState } from "react"

const FeedbackToast = ({ estado, id, tipo }) => {

    const [show, setShow] = useState(true)

    const esEliminacion = tipo === "eliminacion";
    const esExito = estado === 201 || esEliminacion;

    return (
        <ToastContainer 
           position="top-end" 
           className="toast-container p-3" 
           >
            <Toast
                autohide
                delay={3000}
                bg={esExito ? "success" : "danger"}
                show={show}
                onClose={() => setShow(false)}>
                <Toast.Header closeButton={false}>
                    <strong className="me-auto">
                        {esExito ? "Éxito" : "Error"}
                    </strong>
                </Toast.Header>

                <Toast.Body className="text-white">
                    {esEliminacion ? (
                        "Cliente eliminado correctamente."
                    ) : estado === 201 ? (
                        <>
                            Cliente creado correctamente
                            <br />
                            ID asignado: {id}
                        </>
                    ) : (
                        "Error al crear el cliente."
                    )}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default FeedbackToast