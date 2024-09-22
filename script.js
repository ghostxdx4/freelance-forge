document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Particles.js Initialization
    particlesJS.load('particles-js', 'assets/particles.json', function () {
        console.log('Particles.js configuration loaded');
    });

    // Skill Bar Animation on Scroll
    window.addEventListener('scroll', function () {
        const skillsSection = document.querySelector('.skills');
        const skillBars = document.querySelectorAll('.progress');
        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (sectionPos < screenPos) {
            skillBars.forEach(skillBar => {
                const skillValue = skillBar.getAttribute('data-skill');
                skillBar.style.width = skillValue;
            });
        }
    });

    // Fade-In Effect on Scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('header nav ul');

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Simple Form Submission Handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for contacting me! I will get back to you soon.');
            form.reset();
        });
    }

    // Add/Remove Active Class for Header on Scroll
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
});
