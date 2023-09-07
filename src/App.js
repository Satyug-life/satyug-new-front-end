import React, { useEffect, useState } from "react";
import Application from "./Application";
import { ToastContainer } from "react-toastify";
import Aos from "aos";
import DonationModal from "./components/common/Modals/DonationModal/DonationModal";
import PortraitModal from "./components/common/Modals/DonationModal/PortraitModal";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => {};
  setInterval(() => {
    switch (window.screen.orientation.type) {
      case "landscape-primary":
        setShow(false);
        break;
      case "landscape-secondary":
        setShow(false);
        break;
      case "portrait-secondary":
      case "portrait-primary":
        setShow(true);
        break;
      default:
        console.log("The orientation API isn't supported in this browser :(");
    }
  }, 2000);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Application />
      <ToastContainer
      // hideProgressBar
      // closeButton={false}
      />
      <PortraitModal show={show} handleClose={handleClose} />
    </>
  );
}

export default App;
