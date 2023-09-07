import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, redirectPath = "/" }) => {
  let loggedIn = localStorage.getItem("token");

  if (!loggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoute;
