const lt = document.getElementById("lt");
const gt = document.getElementById("gt");
console.log(lt);
console.log(gt);
const listImage = [
  "../resource/image1.jfif",
  "../resource/image2.jfif",
  "../resource/image3.jfif",
  "../resource/image4.jfif",
  "../resource/image5.jfif",
  "../resource/image6.jfif",
];
let imageCurrent = 0;
let divBigImage = document.getElementById("div-bigImage");

gt.addEventListener("click", function () {
  if (imageCurrent == 5) {
    imageCurrent = 0;
  } else {
    imageCurrent++;
  }
  divBigImage.style.backgroundImage = `url(${listImage[imageCurrent]})`;
});
console.log(imageCurrent);

lt.addEventListener("click", function () {
  if (imageCurrent == 0) {
    imageCurrent = 5;
  } else {
    imageCurrent--;
  }
  divBigImage.style.backgroundImage = `url(${listImage[imageCurrent]})`;
});

const smallimages = document.querySelectorAll(".smallImage");
for (let image of smallimages) {
  let value = image.getAttribute("title");
  image.addEventListener("click", function () {
    imageCurrent = Number.parseInt(value);
    divBigImage.style.backgroundImage = `url(${listImage[imageCurrent]})`;
  });
}
for (let image of smallimages) {
  let value = Number.parseInt(image.getAttribute("title"));
  if (value != imageCurrent) {
    image.style.border = "none";
  }
}
setInterval(function () {
  if (imageCurrent == 5) {
    imageCurrent = 0;
  } else {
    imageCurrent++;
  }
  divBigImage.style.backgroundImage = `url(${listImage[imageCurrent]})`;
}, 30000);
