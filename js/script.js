const bannerSlide = document.querySelectorAll(".img-1");
const toggleBtn = document.querySelectorAll(".toggle-btn");

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

