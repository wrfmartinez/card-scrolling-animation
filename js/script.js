const circleContainerElement = document.querySelector("div.circle-container");
const circleElement = document.querySelector("div.circle");
const navElement = document.querySelector("nav");
const headerElement = document.querySelector("header");
const headerDescriptionElement = document.getElementById("header-description");
console.log(headerDescriptionElement);

const hidePageContent = () => {
  navElement.classList.add("hide");
  headerElement.classList.add("hide");
}

const zoomInEffect = () => {
  // Waits 0.2 seconds before initiating zoom-in animation to avoid starting animation too quickly on page load
  setTimeout(() => {
    circleElement.classList.add("zoom-in");
  }, 10)
}

const restorePageContent = () => {
  circleContainerElement.remove();
  
  navElement.classList.remove("hide");
  headerElement.classList.remove("hide");

  setTimeout(() => {
    navElement.classList.replace("transparent", "fade-in");
    headerDescriptionElement.classList.add("slide-up");
  }, 50)
}

// Will remove main components on the page first on DOM content load
// then initiate the zoom-in effect and repopulate the main components onto the page
window.addEventListener("DOMContentLoaded", hidePageContent);
window.addEventListener("DOMContentLoaded", zoomInEffect);
setTimeout(() => {
  restorePageContent();
}, 500);