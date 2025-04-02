import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  // Retrieve the token and role from localStorage
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Check if the user is authenticated (token is available)
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Check if the user role is valid and allowed
  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  // If the user is authenticated and the role is valid, render the outlet (nested route)
  return <Outlet />;
};

export default ProtectedRoute;