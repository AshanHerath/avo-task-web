const bannerSlide = document.querySelectorAll(".img-1");
const toggleBtn = document.querySelectorAll(".toggle-btn");
const header = document.querySelector(".nav-bar");
const logo = document.querySelector(".navbar-logo");
const nav = document.querySelector(".navbar-list");
const projectsCount = document.getElementById('successful-projects');
const experienced = document.getElementById('experienced');
const menu = document.getElementById('menu-btn');


const targetValue2 = 21;
const targetValue1 = 400;
const updateInterval = 180;

window.addEventListener("scroll", function () {
  var isScrolled = window.scrollY > 0;

  header.classList.toggle("sticky", isScrolled);
  logo.classList.toggle("sticky", isScrolled);
  navItems.forEach(function(navItem) {
    navItem.classList.toggle("sticky", isScrolled);
  });
});


function updateCounter(counterElement, targetValue) {
  let counter = 0;

  const intervalId = setInterval(function () {
      if (counter < targetValue) {
          counter += 1;
          counterElement.textContent = counter;
      } else {
          clearInterval(intervalId);
      }
  }, updateInterval);
}

window.addEventListener('load', function () {
  updateCounter(projectsCount, targetValue1);
  updateCounter(experienced, targetValue2);
});

document.addEventListener("DOMContentLoaded", function() {
  var menuButton = document.getElementById("menu-btn");
  var menuBox = document.querySelector(".navbar-box");
  var bannerContainer = document.querySelector(".banner-container");

  function toggleMenu() {
      if (menuBox.style.display === "block") {
          menuBox.style.display = "none";
          bannerContainer.style.marginTop = "0";
      } else {
          menuBox.style.display = "block";
          bannerContainer.style.marginTop = menuBox.offsetHeight + "px";
      }
  }

  window.addEventListener("resize", function() {
      if (window.innerWidth <= 600) {
          menuButton.addEventListener("click", toggleMenu);
          menuBox.style.display = "none";
      } else {
          menuBox.style.display = "block";
          menuButton.removeEventListener("click", toggleMenu);
      }
  });

  if (window.innerWidth <= 600) {
      menuButton.addEventListener("click", toggleMenu);
  } else {
      menuBox.style.display = "block";
  }
});




function Slider(sliderIndex) {
  const banners = document.querySelectorAll('.slider-bg');

  for (let i = 0; i < banners.length; i++) {
      banners[i].style.display = 'none';
  }

  if (sliderIndex <= banners.length) {
      banners[sliderIndex - 1].style.display = 'flex';
  }
}

let currentSlideIndex = 0;
const banners = document.querySelectorAll('.slider-bg');

function showNextSlide() {
    banners[currentSlideIndex].style.display = 'none';
    currentSlideIndex = (currentSlideIndex + 1) % banners.length;
    banners[currentSlideIndex].style.display = 'flex';
}

const autoSlideInterval = setInterval(showNextSlide, 8000);

document.querySelector('.toggle-btn').addEventListener('click', function () {
    clearInterval(autoSlideInterval);
 });

window.addEventListener("scroll", function () {
  var header = document.querySelector("heade-line");
  header.classList.toggle("sticky", window.scrollY > 300);
});

window.onload = function() {
  var headingRow = document.querySelector(".heading-row");
    
  headingRow.style.opacity = 1;
  headingRow.style.transform = "translateY(0)";
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenEliments = document.querySelectorAll('.hidden');
hiddenEliments.forEach((el)=> observer.observe(el));
    
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;


$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  var itemCount = 3;

  window.addEventListener("resize", function() {
    if (window.innerWidth <= 600) {
      itemCount = 1;
      console.log("Item Count: " + itemCount);
    } else {
      itemCount = 3;
    }
});

  owl.owlCarousel({
    items: itemCount,
    margin: 10,
    loop: false,
    nav: true

    
  });
});
