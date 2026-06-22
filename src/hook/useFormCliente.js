import { useState } from 'react';

export const useFormCliente = (onGuardar) => {
    const [formData, setFormData] = useState({
        nombre: '', apellido: '', email: '', telefono: '', ciudad: '', username: '', password: ''
    });
    const [errores, setErrores] = useState({});
    const [mostrarPassword, setMostrarPassword] = useState(false);

    const togglePassword = () => setMostrarPassword(!mostrarPassword);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errores[name]) setErrores({ ...errores, [name]: null });
    };

    const validarFormulario = () => {
        const nuevosErrores = {};
        const textoVal = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        const emailVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneVal = /^[0-9]{8,15}$/;

        if (!formData.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.';
        else if (!textoVal.test(formData.nombre)) nuevosErrores.nombre = 'Solo puede contener letras.';

        if (!formData.apellido.trim()) nuevosErrores.apellido = 'El apellido es obligatorio.';
        else if (!textoVal.test(formData.apellido)) nuevosErrores.apellido = 'Solo puede contener letras.';

        if (!formData.ciudad.trim()) nuevosErrores.ciudad = 'La ciudad es obligatoria.';
        else if (!textoVal.test(formData.ciudad)) nuevosErrores.ciudad = 'Solo puede contener letras.';

        if (!formData.username.trim()) nuevosErrores.username = 'El nombre de usuario es obligatorio.';
        
        if (!formData.email.trim()) nuevosErrores.email = 'El email es obligatorio.';
        else if (!emailVal.test(formData.email)) nuevosErrores.email = 'El formato del email no es válido.';

        if (!formData.telefono.trim()) nuevosErrores.telefono = 'El teléfono es obligatorio.';
        else if (!phoneVal.test(formData.telefono)) nuevosErrores.telefono = 'Ingrese un número válido (8 a 15 dígitos).';

        if (formData.password.length < 6) nuevosErrores.password = 'La contraseña debe tener al menos 6 caracteres.';

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            const dataAnidada = {
                email: formData.email,
                username: formData.username,
                password: formData.password,
                name: { firstname: formData.nombre, lastname: formData.apellido },
                address: { city: formData.ciudad },
                phone: formData.telefono
            };
            onGuardar(dataAnidada);
            setFormData({ nombre: '', apellido: '', email: '', telefono: '', ciudad: '', username: '', password: '' });
        }
    };

    return {
        formData,
        errores,
        mostrarPassword,
        togglePassword,
        handleChange,
        handleSubmit
    };
};