import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function NotLoggedRoute({ children }) {
  const { user } = useContext(AuthContext);

  return user ? <Navigate to="/" /> : children;
}

export default NotLoggedRoute;
