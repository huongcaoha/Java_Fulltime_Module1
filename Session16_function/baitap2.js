// bài 1
// function calSquare(number){
//     return number*number;
// }
// console.log(calSquare(4));

// bài 2

// function primeterCicle(radius){
//     return 2*radius*Math.PI ;
// }

// function acreageCicle(radius){
//     return (radius*radius)*Math.PI;
// }

// console.log(primeterCicle(3));
// console.log(acreageCicle(3));

// bài 3
// function factorial(number) {
//   let sum = 1;
//   for (let i = 2; i <= number; i++) {
//     sum = sum * i;
//   }
//   return sum;
// }
// console.log(factorial(5));

// bài 4
// function checkNumber(char) {
//   if (Number.isNaN(+char) || char.length > 1) {
//     return false;
//   } else if (Number.isInteger(+char)) {
//     return true;
//   }
// }
// console.log(checkNumber("n"));

// // bài 5
// function getNumberSmall(number1, number2, number3) {
//   if (Number.isNaN(number1) || Number.isNaN(number2) || Number.isNaN(number3)) {
//     return alert("input invalid");
//   } else {
//     return number1 < number2
//       ? number1 < number3
//         ? number1
//         : number3
//       : number2 < number3
//       ? number2
//       : number3;
//   }
// }

// console.log(getNumberSmall(1, 2, 3));

// bai 6
// function checkNumber(number) {
//   if (Number.isNaN(number)) {
//     return false;
//   } else {
//     if (number >= 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(checkNumber(1));

// bài 7

// function changeLocation(number1, number2) {
//   if (Number.isNaN(number1) || Number.isNaN(number2)) {
//     return alert("input invalid");
//   } else {
//     let tmp = number1;
//     number1 = number2;
//     number2 = tmp;
//     console.log(number1, number2);
//   }
// }
// changeLocation(1, 2);

// bài 8
// function reverse(arr) {
//   return arr.reverse();
// }
// console.log(reverse([1, 2, 3]));

// bài 9
function searchCharacter(arr, char) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (char == arr[i]) {
      count++;
    }
  }
  return count > 0 ? count : -1;
}

console.log(searchCharacter(["a", "a", "c"], "a"));
