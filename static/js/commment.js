const popup = document.getElementById("popup");
// Toggle Comment popup
const togglePopup = () => {
    console.log("sdaas");
  popup.classList.toggle("hide-popup");
};
// open popup
document.getElementById("open_popup").addEventListener("click", togglePopup);
// close popup
document.getElementById("close_popup").addEventListener("click", togglePopup);
