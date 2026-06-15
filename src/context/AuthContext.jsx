import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userActivo, setUserActivo] = useState(null);

  const iniciarSesion = (Admin) => setUserActivo(Admin);

  const cerrarSesion = () => setUserActivo(null);

  return (
    <AdminContext.Provider value={{ userActivo, iniciarSesion, cerrarSesion }}>
      {children}
    </AdminContext.Provider>
  );
};