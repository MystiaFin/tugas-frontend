document.addEventListener('DOMContentLoaded', function() {
    // Mouse move effect
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        document.documentElement.style.setProperty('--mouse-x', `${x}px`);
        document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Mobile navbar functionality
const toggleButton = document.querySelector('.mobile-navbar-toggle');
const menu = document.querySelector('.mobile-navbar-menu');
const overlay = document.querySelector('.mobile-navbar-overlay');

function closeMenu() {
    menu.classList.remove('open');
    overlay.classList.remove('visible');
}

toggleButton.addEventListener('click', function() {
    menu.classList.toggle('open');
    overlay.classList.toggle('visible');
});

// Close menu when a link is clicked
const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu when clicking outside
overlay.addEventListener('click', closeMenu);


