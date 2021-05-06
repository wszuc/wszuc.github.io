import * as anime from '/node_modules/animejs/lib/anime.min.js';

// HERO ANIMATIONS

const colorAppearHero = anime({
    targets: '.hero',
    width: '100vw',
    easing: 'cubicBezier(0.895, 0.030, 0.685, 0.220)',
});

const blindDissapearHero = anime({
    targets: '.hero .blind',
    width: '0vw',
    easing: 'cubicBezier(0.895, 0.030, 0.685, 0.220)',
});

const headerAppears = anime({
    targets: '.hero .text',
    filter: 'opacity(1)',
    easing: 'linear',
    delay: 1500 // increase delay by 100ms for each elements.
});

// CONTACT SECTION ANIMATION

function fireContactAnim(){
    const colorAppearContact = anime({
        targets: '#contact .no-blind',
        height: '100%',
        easing: 'cubicBezier(0.895, 0.030, 0.685, 0.220)',   
    });
    
    const blindDissapearContact = anime({
        targets: '#contact .blind',
        height: '0vh',
        easing: 'cubicBezier(0.895, 0.030, 0.685, 0.220)',   
    });
  
}

// TRANSITIONS - BLURRING

const aboutSection = document.querySelector('#about');
const aboutOpenButton = document.querySelector('.about-button-open');
const aboutCloseButton = document.querySelector('.about-button-close');
aboutSection.style.display = 'none';

aboutOpenButton.addEventListener('click', showAbout);
aboutCloseButton.addEventListener('click', showAbout);

var isOpened = Boolean(false);

function showAbout(){
    if(isOpened==false){
        anime({targets: aboutSection, easing: 'linear', update: function(){aboutSection.style.display = 'flex';}, filter: 'opacity(1)'});
        anime({targets: '.fadeable', filter: 'blur(10px)', easing: 'linear', duration: 1500});
        isOpened = !isOpened;
    }
    else{
        anime({targets: aboutSection, easing: 'linear', update: function(){aboutSection.style.display = 'none'}});
        anime({targets: '.fadeable', filter: 'blur(0px)', easing: 'linear', duration: 500});
        isOpened  = !isOpened;
    }
    

}


/* FORM AJAXING */

var form = document.querySelector('.contact-form');
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "<p>Message sent!</p>";
    form.reset()
  }).catch(error => {
    status.innerHTML = "<p>Oops! There was a problem sending your message :/</p>"
  });
}
form.addEventListener("submit", handleSubmit)

/* APPEAR ON SCROLL */

const offsetProjects = window.innerHeight*0.5;
let isProjectsAnimated = Boolean(false);

window.addEventListener('scroll', function () {
    if(scrollY>=offsetProjects && isProjectsAnimated==false){
        isProjectsAnimated = true;
        anime({targets: works, filter: 'opacity(1)', easing: 'linear'});
    }
})

const offsetContact = document.getElementById('works').offsetHeight*0.5 + window.innerHeight;
let isContactAnimated = Boolean(false);

window.addEventListener('scroll', function () {
    console.log(scrollY)
    if(scrollY>=offsetContact && isContactAnimated==false){
        fireContactAnim();
    }
})

