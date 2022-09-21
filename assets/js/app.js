const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const hamburgerIcon = document.getElementById('hamburger-icon');
const themeToggle = document.getElementById('theme-toggle');
const heroImage = document.getElementById('hero-image');
const mouse = document.getElementById('mouse');
const mouseContainer = document.getElementById('mouse-container');

const themeToggle1 = document.getElementById('theme-toggle1');
const themeToggle2 = document.getElementById('theme-toggle2');
const themeToggle3 = document.getElementById('theme-toggle3');
const themeToggle4 = document.getElementById('theme-toggle4');
const themeToggle5 = document.getElementById('theme-toggle5');
const themeToggle6 = document.getElementById('theme-toggle6');
const themeToggle7 = document.getElementById('theme-toggle7');
const themeToggle8 = document.getElementById('theme-toggle8');
const themeToggle9 = document.getElementById('theme-toggle9');
const themeToggle10 = document.getElementById('theme-toggle10');
const themeToggle11 = document.getElementById('theme-toggle11');
const themeToggle12 = document.getElementById('theme-toggle12');
const themeToggle13 = document.getElementById('theme-toggle13');
const themeToggle14 = document.getElementById('theme-toggle14');
const themeToggle15 = document.getElementById('theme-toggle15');
const themeToggle16 = document.getElementById('theme-toggle16');
const themeToggle17 = document.getElementById('theme-toggle17');
const themeToggle18 = document.getElementById('theme-toggle18');
const themeToggle19 = document.getElementById('theme-toggle19');
const themeToggle20 = document.getElementById('theme-toggle20');
const themeToggle21 = document.getElementById('theme-toggle21');
const themeToggle22 = document.getElementById('theme-toggle22');
const themeToggle23 = document.getElementById('theme-toggle23');
const themeToggle24 = document.getElementById('theme-toggle24');
const themeToggle25 = document.getElementById('theme-toggle25');
const themeToggle26 = document.getElementById('theme-toggle26');
const themeToggle27 = document.getElementById('theme-toggle27');
const themeToggle28 = document.getElementById('theme-toggle28');
const themeToggle29 = document.getElementById('theme-toggle29');
const themeToggle30 = document.getElementById('theme-toggle30');
const themeToggle31 = document.getElementById('theme-toggle31');
const themeToggle32 = document.getElementById('theme-toggle32');

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
    if(themeToggle.classList.contains('uil-moon')){
        themeToggle.classList.replace('uil-moon', 'uil-sun');
        document.body.style.background = 'hsl(250, 8%, 15%)';
        themeToggle1.style.color = 'white';
        themeToggle2.style.color = 'white';
        themeToggle3.style.color = 'white';
        themeToggle4.style.color = 'white';
        themeToggle5.style.color = 'white';
        themeToggle5.style.color = 'white';
        themeToggle6.style.color = 'white';
        themeToggle7.style.color = 'white';
        themeToggle8.style.color = 'white';
        themeToggle9.style.color = 'white';
        themeToggle10.style.color = 'white';
        themeToggle11.style.color = 'white';
        themeToggle12.style.color = 'white';
        themeToggle13.style.color = 'white';
        themeToggle14.style.color = 'white';
        themeToggle15.style.color = 'white';
        themeToggle16.style.color = 'white';
        themeToggle17.style.color = 'white';
        themeToggle18.style.color = 'white';
        themeToggle19.style.color = 'white';
        themeToggle20.style.color = 'white';
        themeToggle21.style.color = 'white';
        themeToggle22.style.color = 'white';
        themeToggle23.style.color = 'white';
        themeToggle24.style.color = 'white';
        themeToggle25.style.color = 'white';
        themeToggle26.style.color = 'white';
        themeToggle27.style.color = 'white';
        themeToggle28.style.color = 'white';
        themeToggle29.style.color = 'white';
        themeToggle30.style.color = 'white';
        themeToggle31.style.color = 'white';
        themeToggle32.style.color = 'white';
        themeToggle.style.color = 'white';
    }
    else{
        themeToggle.classList.replace('uil-sun', 'uil-moon');
        document.body.style.background = 'white';
        themeToggle1.style.color = 'hsl(250, 8%, 15%)';
        themeToggle2.style.color = 'hsl(250, 8%, 15%)';
        themeToggle3.style.color = 'hsl(250, 8%, 15%)';
        themeToggle4.style.color = 'hsl(250, 8%, 15%)';
        themeToggle5.style.color = 'hsl(250, 8%, 15%)';
        themeToggle5.style.color = 'hsl(250, 8%, 15%)';
        themeToggle6.style.color = 'hsl(250, 8%, 15%)';
        themeToggle7.style.color = 'hsl(250, 8%, 15%)';
        themeToggle8.style.color = 'hsl(250, 8%, 15%)';
        themeToggle9.style.color = 'hsl(250, 8%, 15%)';
        themeToggle10.style.color = 'hsl(250, 8%, 15%)';
        themeToggle11.style.color = 'hsl(250, 8%, 15%)';
        themeToggle12.style.color = 'hsl(250, 8%, 15%)';
        themeToggle13.style.color = 'hsl(250, 8%, 15%)';
        themeToggle14.style.color = 'hsl(250, 8%, 15%)';
        themeToggle15.style.color = 'hsl(250, 8%, 15%)';
        themeToggle16.style.color = 'hsl(250, 8%, 15%)';
        themeToggle17.style.color = 'hsl(250, 8%, 15%)';
        themeToggle18.style.color = 'hsl(250, 8%, 15%)';
        themeToggle19.style.color = 'hsl(250, 8%, 15%)';
        themeToggle20.style.color = 'hsl(250, 8%, 15%)';
        themeToggle21.style.color = 'hsl(250, 8%, 15%)';
        themeToggle22.style.color = 'hsl(250, 8%, 15%)';
        themeToggle23.style.color = 'hsl(250, 8%, 15%)';
        themeToggle24.style.color = 'hsl(250, 8%, 15%)';
        themeToggle25.style.color = 'hsl(250, 8%, 15%)';
        themeToggle26.style.color = 'hsl(250, 8%, 15%)';
        themeToggle27.style.color = 'hsl(250, 8%, 15%)';
        themeToggle28.style.color = 'hsl(250, 8%, 15%)';
        themeToggle29.style.color = 'hsl(250, 8%, 15%)';
        themeToggle30.style.color = 'hsl(250, 8%, 15%)';
        themeToggle31.style.color = 'hsl(250, 8%, 15%)';
        themeToggle32.style.color = 'hsl(250, 8%, 15%)';
        themeToggle.style.color = 'hsl(250, 8%, 15%)';
    }
});