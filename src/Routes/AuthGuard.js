import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { apiCallPost } from "../axiosApi/Axios";
import { useDispatch } from "react-redux";
import { useQuery } from "../hooks/useQuery";
import { setUserDetails } from "../redux/userDetails/userSlice";

const AuthGuard = ({ children, redirectPath = "/", type }) => {
  const [isValidated, setIsValidated] = useState(false);
  useEffect(() => {
  
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isValidated) {
    return <Navigate to={"login"} replace />;
  }
  return children;
};

export default AuthGuard;
