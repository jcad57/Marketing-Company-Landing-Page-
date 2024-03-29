"use strict";

const hamburgerElement = document.querySelector(".primary-nav--hamburger");
const hamburgerImgElement = document.querySelector(".hamburger-img");
const mobileNavElement = document.querySelector(".primary-nav--nav");

let mobileNavActive = false;

hamburgerElement.addEventListener("click", () => {
  if (!mobileNavActive) {
    hamburgerImgElement.style.opacity = "0.65";
    mobileNavElement.classList.remove("hidden");
    mobileNavActive = true;
  } else {
    hamburgerImgElement.style.opacity = "1";
    mobileNavElement.classList.add("hidden");
    mobileNavActive = false;
  }
});
