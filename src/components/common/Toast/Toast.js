import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastOptions = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const toasts = {
  success: (message) => {
    toast.success(message, {
      ...toastOptions,
      type: toast.TYPE.SUCCESS,
    });
  },
  error: (message) => {
    toast.error(message, {
      ...toastOptions,
      type: toast.TYPE.ERROR,
    });
  },
  warn: (message) => {
    toast.warn(message, {
      ...toastOptions,
      type: toast.TYPE.WARNING,
    });
  },
  info: (message) => {
    toast.info(message, {
      ...toastOptions,
      type: toast.TYPE.INFO,
    });
  },
};
