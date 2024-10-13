import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function PrivateRoute({children}) {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center py-10">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
    if (user) {
        return children;
    }
  return <Navigate to="/login" />
}

export default PrivateRoute
