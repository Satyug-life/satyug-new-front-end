import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { apiCallPost } from "../axiosApi/Axios";
import { useDispatch } from "react-redux";
import { useQuery } from "../hooks/useQuery";
import { setUserDetails } from "../redux/userDetails/userSlice";

const AuthGuard = ({ children, redirectPath = "/", type }) => {
  const query = useQuery();
  const dispatch = useDispatch();
  const [isValidated, setIsValidated] = useState(false);
  useEffect(() => {
    if (query.get("token")) {
      (async () => {
        try {
          let response = await apiCallPost(
            "/api/v1/satyug/users/validate-token",
            {
              id: query.get("token"),
              type: type,
            }
          );
          if (response.status === 200) {
            setIsValidated(true);
            let payload = {
              collectiveId: query.get("collectiveId"),
              token: response.data.token,
            };
            dispatch(setUserDetails(payload));
          } else {
            setIsValidated(false);
            localStorage.clear();
          }
        } catch (e) {
          setIsValidated(false);
        }
      })();
    } else {
      setIsValidated(false);
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isValidated) {
    return <Navigate to={"login"} replace />;
  }
  return children;
};

export default AuthGuard;
