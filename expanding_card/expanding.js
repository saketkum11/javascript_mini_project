const imageCard = document.querySelectorAll(".card");

imageCard.forEach((image) => {
  image.addEventListener("click", () => {
    removveClassList();
    image.classList.add("active");
  });
});

function removveClassList() {
  imageCard.forEach((image) => {
    image.classList.remove("active");
  });
}
