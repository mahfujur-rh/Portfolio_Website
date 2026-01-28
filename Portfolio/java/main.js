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







// HELLO EVERYONE 

/*

@media screen and (max-width:992px) {
  body {
    section {
      padding: 8rem 5% 2rem;
    }
  }

  header {
    background: var(--mob-color);
    position: sticky;
    top: 0;
    padding: 0 5%;
    z-index: 9;

    nav {
      .list-drakmode-menu {
        ul {
          position: fixed;
          top: 90px;
          left: -100%;
          max-width: 60%;
          width: 100%;
          height: 100vh;
          background: var(--mob-color);
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          gap: 30px;
          padding: 2rem 5% 0;
          transition: .3s ease;


          li {
            a {
              font-size: 22px;
            }

          }

          &.active {
            left: 0%;
          }
        }

        .hamburger {
          display: block;
        }
      }
    }
  }

  .home {
    padding: 8rem 5% 2rem;

    .home_info {
      flex-direction: column-reverse;

      .left {
        padding-top: 50px;

        p {
          width: 100%;
        }

        .social {
          display: none;
        }
      }

      .right {
        .profile {
          margin-top: 25px;

          img {
            width: 375px;
            height: 375px;

            &:hover {
              box-shadow: 0 0 60px var(--color);
            }
          }
        }
      }
    }
  }

  .about {
    .about_wrapper {
      flex-direction: column-reverse;

      .about_img {
        img {
          width: 375px;
          height: 375px;

          &:hover {
            box-shadow: 0 0 60px var(--color);
          }
        }
      }
    }
  }
}


@media screen and (max-width:768px) {
  header {
    nav {
      .list-drakmode-menu {
        ul {
          li {
            a {
              font-size: 20px;
            }
          }
        }
      }
    }
  }

  .home {
    .home_info {
      .left {
        h1 {
          font-size: 3.6em;
        }

        h4 {
          font-size: 1.8em;

        }

        p {
          font-size: 14px;
        }
      }

      .right {
        .profile {
          img {
            width: 350px;
            height: 350px;
          }
        }
      }
    }
  }

  .services {
    .services_box {
      .box {
        width: 340px;
      }
    }
  }

  .portfolio {
    .portfolio_wrapper {
      .portfolio_box {
        width: 340px;
      }
    }
  }


}

@media screen and (max-width:568px) {
  header {
    nav {
      .Logo {
        a {
          font-size: 28px;
        }
      }
    }
  }

  .home {
    .home_info {
      .left {
        h3 {
          font-size: 1.8em;
        }

        h1 {
          font-size: 2.5em;
        }

        h4 {
          font-size: 1.4em;
        }

        p {
          font-size: 14px;
        }
      }
      .right{
        .profile{
          img{
            width: 280px;
            height: 280px;
          }
        }
      }
    }
  }
  .about{
    .about_wrapper{
      .about_left{
        .about_img{
          img{
            width: 280px;
            height: 280px;
          }
        }
      }
      .about_right{
        .about_info{
          h2{
            font-size: 2.5em;
          }
        }
      }
    }
  }
  .services{
    h2{
      font-size: 2.5em;
    }
  }
  .portfolio{
    h2{
      font-size: 2.5em;
    }
  }
  .contact{
    h2{
      font-size: 2.5em;
    }
    form{
      .input_box{
        input{
          width: 100%;
        }
      }
    }
  }
  .footer{
    padding: 1.2em 5%;
    .footer_wrapper{
      flex-direction: column-reverse;
      text-align: center;

      .footer_info{
        line-height: 1.5em;
      }
      .iconTop{
        margin-bottom: 1em;
      }
    }
  }
}



/* ================= TESTIMONIALS RESPONSIVE ================= */

/*
@media (max-width: 768px) {
  .wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .testimonials_item {
    padding: 20px;
  }

  .testimonials_box img {
    width: 120px;
    height: 120px;
  }
}


@media (max-width: 568px) {
  .testimonials_item {
    width: 100%;
    padding: 15px;
    text-align: center;
  }

  .testimonials_box img {
    width: 90px;
    height: 90px;
  }

  .name_user {
    font-size: 16px;
  }

  .reviews p {
    font-size: 14px;
    line-height: 1.4rem;
  }
}
@media screen and (max-width: 768px) {
  .timeline_item {
    padding-left: 0;
    width: 100%;
  }

  .timeline_item::before {
    left: 0;
  }

  .timeline_ite {
    width: 100%;
    padding: 0 20px;
    text-align: left;
  }

  .timeline_ite:nth-child(odd),
  .timeline_ite:nth-child(even) {
    padding: 0 20px;
    text-align: left;
  }

  .timeline_dot {
    left: 0;
  }

  .timeline_content {
    padding: 20px;
  }

  .timeline_date {
    font-size: 18px;
    
  }
}

@media screen and (max-width: 480px) {
  .timeline_content h3 {
    font-size: 18px;
  }

  .timeline_content p {
    font-size: 14px;
  }

  .timeline_date {
    font-size: 16px;
  }

  .timeline_content {
    border-radius: 1.5rem;
    padding: 15px;
  }

  .timeline_dot {
    height: 15px;
    width: 15px;
    left: 0;
  }
}

*/
