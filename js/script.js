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
  }, 30)
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
  headerDescriptionElement.classList.remove("slide-up");

  setTimeout(() => {
    headerDescriptionElement.classList.add("slide-up");
    headerDescriptionText.innerHTML = text;
  }, 50)
}

const joinBgCards = () => {
  headerDescriptionElement.classList.remove("slide-up");
  mainComponentsElement.style.position = "unset";
}

const positionCard = (element, translate, blur, opacity, paddingTop, paddingBottom, zIndex) => {
  element.style.zIndex = zIndex;
  element.style.transform = translate;
  element.style.filter = blur;
  element.style.paddingTop = paddingTop;
  element.style.paddingBottom = paddingBottom;
  element.style.opacity = opacity;
}

const switchCard = () => {
  if (window.scrollY > 1 && window.scrollY < 200) {
    mainComponentsElement.style.position = "fixed";
    positionCard(middleCardToSwitch, "translateX(0)", "blur(0)", "", "70px", "0", "1");
    positionCard(leftCardToSwitch, "translateX(0)", "blur(0.28rem)", "0.7", "165px", "50px", "0");
    positionCard(rightCardToSwitch, "translateX(0)", "blur(0.28rem)", "0.7", "165px", "50px", "0");
    changeText('Training a <br><span id="second-description-color">new generation of athletes</span>');
  } else if (window.scrollY > 200 && window.scrollY < 300) {
    // FIRST SHIFT OF CARDS WHERE THE MIDDLE CARD IS THE PRIMARY CARD
    positionCard(middleCardToSwitch, "translateX(-205px)", "blur(0.28rem)", "50px", "165px", "0.7", "0");
    positionCard(leftCardToSwitch, "translateX(405px)", "", "", "", "", "1");
    positionCard(rightCardToSwitch, "translateX(-205px)", "blur(0)", "1", "70px", "0", "1");
    changeText('A dashboard <span id="second-description-color">fully tailored and optimized for you</span>');
  } else if (window.scrollY > 300 && window.scrollY < 500) {
    // SHIFTS LEFT CARD AS THE PRIMARY CARD
    positionCard(middleCardToSwitch, "translateX(205px)", "blur(0.28rem", "0.7", "165px", "50px", "0");
    positionCard(leftCardToSwitch, "translateX(205px)", "blur(0)", "1", "70px", "0", "1");
    positionCard(rightCardToSwitch, "translateX(-405px)", "blur(0.28rem)", "0.7", "165px", "", "0");
    changeText('Crush your fitness goals <span id="second-description-color">with our metrics tracker</span>');
  } else if (window.scrollY > 500 && window.scrollY < 600) {
    // SHIFTS CARDS TO IT'S INITIAL STATE
    positionCard(middleCardToSwitch, "translateX(0)", "blur(0)", "", "70px", "0", "1");
    positionCard(leftCardToSwitch, "translateX(0)", "blur(0.28rem)", "0.7", "165px", "50px", "0");
    positionCard(rightCardToSwitch, "translateX(0)", "blur(0.28rem)", "0.7", "165px", "50px", "0");
    changeText('Training a <br><span id="second-description-color">new generation of athletes</span>');
  } else if (window.scrollY > 600) {
    positionCard(leftCardToSwitch, "translateX(205px)", "", "0");
    positionCard(rightCardToSwitch, "translateX(-205px)", "", "0");
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
