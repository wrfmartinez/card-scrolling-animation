const circleContainerElement = document.querySelector("div.circle-container");
const circleElement = document.querySelector("div.circle");
const navElement = document.querySelector("nav");
const headerElement = document.querySelector("header");
const headerDescriptionElement = document.getElementById("header-description");
const headerDescriptionText = headerDescriptionElement.querySelector("h1");
const leftCardToSwitch = document.querySelector("#card-left.switchCard");
const middleCardToSwitch = document.querySelector("#card-middle.switchCard");
const rightCardToSwitch = document.querySelector("#card-right.switchCard");
const mainComponentsElement = document.getElementById("main-components");
const mainElement = document.querySelector("main");

const hidePageContent = () => {
  navElement.classList.add("hide");
  headerElement.classList.add("hide");
  mainElement.classList.add("hide");
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
  mainElement.classList.remove("hide");

  setTimeout(() => {
    navElement.classList.replace("transparent", "fade-in");
    headerDescriptionElement.classList.add("slide-up");
  }, 50)
}

const changeText = (text) => {
  headerDescriptionElement.classList.add("slide-up");
  headerDescriptionText.innerHTML = text;
}

const joinBgCards = () => {
  headerDescriptionElement.style.opacity = "1";
  headerDescriptionElement.style.margin = "150px 0 -150px 0";
  mainComponentsElement.style.position = "unset";
}

const switchCard = () => {
  headerDescriptionElement.classList.remove("slide-up");

  if (window.scrollY > 1 && window.scrollY < 200) {
    // FIRST SHIFT OF CARDS WHERE THE MIDDLE CARD IS THE PRIMARY CARD
    middleCardToSwitch.classList.add("switchMiddleCard");
    leftCardToSwitch.classList.add("switchLeftCard");
    rightCardToSwitch.classList.add("switchRightCard");
    changeText('A dashboard <span id="second-description-color">fully tailored and optimized for you</span>');
  } else if (window.scrollY > 200 && window.scrollY < 400) {
    // SHIFTS LEFT CARD AS THE PRIMARY CARD
    middleCardToSwitch.style.transform = "translateX(205px)";

    leftCardToSwitch.style.filter = "blur(0)";
    leftCardToSwitch.style.opacity = "1";
    leftCardToSwitch.style.paddingTop = "70px";
    leftCardToSwitch.style.paddingBottom = "0";
    leftCardToSwitch.style.zIndex = "1";
    leftCardToSwitch.style.transform = "translateX(205px)";

    rightCardToSwitch.style.opacity = "0.7"
    rightCardToSwitch.style.filter = "blur(0.28rem)"
    rightCardToSwitch.style.zIndex = 0;
    rightCardToSwitch.style.transform = "translateX(-405px)";
    rightCardToSwitch.style.paddingTop = "165px";
    changeText('Crush your fitness goals <span id="second-description-color">with our metrics tracker</span>');
  } else if (window.scrollY > 400 && window.scrollY < 600) {
    // SHIFTS CARDS TO IT'S INITIAL STATE
    middleCardToSwitch.style.zIndex = "1";
    middleCardToSwitch.style.transform = "translateX(0)";
    middleCardToSwitch.style.filter = "blur(0)";
    middleCardToSwitch.style.paddingTop = "70px";
    middleCardToSwitch.style.paddingBottom = 0;

    leftCardToSwitch.style.filter = "blur(0.28rem)";
    leftCardToSwitch.style.opacity = "0.7";
    leftCardToSwitch.style.paddingTop = "165px";
    leftCardToSwitch.style.paddingBottom = "50px";
    leftCardToSwitch.style.zIndex = "0";
    leftCardToSwitch.style.transform = "translateX(0)";

    rightCardToSwitch.style.opacity = "0.7"
    rightCardToSwitch.style.filter = "blur(0.28rem)"
    rightCardToSwitch.style.zIndex = 0;
    rightCardToSwitch.style.transform = "translateX(0)";
    rightCardToSwitch.style.paddingTop = "165px";
    rightCardToSwitch.style.paddingBottom = "50px";
    changeText('Training a <br><span id="second-description-color">new generation of athletes</span>');
  } else if (window.scrollY > 500) {
    leftCardToSwitch.style.opacity = "0";
    rightCardToSwitch.style.transform = "translateX(-205px)";
    leftCardToSwitch.style.transform = "translateX(205px)";
    rightCardToSwitch.style.opacity = "0"
    joinBgCards();
  }
}

// Will remove main components on the page first on DOM content load
// then initiate the zoom-in effect and repopulate the main components onto the page
window.addEventListener("DOMContentLoaded", hidePageContent);
window.addEventListener("DOMContentLoaded", zoomInEffect);
setTimeout(() => {
  restorePageContent();
}, 500);
window.addEventListener("scroll", switchCard);