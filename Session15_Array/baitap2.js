//bài 1
// let a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ];

// for (let i = 0; i < a.length; i++) {
//   console.log(`row${i}`);
//   for (let j = 0; j < a[i].length; j++) {
//     console.log(a[i][j]);
//   }
// }

// bài 2
// let arr = ["c", "s", "c", "2", "6", "1"];
// let rs = "";
// for (let i = arr.length - 1; i >= 0; i--) {
//   rs += arr[i];
// }
// console.log(rs);

// bài 3
// let n;
// do {
//   n = +prompt("how many element in array :");
// } while (Number.isNaN(n) || n <= 0);
// let arr = [];
// for (let i = 1; i <= n; i++) {
//   let char;
//   do {
//     char = prompt(`Enter char of index ${i} :`);
//   } while (char.length > 1 || char.length < 0);
//   arr.push(char);
// }
// let rs = [];
// for (let i = 0; i < arr.length; i++) {
//   if (Number.isInteger(arr[i])) {
//     rs.push(arr[i]);
//   } else {
//     rs.push(arr[i].charCodeAt(0));
//   }
// }
// console.log(arr);
// console.log(rs);

// bai 4
// let string = prompt("Enter a string :").strim();
// let count = string.length;
// console.log(string);
// console.log(count);

// bài 5
// let string1 = prompt("Enter a string1 :").trim();
// let string2 = prompt("Enter a string2 :").trim();
// if (string1.length != string2.length) {
//   alert("2 chuỗi khác nhau");
// } else {
//   let check = true;
//   for (let i = 0; i < string1.length; i++) {
//     if (string1[i] !== string2[i]) {
//       check = false;
//       break;
//     }
//   }
//   if (check) {
//     alert("2 Chuỗi giống nhau");
//   } else {
//     alert("2 chuỗi khác nhau");
//   }
// }

// bài 6
let input = prompt("Enter a string :");
let rs = "";
for (let i = 0; i < input.length; i++) {
  if (input[i] == "-") {
    rs += "_";
  } else {
    rs += input[i];
  }
}
alert(rs);
