/* ##### Nav Bar Function ##### */
    function myMenuFunction() {
        var menuBtn = document.getElementById("myNavMenu");

        if(menuBtn.className === "nav-menu"){
            menuBtn.className += " responsive";
        } else {
            menuBtn.className = "nav-menu";
        }
    }



/* ##### Shadow on Nav bar while scrolling ##### */

window.onscroll = function () {headerShadow()};

function headerShadow (){
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}




/* ##### Typing Effect ##### */

var typingEffect = new Typed(".typedText",{
    strings : ["Designer","Youtuber","Developer", "Trainer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay: 2000
})


/* ##### Scroll reveal animation ##### */

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
})


/* ##### Home ##### */

sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', {delay: 100})
sr.reveal('.featured-text-info', {delay: 200})
sr.reveal('.featured-text-btn', {delay: 200})
sr.reveal('.social_icons', {delay: 200})
sr.reveal('.featured-image', {delay: 300})

/* ##### Project box ##### */

sr.reveal('.project-box', {interval: 200})

/* ##### Headings ##### */


sr.reveal('.top-header', {})

/* ##### About INFO ##### */

const srLeft = ScrollReveal ({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', {delay: 100})
srLeft.reveal('.contact-info', {delay: 100})


/* ##### About Skills ##### */

const srRight = ScrollReveal ({
    origin: 'right',
    distance: '800px',
    duration: 2000,
    reset: true
})


/* ##### Change active link ##### */

const sections  = document.querySelectorAll("section[id]")

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offSetHeight, 
            sectionTop = current.offserTop - 50,
            sectionId = current.getAttribute('id')

            if(scroolY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('actve-link');{

                }
            } else {

                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('actve-link');{
                    
                }
            }
        })

}

window.addEventListener('scroll', scrollActive)