// ===== Particles Background =====
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const colors = ['rgba(124,58,237,0.4)', 'rgba(59,130,246,0.3)', 'rgba(251,191,36,0.3)'];
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        const size = Math.random() * 6 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.animationDuration = (Math.random() * 15 + 10) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        container.appendChild(p);
    }
}

// ===== Navbar Scroll =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('mobileToggle');
    const links = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('active');
        });
        links.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => links.classList.remove('active'));
        });
    }
}

// ===== Counter Animation =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-num');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                let current = 0;
                const step = target / 60;
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        el.textContent = target;
                        clearInterval(timer);
                    } else {
                        el.textContent = Math.floor(current);
                    }
                }, 25);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

// ===== Scroll Reveal =====
function initScrollReveal() {
    const elements = document.querySelectorAll('.service-card, .feature-card, .contact-card, .gallery-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initNavbar();
    animateCounters();
    initScrollReveal();
});
