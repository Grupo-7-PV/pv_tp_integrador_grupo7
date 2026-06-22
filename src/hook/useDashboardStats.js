import { useState, useEffect } from "react";
import { obtenerClientes } from "../Services/clienteService";

export const useDashboardStats = () => {
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    totalClientes: 0,
    ciudadTop: null,
    clientesPorCiudad: [],
  });

  useEffect(() => {
    const cargarEstadisticas = async () => {
      try {
        const clientes = await obtenerClientes();

        const conteoPorCiudad = clientes.reduce((acumulador, cliente) => {
          const ciudad = cliente.address?.city || "Sin ciudad";
          acumulador[ciudad] = (acumulador[ciudad] || 0) + 1;
          return acumulador;
        }, {});

        const clientesPorCiudad = Object.entries(conteoPorCiudad)
          .map(([ciudad, cantidad]) => ({ ciudad, cantidad }))
          .sort((a, b) => b.cantidad - a.cantidad);

        setStats({
          totalClientes: clientes.length,
          ciudadTop: clientesPorCiudad[0] || null,
          clientesPorCiudad,
        });

        setCargando(false);
      } catch (err) {
        setError("No se pudieron cargar las estadísticas del panel.");
        setCargando(false);
      }
    };

    cargarEstadisticas();
  }, []);

  return { ...stats, cargando, error };
};