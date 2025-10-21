// Simple smooth scrolling or animations can go here
console.log("Portfolio loaded!");
const links =document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
  // Smooth scroll for nav
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Typing effect
const typedText = document.querySelector(".typed-text");
const textArray = ["modern web applications", "scalable backend systems", "full-stack solutions"];
let textArrayIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 50;
let newTextDelay = 2000;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (textArray.length) setTimeout(type, newTextDelay);
});

});

