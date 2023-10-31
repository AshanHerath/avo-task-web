const bannerSlide = document.querySelectorAll(".img-1");
const toggleBtn = document.querySelectorAll(".toggle-btn");

window.addEventListener("scroll", function () {
  var header = document.querySelector(".nav-bar");
  var logo = document.querySelector(".navbar-logo");
  var nav = document.querySelector(".navbar-list");

  var isScrolled = window.scrollY > 0;

  header.classList.toggle("sticky", isScrolled);
  logo.classList.toggle("sticky", isScrolled);
  navItems.forEach(function(navItem) {
    navItem.classList.toggle("sticky", isScrolled);
  });
});

function sliderfun(n) {
    let i;
    for (i = 0; i < bannerSlide.length; i++) {
        bannerSlide[i].style.display = "none";
    }
    for (i = 0; i < toggleBtn.length; i++) {
        toggleBtn[i].className = toggleBtn[i].className.replace(" active", "");
    }
    if (n > bannerSlide.length) {
      counter = 1;
    }
    if (n < 1) {
      counter = bannerSlide.length;
    }
    bannerSlide[counter - 1].style.display = "block";
    toggleBtn[counter - 1].className += " active";
}

function autoSlide() {
    counter += 1;
    slidefun(counter);
}

let counter = 1;

