// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Animate elements into view
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Animate once
      }
    });
  },
  {
    threshold: 0.2, // Trigger when 20% visible
  },
);

faders.forEach((el) => observer.observe(el));
