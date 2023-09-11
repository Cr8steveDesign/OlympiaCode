const imageUrls = ["images/happy-girl.png", "images/happy-boy.png"];

// Add year dynamically on the footer
const year_text = document.querySelector("#footer-year");
year_text.textContent = new Date().getFullYear(); //+ new Date().toDateString();

const feature_image = document.querySelector("#feature-image");

feature_image.addEventListener("mouseover", (e) => {
  feature_image.setAttribute("src", `${imageUrls[1]}`);
  //   feature_image.classList.toggle("dissolve");
  //   feature_image.classList.toggle("appear");
});

feature_image.addEventListener("mouseout", (e) => {
  feature_image.setAttribute("src", `${imageUrls[0]}`);
  //   feature_image.classList.toggle("dissolve");
  //   feature_image.classList.toggle("appear");
});
