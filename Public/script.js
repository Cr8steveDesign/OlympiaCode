// Add year dynamically on the footer
const year_text = document.querySelector("#footer-year");
year_text.textContent =
  new Date().getFullYear() + new Date().getDate().toString();
