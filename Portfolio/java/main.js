document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('drakMode_Buttom');
    const body = document.body;


    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
// mahfujur rahman
//

//menu 
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});




var typed = new Typed('#multipule_text', {
    strings: ['CSE Student!', 'Wordpress Developer!', 'Digital Marketer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



navLinks.forEach(Link => {
    Link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    });
});


// Animate sections on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + window.innerHeight - 150;

  sections.forEach(sec => {
    if (scrollY > sec.offsetTop) {
      sec.classList.add('show');
    }
  });
});








