const circleElement = document.querySelector("div.circle");
const navElement = document.querySelector("nav");
const headerElement = document.querySelector("header");

const hidePageContent = () => {
  navElement.classList.add("hide");
  headerElement.classList.add("hide");
}

const zoomInEffect = () => {
  circleElement.classList.add("zoom-in");
}

// On page load the page will remove main components on the page first
// then initiate the zoom-in effect and repopulate the main components onto the page

window.addEventListener("DOMContentLoaded", hidePageContent);
window.addEventListener("DOMContentLoaded", setTimeout(() => {
  zoomInEffect();
}, 200));