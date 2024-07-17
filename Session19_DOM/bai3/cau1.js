const tagH1 = document.getElementById("tagH1");
const hideText = document.getElementById("hideText");
const showText = document.getElementById("showText");

hideText.addEventListener("click", function () {
  tagH1.style.display = " none";
});

showText.addEventListener("click", function () {
  tagH1.style.display = "block";
});
