// Smooth scroll for nav links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Fake contact form submit
const fakeSubmit = document.getElementById("fake-submit");
if (fakeSubmit) {
  fakeSubmit.addEventListener("click", () => {
    alert(
      "This is a demo form. Please email or message on LinkedIn to contact Harsh 😊"
    );
  });
}

// ---------- Background painting slideshow ----------

// we now use <body> as the background target
const bgEl = document.body;

const paintings = [
  "bg1.jpg",
  "bg2.jpg",
  "bg3.jpg",
  "bg4.jpg",
  "bg5.jpg",
  "bg6.jpg",
  "bg7.jpg",
  "bg8.jpg",
  "bg9.jpg",
  "bg10.jpg"
];

let bgIndex = 0;

function updateBackground() {
  if (!bgEl) return;

  // dark gradient + painting
  bgEl.style.backgroundImage =
    `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.75)), url("${paintings[bgIndex]}")`;

  bgIndex = (bgIndex + 1) % paintings.length;
}

updateBackground();
setInterval(updateBackground, 7000);
