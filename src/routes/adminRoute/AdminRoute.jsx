import { useContext } from "react";
import { AuthContext } from "../../context/authProvider";
import { Navigate, useLocation } from "react-router-dom";
import IsAdmin from "../../customHooks/IsAdmin";

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const [isAdmin, adminloading] = IsAdmin(user?.email);
  const location = useLocation();
  if (isLoading || adminloading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading-full loading loading-bars h-screen w-[100px] "></span>
      </div>
    );
  }
  if (isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
