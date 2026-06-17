import { Navigate, Outlet } from "react-router-dom";
import { useAdmin } from '../hook/useAuth'


const RutaProtegida = () => {
    const { userActivo } = useAdmin();
    if(userActivo === null){
      return <Navigate to= "/login" />;
    }else{
      return <Outlet />
    }
}
export default RutaProtegida