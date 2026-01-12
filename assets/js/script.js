import { animate, stagger } from "https://cdn.jsdelivr.net/npm/motion@11.13.5/+esm";

const starfield = document.getElementById("starfield");
const isEducation = document.body.classList.contains("page-education");
const isAbout = document.body.classList.contains("page-about");

if (starfield) {
  const inner = document.createElement("div");
  inner.className = "starfield-inner";
  starfield.appendChild(inner);

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
}

/* -------------------------
   EDUCATION: CATEGORY FILTER
   ------------------------- */
function initEducationCategoryFilter() {
  const buttons = document.querySelectorAll(".filter-btn[data-filter]");
  const groups = document.querySelectorAll(".course-group[data-cat]");
  const countEl = document.getElementById("courseCount");

  if (!buttons.length || !groups.length) return;

  function setActive(filter) {
    buttons.forEach((b) => b.classList.toggle("active", b.dataset.filter === filter));

    let visibleCourses = 0;
    let totalCourses = 0;

    groups.forEach((group) => {
      const cat = group.dataset.cat;
      const showGroup = filter === "all" || cat === filter;

      group.style.display = showGroup ? "" : "none";

      const coursesInGroup = group.querySelectorAll(".course").length;
      totalCourses += coursesInGroup;
      if (showGroup) visibleCourses += coursesInGroup;
    });

    if (countEl) {
      countEl.textContent =
        filter === "all"
          ? `Showing all ${totalCourses} courses`
          : `Showing ${visibleCourses} courses`;
    }
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setActive(btn.dataset.filter));
  });

  setActive("all");
}

if (isEducation) {
  initEducationCategoryFilter();
}

const possibleSelectors = [
  ".hero-kicker",
  ".hero-title",
  ".hero-subtitle",
  ".hero-actions",
  ".hero-note",

  ".about-kicker",
  ".about-title",
  ".about-grid",

  ".edu-kicker",
  ".edu-title",
  ".edu-meta",
  ".course-toolbar",
  ".edu-grid",
  ".edu-note"
];

const existing = possibleSelectors.filter((sel) => document.querySelector(sel));

if (existing.length) {
  animate(
    existing,
    { opacity: [0, 1], y: [18, 0] },
    { delay: stagger(0.08), duration: 0.7, easing: "ease-out" }
  );
}

if (!isEducation && !isAbout && document.querySelector(".hero-title")) {
  animate(
    ".hero-title",
    { y: [0, -6, 0] },
    { duration: 3.5, easing: "ease-in-out", repeat: Infinity }
  );
}


const ctaButtons = document.querySelectorAll(".btn");
ctaButtons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    animate(btn, { scale: 1.04 }, { duration: 0.2, easing: "ease-out" });
  });
  btn.addEventListener("mouseleave", () => {
    animate(btn, { scale: 1 }, { duration: 0.2, easing: "ease-out" });
  });
});
