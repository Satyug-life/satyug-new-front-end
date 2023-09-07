import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const AuthGuard = ({ children, redirectPath = "/",type }) => {
  const [isValidated, setIsValidated] = useState(true);
  const params= useParams()
  useEffect(() => {

    
  }, []);
  if (!isValidated) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default AuthGuard;
