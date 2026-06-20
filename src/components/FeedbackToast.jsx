import { ToastContainer, Toast } from "react-bootstrap"
import { useState } from "react"

const FeedbackToast = ({ estado, id }) => {

    const [show, setShow] = useState(true)

    return (
        <ToastContainer 
           position="top-end" 
           className="p-3" 
           style={{ marginTop: "60px" }}
           >
            <Toast autohide delay={3000}
                bg={estado === 201 ? "success" : "danger"}
                show={show}
                onClose={() => setShow(false)}
                autohide>
                <Toast.Header closeButton={false}>
                    <strong className="me-auto">
                        {estado === 201 ? "Exito" : "Error"}
                    </strong>
                </Toast.Header>

                <Toast.Body>
                    {estado === 201 ? (
                        <>
                            Cliente creado correctamente
                            <br />
                            ID asignado: {id}
                        </>
                    ) : (
                        "Error al creador el cliente."
                    )}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default FeedbackToast