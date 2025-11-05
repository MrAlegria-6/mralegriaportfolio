// src/scripts/theme.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#theme-toggle");
  const html = document.documentElement;

  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
  }

  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
