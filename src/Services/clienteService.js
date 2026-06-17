export const obtenerUsuarios = async () => {
    try{
        const respuesta = await("https://fakestoreapi.com/users")
    if (!respuesta.ok){
        throw new Error("Error al obtener ususarios")
    }
    
    const usuarios = await respuesta.json()

    return usuarios
}catch(error){
    console.error(error)
    throw error
}
}