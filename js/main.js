// current year
document.getElementById("year").textContent = new Date().getFullYear();

// photo wiring: reveal a dropped-in photo once it actually loads;
// otherwise the SK monogram fallback stays visible (never a broken-image icon)
function wirePhoto(imgId) {
  const img = document.getElementById(imgId);
  if (!img) return;
  const container = img.closest(".hero-photo, .about-photo");
  if (!container) return;
  img.addEventListener("load", () => container.classList.add("has-photo"));
  img.addEventListener("error", () => container.classList.remove("has-photo"));
}
wirePhoto("heroPhotoImg");
wirePhoto("aboutPhotoImg");

// theme toggle (light / dark)
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function syncToggleLabel(theme) {
  themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
  );
}

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  syncToggleLabel(theme);
}

syncToggleLabel(root.getAttribute("data-theme") || "light");

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch (e) {
    /* storage unavailable, theme still applies for this session */
  }
});

// mobile nav
const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
});
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// scroll-spy: highlight active nav link
const links = [...navLinks.querySelectorAll("a")];
const sections = links
  .map((l) => document.querySelector(l.getAttribute("href")))
  .filter(Boolean);

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach((l) =>
          l.classList.toggle("active", l.getAttribute("href") === "#" + id)
        );
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => spy.observe(s));

// reveal-on-scroll
const reveals = document.querySelectorAll(".reveal");
const ro = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
reveals.forEach((r) => ro.observe(r));
