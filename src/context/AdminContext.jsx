import { createContext, useState } from "react";

export const AdminContext = createContext(null);

export const AdminProvider = ({ children }) => {
  const [adminActivo, setAdminActivo] = useState(null);

  const iniciarSesion = (Admin) => setAdminActivo(Admin);

  const cerrarSesion = () => setAdminActivo(null);

  return (
    <AdminContext.Provider value={{ adminActivo, iniciarSesion, cerrarSesion }}>
      {children}
    </AdminContext.Provider>
  );
};