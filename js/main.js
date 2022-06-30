"use strict";

// Navbar --> open/close
const hamburger = document.querySelector(".navbar__hamburger");
const navLinks = document.querySelectorAll(".navbar__links");
console.log(navLinks);

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navLinks[0].classList.toggle("menu-active");
  navLinks[0].classList.toggle("visible");
  navLinks[1].classList.add("hide");
});

// Tab for beds
let tabColor = document.getElementsByClassName("beds__color");
let tabContent = document.getElementsByClassName("beds__types");

tabColor[0].classList.add("active");
tabContent[0].style.display = "flex";

function color(e, x) {
  var i;
  for (i = 0; i < tabColor.length; i++) {
    tabContent[i].style.display = "none";
    tabColor[i].classList.remove("active");
  }
  document.getElementById(x).style.display = "flex";
  e.currentTarget.classList.add("active");
}

// Subscribtion
function subscribeToNews() {
  const emailInput = document.getElementById("email").value;
  alert(`Succesfuly subscirbed, ${emailInput}`);
  emailInput = "";
}

// Animation
function scrollClick(selector, options = {}) {
  var elements = document.querySelectorAll(selector);
  elements = Array.from(elements);
  elements.forEach((element) => {
    observerHandler(element, options);
  });
}

function observerHandler(element, options) {
  if (!("IntersectionObserver" in window)) {
    if (options.cb) {
      options.cb(element);
    } else {
      entry.target.classList.add("active");
    }
    return;
  }
  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (options.cb) {
          options.cb(element);
        } else {
          entry.target.classList.add("active");
        }
        observer.unobserve(entry.target);
      }
    });
  }, options);
  observer.observe(element);
}

scrollClick(".scroll-animate", {
  rootMargin: "-200px",
});

// Loading
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".loading").style.visibility = "visible";
  } else {
    document.querySelector(".loading").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
