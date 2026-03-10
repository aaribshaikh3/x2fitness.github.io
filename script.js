const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
link.addEventListener("click", () => {
navMenu.classList.remove("active");
});
});

ScrollReveal({
distance:'60px',
duration:1200,
interval:200,
origin:'bottom'
});

ScrollReveal().reveal('.card, .trainer, .gallery-grid img, .timing-box');