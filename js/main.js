// navbar
var navbar = document.getElementById("mainNav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// close menu
var navLinks = document.querySelectorAll(".navbar .nav-link");
var navMenu = document.getElementById("navMenu");

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    if (navMenu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
    }
  });
}

// hero effect
var words = ["Gamers", "Champions", "Legends", "Games Arena"];
var typingEl = document.getElementById("typing");
var wordIndex = 0;
var charIndex = 0;
var isDeleting = false;

function typeEffect() {
  var currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingEl.textContent = currentWord.substring(0, charIndex);

  var speed = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// footer year
document.getElementById("year").textContent = new Date().getFullYear();