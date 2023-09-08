import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { apiCallPost } from "../../../axiosApi/Axios";
import { useQuery } from "../../../hooks/useQuery";
import Backbutton from "../../common/Backbutton/Backbutton";
import styles from "./Homelayout.module.scss";

const HomeLayout = () => {
  const location = useLocation();
  const [bgImg, setBgImage] = useState(false);
  const query = useQuery();
  const [showBorder, setShowBorder] = useState(false);
  const [showBackBtn, setShowBackbtn] = useState(false);

    const showBorderPaths = ['/continue ', "/participation", "/login", "/question", "/share", "/contact"];
    const showBackBtnPaths = ["/games", "/continue", "/participation", "/login", "/question", "/share", "/contact"];

  useEffect(() => {
    location.pathname === "/question" ? setBgImage(true) : setBgImage(false);
    setShowBorder(
      showBorderPaths.filter((item) => location.pathname === item).length > 0
    );
    setShowBackbtn(
      showBackBtnPaths.filter((item) => location.pathname === item).length > 0
    );
  }, [location]);
  useEffect(() => {
    let id = query?.get("id");
    const getKarmaPoints = async () => {
      try {
        await apiCallPost("api/v1/satyug/users/karmaPoints", {
          id: id,
          type: "share",
        });
      } catch (error) {}
    };

    if (id) {
      getKarmaPoints();
    }
  }, []);

  return (
    <main
      className={`${styles.home_layout} ${
        location.pathname.includes("/share") ? styles.video_bg : ""
      } ${bgImg ? styles.ques_bg : ""}`}
    >
      {showBackBtn && <Backbutton />}
      {showBorder && <div className={styles.bordered_bg} />}
      <Outlet />
    </main>
  );
};

export default HomeLayout;
