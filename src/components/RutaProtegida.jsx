import { Navigate, Outlet } from "react-router-dom";
import { useAdmin } from '../hook/useAdmin'


const RutaProtegida = () => {
    const { adminActivo } = useAdmin();
    if(adminActivo === null){
      return <Navigate to= "/login" replace/>;
    }else{
      return <Outlet />
    }
}
export default RutaProtegida