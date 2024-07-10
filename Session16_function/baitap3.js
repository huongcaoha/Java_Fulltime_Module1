// bài 1
// function sum(a, b) {
//   if (Number.isNaN(a) || Number.isNaN(b)) {
//     return alert("input invalid");
//   } else {
//     return a + b;
//   }
// }
// console.log(sum(7, 8));

// bài 2
// function primeterCicle(radius) {
//   return 2 * radius * Math.PI;
// }

// function acreageCicle(radius) {
//   return radius * radius * Math.PI;
// }

// console.log(primeterCicle(3));
// console.log(acreageCicle(3));

// bài 3
// function checkCharacter(char) {
//   if (Number.isInteger(char)) {
//     return alert(`${char} is integer`);
//   } else {
//     return alert(`${char} not is integer`);
//   }
// }
// checkCharacter("b");

// bài 4

function checkInput() {
  let input = +prompt("Enter number");
  if (Number.isNaN(input)) {
    return alert(`${input} ko phải là số nguyên`);
  } else {
    if (input >= 0) {
      return true;
    } else {
      return false;
    }
  }
}
checkInput();

// bài 5
let a = 7;
let b = 2;
function changeLocation(number1, number2) {
  let tmp = number1;
  number1 = number2;
  number2 = tmp;
}
changeLocation(a, b);
