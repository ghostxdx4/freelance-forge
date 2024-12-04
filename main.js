// Smooth Scroll
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// AOS Initialization
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: false,
  mirror: true,
});

// Progress Bar Animations
window.addEventListener("load", function () {
  const progressBars = document.querySelectorAll(".progress");
  progressBars.forEach((bar) => {
    const percent = bar.getAttribute("data-percent");
    bar.style.width = `${percent}%`;
  });
});

// Particles.js Initialization
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ff007f" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 5, random: true },
    move: { enable: true, speed: 3, direction: "none", random: true },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
  },
  retina_detect: true,
});

// Easter Egg for Developer
console.log(
  "%cI see you snooping around, dear developer! 👀",
  "color: #ff007f; font-size: 16px; font-weight: bold;"
);

// Toggle the visibility of the navigation menu on smaller screens
const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.getElementById('nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
    });
