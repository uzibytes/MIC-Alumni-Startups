/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("header-bg")
    : header.classList.remove("header-bg");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 2500,
});
const sr2 = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1000,
});

sr.reveal(`.home__images`, { distance: "120px", delay: 400 });
sr.reveal(`.home__title`, { delay: 1000 });
sr.reveal(`.home__description`, { delay: 1200 });
sr.reveal(`.home__button`, { delay: 1400 });
sr.reveal(`.home__footer`, { delay: 1600 });
sr.reveal(`.home__data div`, { origin: "right", interval: 100, delay: 1800 });

sr2.reveal(`.about__title`, { origin: "left", interval: 100, delay: 600 });
sr2.reveal(`.about__description`, {
  origin: "left",
  interval: 100,
  delay: 600,
});
sr2.reveal(`.about__title2`, { interval: 500, delay: 800 });
sr2.reveal(`.about__mission-head`, { interval: 20, delay: 800 });

// Date and time
function updateClock() {
  let date = document.getElementById("date");
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let second = document.getElementById("second");
  // creating the date object and getting the date and time
  let newDate = new Date();
  let year = newDate.getFullYear();
  let month = newDate.getMonth();
  let todaySDate = newDate.getDate();
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();
  date.innerHTML = " " + todaySDate + "/ " + month + "/ " + year;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
}
updateClock();
setInterval(updateClock, 1000);


// Flaoting GO UP Button 
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

