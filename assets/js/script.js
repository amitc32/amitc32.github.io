// script.js
import { animate, stagger } from "https://cdn.jsdelivr.net/npm/motion@11.13.5/+esm";

const starfield = document.getElementById("starfield");

const inner = document.createElement("div");
inner.className = "starfield-inner";
starfield.appendChild(inner);

const STAR_COUNT = 140;
const maxRadius = 60; 

for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement("span");
  star.className = "star";

  const angle = i * 0.38 * Math.PI; 
  const radius = (i / STAR_COUNT) * maxRadius;

  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);

  star.style.left = `${x}%`;
  star.style.top = `${y}%`;

  const duration = 2 + Math.random() * 3; // 2–5s
  const delay = Math.random() * 5;

  star.style.animation = `star-twinkle ${duration}s ease-in-out ${delay}s infinite`;

  inner.appendChild(star);
}


const heroElements = [
  ".hero-kicker",
  ".hero-title",
  ".hero-subtitle",
  ".hero-actions",
  ".hero-note"
];

animate(
  heroElements,
  {
    opacity: [0, 1],
    y: [24, 0]
  },
  {
    delay: stagger(0.1),
    duration: 0.8,
    easing: "ease-out"
  }
);

animate(
  ".hero-title",
  { y: [0, -6, 0] },
  {
    duration: 3.5,
    easing: "ease-in-out",
    repeat: Infinity
  }
);

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    animate(
      btn,
      { scale: 1.04 },
      { duration: 0.2, easing: "ease-out" }
    );
  });

  btn.addEventListener("mouseleave", () => {
    animate(
      btn,
      { scale: 1 },
      { duration: 0.2, easing: "ease-out" }
    );
  });
});