let body = document.querySelector("body");
const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");

square1.addEventListener("mouseover", function () {
  let color = square1.getAttribute("title");
  body.style.backgroundColor = color;
});

square1.addEventListener("mouseout", function () {
  let color = square2.getAttribute("title");
  body.style.backgroundColor = color;
});

square3.addEventListener("mouseover", function () {
  let color = square3.getAttribute("title");
  body.style.backgroundColor = color;
});

square3.addEventListener("mouseout", function () {
  let color = square2.getAttribute("title");
  body.style.backgroundColor = color;
});
