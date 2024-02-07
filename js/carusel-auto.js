const slides = document.getElementsByClassName("carusel__item");
const dots = document.getElementsByClassName("dot");
let slideIndex = 0;
let time;
let timeOut;

const prev = document.getElementsByClassName("prev");
const next = document.getElementsByClassName("next");

prev[0].addEventListener('click', () => {
    clearInterval(time);
    clearTimeout(timeOut);
    slideIndex = slideIndex - 2;
    if (slideIndex === -1) {
        slideIndex = slides.length -1;
    }
    showSlides();
    timeOut = setTimeout(() => time = setInterval(showSlides, 3000), 6000);
});

next[0].addEventListener('click', () => {
    clearInterval(time);
    clearTimeout(timeOut);
    slideIndex = slideIndex + 1;
    if (slideIndex === -1) {
        slideIndex = slides.length - 1;
    }
    showSlides();
    timeOut = setTimeout(() => time = setInterval(showSlides, 3000), 6000);
});

const currentSlide = (n) => {
    slideIndex = 1 - n
    clearInterval(time);
    setTimeout(() => time = setInterval(showSlides, 2000), 5000);
}

const showSlides = () => {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" activeDot", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activeDot";
}
time = setInterval(showSlides, 3000)
showSlides();
