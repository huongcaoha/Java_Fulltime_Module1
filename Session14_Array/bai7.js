// bài 1
// let myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
// console.log(myColor.join(","));

// bài 2
// let numbers;
// do {
//   numbers = prompt("Enter string numbers :");
// } while (+Number.isNaN(numbers));
// let rs = "";
// for (let i = 0; i < numbers.length; i++) {
//   rs += numbers[i];
//   if (+numbers[i] % 2 == 0 && +numbers[i + 1] % 2 == 0) {
//     rs += "-";
//   }
// }
// console.log(rs);

// bài 3
let input = prompt("Enter a string : ");
let rs = "";
for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i].toLowerCase()) {
    rs += input[i].toUpperCase();
  } else if (input[i] === input[i].toUpperCase) {
    rs += input[i].toLowerCase();
  }
}
console.log(rs);
