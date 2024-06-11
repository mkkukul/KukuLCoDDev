const notifications = document.querySelector(".notifications"),
  buttons = document.querySelectorAll(".buttons .btn");

  // Object containing details for different types of toasts
const toastDetails = {
    timer: 5000,
    success: {
        icon: 'fa-circle-check',
        text: 'Success: This is a success toast.',
    },