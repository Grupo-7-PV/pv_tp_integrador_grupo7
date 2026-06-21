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

export const obtenerClientePorID = async (id) => {
    try{
        const respuesta = await fetch(`https://fakestoreapi.com/users/${id}`);


    
        if(!respuesta.ok){
            throw new Error(`Error al obtener el cliente con ID: ${id}`);
        }
        const cliente = await respuesta.json();
        return cliente;

    }catch (error){
        console.error("Fallo en la petición GET por ID:", error);
        throw error;

    }
}

export const eliminarCliente = async (id) => {
    try{
        const respuesta = await fetch (`https://fakestoreapi.com/users/${id}`,{
            method: 'POST',
        });
        

        if (!respuesta.ok){
            throw new Error(`Error al intentar eliminar el cliente con ID: ${id}`);
        }
         
        const data = await respuesta.json();
        return data;

    }catch (error){
        console.error("Fallo en la peticion DELETE", error)
        throw error;

    }
}
 