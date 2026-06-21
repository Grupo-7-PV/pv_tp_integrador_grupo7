import { createContext, useState } from "react";

export const AdminContext = createContext(null);

export const AdminProvider = ({ children }) => {
  const [adminActivo, setAdminActivo] = useState(() => {
    const sesionGuardada = localStorage.getItem("adminSession");

    return sesionGuardada
      ? JSON.parse(sesionGuardada)
      : null;
  });

  const iniciarSesion = (Admin) => {
    setAdminActivo(Admin);

    localStorage.setItem(
      "adminSession",
      JSON.stringify(Admin)
    );
  };

  const cerrarSesion = () => {
    setAdminActivo(null);
    localStorage.removeItem("adminSession");
  };

  return (
    <AdminContext.Provider value={{ adminActivo, iniciarSesion, cerrarSesion }}>
      {children}
    </AdminContext.Provider>
  );
};