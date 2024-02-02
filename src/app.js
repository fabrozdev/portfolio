// script.js

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const html = document.documentElement;

  // Check the user's preference from localStorage
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
  }

  // Toggle the theme on button click
  toggleButton.addEventListener("click", function () {
    html.classList.toggle("dark");

    // Save the user's preference to localStorage
    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
