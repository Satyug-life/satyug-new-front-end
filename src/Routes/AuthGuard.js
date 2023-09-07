import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { apiCallPost } from "../axiosApi/Axios";

const AuthGuard = ({ children, redirectPath = "/",type }) => {
  const [isValidated, setIsValidated] = useState(true);
  const params= useParams()
  useEffect(() => {
    // (async()=>{
    //     try {
    //         let response = await apiCallPost("/api/v1/satyug/users/validateGameToken", {
    //           id:params.id,
    //           type: type
    //         });
    //         if (response.status === 200) {
    //           setIsValidated(true);
    //         }
    //       } catch (e) {
    //         setIsValidated(false);
    //       }
    // })()
    
  }, []);
  if (!isValidated) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default AuthGuard;
