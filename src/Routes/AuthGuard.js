import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

const AuthGuard = ({ children, redirectPath = "/", type }) => {
  const query = useQuery();
  const dispatch = useDispatch();

  const [isValidated, setIsValidated] = useState(true);
  useEffect(() => {
  
  }, []);
  if (!isValidated) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default AuthGuard;
