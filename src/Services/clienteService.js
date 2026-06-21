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

export const obtenerClientePorId = async (id) => {
    try {
        const respuesta = await fetch(`https://fakestoreapi.com/users/${id}`);

        if (!respuesta.ok) throw new Error("Error al obtener el cliente");
        
        return await respuesta.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const crearCliente = async (nuevoCliente) => {
    try {
        const respuesta =await fetch('https://fakestoreapi.com/users',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevoCliente)
        });

        if(!respuesta.ok) {
            throw new Error('Error al intentar crear el nuevo cliente...');
        }

        const data = await respuesta.json();
        return data;
    } catch (error) {
        console.error("Fallo en la peticion del POST:",error);
        throw error;
    }
}
 