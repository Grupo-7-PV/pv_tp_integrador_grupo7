export const obtenerClientes = async () => {
    try {
        const respuesta = await fetch("https://fakestoreapi.com/users");
 
        if (!respuesta.ok) {
            throw new Error("Error al obtener clientes");
        }
 
        const clientes = await respuesta.json();
 
        return clientes;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
 