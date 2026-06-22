import { useState, useEffect } from "react";
import { obtenerClientes, crearCliente } from '../Services/clienteService';

export const useClientes = () => {
    const [clientes, setClientes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [toast, setToast] = useState(null);

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const data = await obtenerClientes();
                setClientes(data);
                setCargando(false);
            } catch (err) {
                setError('Problema al cargar los clientes. Por favor intente de nuevo mas tarde...');
                setCargando(false);
            }
        };

        cargarDatos();
    }, []);

    const handleGuardarCliente = async (nuevoCliente) => {
        try {
            const respuesta = await crearCliente(nuevoCliente);
            setClientes((prev) => [...prev, { ...nuevoCliente, id: respuesta.id }]);
            setToast({ estado: 201, id: respuesta.id });
            return true; 
        } catch (err) {
            setToast({ estado: 500, id: null });
            return false; 
        }
    };

    return { clientes, cargando, error, toast, setToast, handleGuardarCliente };
};