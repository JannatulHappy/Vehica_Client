import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location.state)
  // console.log(location,"location")
  if (user) {
    return children;
  }
  if (user === null) {
    return <Navigate state={location.pathname}   to="/login" replace></Navigate>
  }
  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }
  
};

export default PrivateRoute;
