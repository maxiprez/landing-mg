// MENU SHOW
const showMenu = (toggleId, navId) => {
    const toogle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toogle && nav){
        toogle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

// ACTIVE AND REMOVE MENU
const navLink = document.querySelectorAll('.nav__link')


function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'))
     this.classList.add('active')

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


//*===== SCROLL REVEAL ANIMATION =====*//
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* SCROLL HOME */
sr.reveal('.home__data',{})
sr.reveal('.home__title',{delay: 200})
sr.reveal('.home__p',{delay: 200})
sr.reveal('.home__button',{delay: 300})
sr.reveal('.home__img',{interval: 400})
sr.reveal('.intro__data',{})
sr.reveal('.box-part__anchor',{delay: 200})
sr.reveal('.box-part__archive',{delay: 220})
sr.reveal('.box-part__user',{delay: 230})

/* SCROLL ABOUT */
sr.reveal('.about__img',{})
sr.reveal('.about__title',{delay: 200})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text',{delay: 400})
sr.reveal('.about__p',{delay: 400})
sr.reveal('.about__button',{delay: 400})

/* SCROLL SERVICE */
sr.reveal('.service',{})
sr.reveal('.service__title',{delay: 200})
sr.reveal('.service__subtitle',{delay: 200})
sr.reveal('.service__box-part1',{delay: 400})
sr.reveal('.service__box-part2',{delay: 550})
sr.reveal('.service__box-part3',{delay: 600})
sr.reveal('.service__box-part4',{delay: 650})
sr.reveal('.service__box-part5',{delay: 700})
sr.reveal('.service__box-part6',{delay: 750})


/* WORKS */
sr.reveal('.works__title',{})
sr.reveal('.works__subtitle',{delay: 200})
sr.reveal('.card__work',{interval: 200})
sr.reveal('.works-img-fluid',{delay: 400})
sr.reveal('.work-portfolio__link',{interval: 200})

/* TEAM */
sr.reveal('.team__title',{})
sr.reveal('.team__subtitle',{delay: 200})
sr.reveal('#team-card1',{delay: 400})
sr.reveal('#team-card2',{delay: 500})
sr.reveal('#team-card3',{delay: 600})
sr.reveal('#team-card4',{delay: 700})

/* TESTIMONIAL */
sr.reveal('.testimonial',{})
sr.reveal('.testimonial__title',{delay: 200})
sr.reveal('.testimonial__subtitle',{delay: 200})
sr.reveal('.testimonial__text',{delay: 400})
sr.reveal('.testimonial__author',{delay: 400})

/* CONTACT */
sr.reveal('.contact',{})
sr.reveal('.contact__title',{delay: 200})
sr.reveal('.contact__subtitle',{delay: 200})
sr.reveal('.section-title__form',{interval: 400})
sr.reveal('.contact__input',{interval: 200})
sr.reveal('.contact__button',{interval: 200})
sr.reveal('.container__contact-form-options',{interval: 200})

/* BLOG */
sr.reveal('.blog',{})
sr.reveal('.blog__title',{delay: 200})
sr.reveal('.blog__subtitle',{delay: 200})
sr.reveal('.blog__link',{delay: 400})
sr.reveal('.card-blog__development',{delay: 400})
sr.reveal('.card-blog__design',{delay: 550})
sr.reveal('.card-blog__research',{delay: 600})