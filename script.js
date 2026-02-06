// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
}

// Create floating particles (MORE visible now)
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 80; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = '-20px';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (10 + Math.random() * 10) + 's';
    particlesContainer.appendChild(particle);
}

// Scroll reveal animation with better threshold
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.05,
    rootMargin: '0px 0px -100px 0px'
});

document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});

// Animate h2 underlines when in view
const h2Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.setProperty('--animate', '1');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('h2').forEach(h2 => {
    h2Observer.observe(h2);
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
