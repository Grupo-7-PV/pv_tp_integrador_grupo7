import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import Login from '../views/Login';
import RutaProtegida from '../components/RutaProtegida.jsx';
import ClientesPage from '../views/ClientesPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "",
        element: <RutaProtegida />, 
        children: [
          {
            path:"clientes",
            element:<ClientesPage/>
          }

        ],
      },
    ],
  },
]);

export default router;