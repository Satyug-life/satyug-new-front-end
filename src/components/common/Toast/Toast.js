import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const TOAST_TYPE = {
//   SUCCESS: "success",
//   ERROR: "error",
//   WARNING: "warning",
//   INFO: "info",
// };

const toastOptions = {
  position: "top-right",
  autoClose: 1000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: false,
  hideProgressBar: true,
  theme: "dark",
};

class Toaster {
  success = (message) => {

    toast.success(message, {
      ...toastOptions,
    });
  };
  error = (message) => {
    toast.error(message, {
      ...toastOptions,
    });
  };
  warn = (message) => {
    toast.warn(message, {
      ...toastOptions,
    });
  };
  info = (message) => {
    toast.info(message, {
      ...toastOptions,
    });
  };
}
export const toasts = new Toaster();
// export const showToast = (message, type) => {
//   toast(message, {
//     ...toastOptions,
//     type,
//   });
// };

// export const toasts = {
//   success: (message) => showToast(message, TOAST_TYPE.SUCCESS),
//   error: (message) => showToast(message, TOAST_TYPE.ERROR),
//   warn: (message) => showToast(message, TOAST_TYPE.WARNING),
//   info: (message) => showToast(message, TOAST_TYPE.INFO),
// };
