import { animate, stagger } from "https://cdn.jsdelivr.net/npm/motion@11.13.5/+esm";

const starfield = document.getElementById("starfield");

const inner = document.createElement("div");
inner.className = "starfield-inner";
starfield.appendChild(inner);

const isAbout = document.body.classList.contains("page-about");

const STAR_COUNT = isAbout ? 110 : 140;
const maxRadius = isAbout ? 70 : 60;

for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement("span");
  star.className = "star";

  const spiralTightness = isAbout ? 0.52 : 0.38;
  const angle = i * spiralTightness * Math.PI;
  const radius = (i / STAR_COUNT) * maxRadius;

  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);

  star.style.left = `${x}%`;
  star.style.top = `${y}%`;

  const duration = (isAbout ? 3.2 : 2) + Math.random() * (isAbout ? 3.6 : 3);
  const delay = Math.random() * (isAbout ? 6 : 5);
  star.style.animation = `star-twinkle ${duration}s ease-in-out ${delay}s infinite`;

  inner.appendChild(star);
}

const heroElements = [
  ".hero-kicker",
  ".hero-title",
  ".hero-subtitle",
  ".hero-actions",
  ".hero-note",

  ".about-kicker",
  ".about-title",
  ".about-grid",
  ".about-note"
];

animate(
  heroElements,
  { opacity: [0, 1], y: [24, 0] },
  { delay: stagger(0.08), duration: 0.75, easing: "ease-out" }
);

if (!isAbout) {
  animate(
    ".hero-title",
    { y: [0, -6, 0] },
    { duration: 3.5, easing: "ease-in-out", repeat: Infinity }
  );
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    animate(btn, { scale: 1.04 }, { duration: 0.2, easing: "ease-out" });
  });
  btn.addEventListener("mouseleave", () => {
    animate(btn, { scale: 1 }, { duration: 0.2, easing: "ease-out" });
  });
});
