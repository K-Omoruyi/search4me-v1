// Variables
const toggle = document.querySelector(".toggle");
const year = document.querySelector(".year");

// Events
toggle.addEventListener("click", () => {
  toggle.classList.toggle("show");
});

const getYear = new Date().getFullYear();

year.textContent = getYear;
