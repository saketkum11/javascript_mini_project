const imageList = document.querySelectorAll(".images");

const prevBtn = document.getElementById("prev_btn");
const nextBtn = document.getElementById("next_btn");
var index = 0;
var lengthImage = imageList.length - 1;

function imageChange(num) {
  console.log("num", num, imageList[num]);
}

nextBtn.addEventListener("click", () => {
  if (index === imageList.length) {
    index = 0;
  } else {
    imageChange(index);
    index += 1;
  }
});
prevBtn.addEventListener("click", () => {
  if (index < 0 || index === undefined) {
    index = imageList.length - 1;
  } else {
    imageChange(index);
    index -= 1;
  }
});
console.log(lengthImage, index, "", imageList);
