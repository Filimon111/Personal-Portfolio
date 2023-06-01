let menuBtn = document.querySelector("#menu-btn");
let h = document.getElementById("hh");
h.addEventListener("click", function (e) {
  alert("j");
});

menuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-xmark");
});

var typed = new Typed(".auto-input", {
  strings: ["Front-End Developer!", "UI Designer!"],
  typeSpeed: 100,
  backspeed: 200,
  backDelay: 2000,
  loop: true,
});

let navlinks = document.querySelectorAll("nav ul li a");
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  const scrollPos = this.window.scrollY;
  sections.forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active");
        }
      });
    }
  });
});
