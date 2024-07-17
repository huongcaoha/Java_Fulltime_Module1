let boxTex = document.querySelector(".boxText");
window.addEventListener("click", function (e) {
  if (e.target == boxTex) {
    boxTex.style.display = "none";
  }
});

const openModal = document.getElementById("openModal");
openModal.addEventListener("click", function () {
  boxTex.style.display = "block";
});

const buttonClose = document.getElementById("close");
buttonClose.addEventListener("click", function () {
  boxTex.style.display = "none";
});
