const imageCard = document.querySelectorAll(".card");

imageCard.forEach((image) => {
  console.log(image);
  image.addEventListener("click", () => {
    console.log("clicked", image);
  });
});

console.log(imageCard);
