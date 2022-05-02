// alerts
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// delete user
export const Alert = (
  icon,
  title,
  confirmBtnText = "yes",
  showCancelButton = true
) => {
  return MySwal.fire({
    icon: icon,
    title: title,
    confirmButtonText: confirmBtnText,
    showCancelButton: showCancelButton,
  });
};

export function AlertToast(icon, title) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    width: "auto",
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  return Toast.fire({
    icon: icon,
    title: title,
  });
}

// success template
const swalCustomBtns = Swal.mixin({
  customClass: {
    container: "alert-confirmation-container",
    // htmlContainer: "alert-confirmation-container",
    confirmButton:
      "our-btn alert-btn alert-confirm-btn border-0 text-capitalize",
    cancelButton: "our-btn alert-btn alert-cancel-btn border-0 text-capitalize",
    title: "alert-title",
    // text: "alert-title",
  },
  // buttonsStyling: false,
});

export function AlertConfirmation(
  title,
  confirmBtnText,
  confirmBtnColor = "#3188c9"
) {
  return swalCustomBtns.fire({
    title: title,
    showCancelButton: true,
    confirmButtonText: confirmBtnText,
    cancelButtonText: "cancel",
    confirmButtonColor: confirmBtnColor,
  });
}
