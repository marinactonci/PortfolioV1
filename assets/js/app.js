const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const hamburgerIcon = document.getElementById('hamburger-icon');
const themeToggle = document.getElementById('theme-toggle');
const heroImage = document.getElementById('hero-image');
const mouse = document.getElementById('mouse');
const mouseContainer = document.getElementById('mouse-container');
const lightTheme = document.getElementsByClassName('light__theme');

hamburger.addEventListener('click', () => {
    const visibility = navMenu.getAttribute('data-visible');

    if(visibility === 'false') {
        navMenu.setAttribute('data-visible', true);
        hamburger.setAttribute('aria-expanded', true);
        hamburgerIcon.classList.replace('uil-bars', 'uil-multiply');
        hamburgerIcon.style.color = 'white';
    }
    else {
        navMenu.setAttribute('data-visible', false);
        hamburger.setAttribute('aria-expanded', false);
        hamburgerIcon.classList.replace('uil-multiply', 'uil-bars');
        if (themeToggle.classList.contains('uil-moon')) {
            hamburgerIcon.style.color = 'hsl(250, 8%, 15%)';
        }
        else {
            hamburgerIcon.style.color = 'white';
        }
    }
});

themeToggle.addEventListener('click', () => {
    if(window.innerWidth >= 720) {
        if(themeToggle.classList.contains('uil-moon')) {
            themeToggle.classList.replace('uil-moon', 'uil-sun');
            document.body.style.background = 'hsl(250, 8%, 15%)';
            themeToggle.style.color = 'hsl(250, 60%, 99%)';
            for (var i = 0; i < lightTheme.length; i++) {
                lightTheme[i].style.color = "hsl(250, 60%, 99%)";
            }
        }
        else {
            themeToggle.classList.replace('uil-sun', 'uil-moon');
            document.body.style.background = 'hsl(250, 60%, 99%)';
            themeToggle.style.color = 'hsl(250, 8%, 15%)';
            for (var i = 0; i < lightTheme.length; i++) {
                lightTheme[i].style.color = "hsl(250, 8%, 15%)";
            }
        }
    }
    else if(window.innerWidth < 720){
        if(themeToggle.classList.contains('uil-moon')) {
            themeToggle.classList.replace('uil-moon', 'uil-sun');
            document.body.style.background = 'hsl(250, 8%, 15%)';
            themeToggle.style.color = 'hsl(250, 60%, 99%)';
            for (var i = 0; i < lightTheme.length; i++) {
                lightTheme[i].style.color = "hsl(250, 60%, 99%)";
            }
        }
        else {
            themeToggle.classList.replace('uil-sun', 'uil-moon');
            document.body.style.background = 'hsl(250, 60%, 99%)';
            for (var i = 0; i < lightTheme.length; i++) {
                lightTheme[i].style.color = "hsl(250, 8%, 15%)";
            }
        }
    }
});