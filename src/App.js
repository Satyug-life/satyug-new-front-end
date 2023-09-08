import React, { useEffect, useState } from "react";
import Application from "./Application";
import { ToastContainer } from "react-toastify";
import Aos from "aos";
import PortraitModal from "./components/common/Modals/PortraitModal/PortraitModal";
import { useSelector } from "react-redux";
import Loader from "./components/common/Loader/Loader";

function App() {
  const { isLoading } = useSelector((state) => state.loader);
  const [show, setShow] = useState(false);
  const handleClose = () => { };
  function getScreenOrientation() {
    if (window.innerHeight > window.innerWidth) return "portrait";
    else return "landscape";
  }

  let interval = setInterval(() => {
    let screenOrientation = getScreenOrientation();
    if (screenOrientation === "portrait") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, 2000);
  useEffect(() => {
    Aos.init();
    return () => {
      clearInterval(interval);
    };
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {!show && <Application />}
      <ToastContainer
      />
      {show && <PortraitModal show={show} handleClose={handleClose} />}
    </>
  );
}

export default App;
