const circleElement = document.querySelector("div.circle");
const navElement = document.querySelector("nav");
const headerElement = document.querySelector("header");

const hideElements = () => {
  navElement.classList.add("hide");
  headerElement.classList.add("hide");
}

const zoomInEffect = () => {
  circleElement.classList.add("zoom-in");
}

window.addEventListener("DOMContentLoaded", hideElements);
window.addEventListener("DOMContentLoaded", setTimeout(() => {
  zoomInEffect();
}, 200));