import Swal from "sweetalert2";

function alertSuccess(message) {
  const data = {
    title: "Success!",
    text: message,
    icon: "success",
    showConfirmButton: false,
  };

  Swal.fire(data);
}

function alertError(message) {
  const data = {
    title: "Failed",
    text: message,
    icon: "error",
  };

  Swal.fire(data);
}

export { alertSuccess, alertError };