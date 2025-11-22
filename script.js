// Theme toggle
const themeToggle = document.getElementById("theme-toggle");

function setTheme(mode) {
  if (mode === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("light");
    themeToggle.textContent = "🌙";
  }
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    setTheme(saved);
  } else {
    setTheme("dark");
  }
}

themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  const newTheme = isLight ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

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

// Simple reveal on scroll
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
    alert("This is a demo form. Please email or message on LinkedIn to contact Harsh 😊");
  });
}

// Init
initTheme();
