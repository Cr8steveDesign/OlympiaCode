const imageUrls = [
  "images/happy-girl.png",
  "images/happy.png",
  "images/happy-girl1.png",
  "images/happy-boy1.png",
];

let index = 0;

const feature_image = document.querySelector("#feature-image");

feature_image.addEventListener("mouseover", (e) => {
  if (index > 4 || index == 0) index = 1;

  feature_image.classList.add("appear");
  feature_image.setAttribute("src", `${imageUrls[index]}`);
  index += 1;
  //   feature_image.classList.toggle("dissolve");
  //   feature_image.classList.toggle("appear");
});

feature_image.addEventListener("mouseout", (e) => {
  feature_image.classList.toggle("appear");
  feature_image.setAttribute("src", `${imageUrls[0]}`);
  //   feature_image.classList.toggle("dissolve");
  //   feature_image.classList.toggle("appear");
});
