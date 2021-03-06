// HERO ANIMATIONS

const colorAppearHero = anime({
  targets: ".hero .animation-left",
  width: "100%",
  easing: "cubicBezier(0.895, 0.030, 0.685, 0.220)",
});

const blindDissapearHero = anime({
  targets: ".hero .blind",
  width: "0%",
  easing: "cubicBezier(0.895, 0.030, 0.685, 0.220)",
});

const headerAppears = anime({
  targets: ".hero .text",
  filter: "opacity(1)",
  easing: "linear",
  delay: 1500, // increase delay by 100ms for each elements.
});

// CONTACT SECTION ANIMATION

function fireContactAnim() {
  const colorAppearContact = anime({
    targets: "#contact .no-blind",
    height: "100%",
    easing: "cubicBezier(0.895, 0.030, 0.685, 0.220)",
  });

  const blindDissapearContact = anime({
    targets: "#contact .blind",
    height: "0vh",
    easing: "cubicBezier(0.895, 0.030, 0.685, 0.220)",
  });
}

// TRANSITIONS - BLURRING & About section

const aboutSection = document.querySelector("#about");
const aboutOpenButton = document.querySelector(".about-button-open");
const aboutCloseButton = document.querySelector(".about-button-close");
const body = document.querySelector("body");
aboutSection.style.display = "none";

aboutOpenButton.addEventListener("click", showAbout);
aboutCloseButton.addEventListener("click", closeAbout);

function showAbout() {
  body.classList.add("modal-open");
  anime({
    targets: aboutSection,
    easing: "linear",
    update: function () {
      aboutSection.style.display = "flex";
    },
    filter: "opacity(1)",
  });
  anime({
    targets: ".fadeable",
    filter: "blur(10px)",
    easing: "linear",
    duration: 1500,
  });
}

function closeAbout() {
  if (body.classList.contains("modal-open"))
    body.classList.remove("modal-open");
  anime({
    targets: aboutSection,
    easing: "linear",
    update: function () {
      aboutSection.style.display = "none";
    },
  });
  anime({
    targets: ".fadeable",
    filter: "blur(0px)",
    easing: "linear",
    duration: 500,
  });
}

/* FORM AJAXING */

var form = document.querySelector(".contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  if (window.innerWidth > 800) {
    const contactHeight = document.getElementById("contact").offsetHeight;
    document.getElementById("contact").style.height = `${contactHeight + 60}px`;
  }
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Message sent!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem sending your message";
    });
}
form.addEventListener("submit", handleSubmit);

/* APPEAR ON SCROLL */

const offsetProjects = window.innerHeight * 0.5;
let isProjectsAnimated = Boolean(false);

window.addEventListener("scroll", function () {
  if (scrollY >= offsetProjects && isProjectsAnimated == false) {
    isProjectsAnimated = true;
    anime({ targets: works, filter: "opacity(1)", easing: "linear" });
  }
});

const offsetContact =
  document.getElementById("works").offsetHeight * 0.5 + window.innerHeight;
let isContactAnimated = Boolean(false);

window.addEventListener("scroll", function () {
  if (scrollY >= offsetContact && isContactAnimated == false) {
    fireContactAnim();
  }
});
