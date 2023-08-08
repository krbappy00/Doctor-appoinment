import { useContext } from "react";
import { AuthContext } from "../../context/authProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,isLoading} = useContext(AuthContext);
    const location = useLocation();
    if (isLoading){
        return (
          <div className="flex items-center justify-center">
            <span className="loading-full loading loading-bars h-screen w-[100px] "></span>
          </div>
        );
    }
    if (user) {
    return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;