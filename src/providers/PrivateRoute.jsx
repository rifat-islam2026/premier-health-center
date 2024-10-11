import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function PrivateRoute({children}) {
    const { user } = useContext(AuthContext);
    if (user) {
        return children;
    }
  return <Navigate to="/login" />
}

export default PrivateRoute
