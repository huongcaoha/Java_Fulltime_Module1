let body = document.querySelector("body");
let togger = document.querySelector("#togger");
let classList = body.classList;
console.log(classList);
togger.addEventListener("click", function () {
  let check = false;
  let cl = "changeBg";
  for (let clas of classList) {
    if (clas == cl) {
      check = true;
      break;
    }
  }
  if (check) {
    body.classList.remove(cl);
  } else {
    body.classList.add(cl);
  }
});
