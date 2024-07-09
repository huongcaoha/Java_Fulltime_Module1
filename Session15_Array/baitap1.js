//bài 1
// let arr = [];
// for (let i = 1; i <= 10; i++) {
//   let number = "";
//   do {
//     number = +prompt(`Enter number ${i} in arr :`);
//   } while (Number.isNaN(number));
//   arr.push(number);
// }
// let rs = [];
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] >= 10) {
//     rs.push(arr[i]);
//   }
// }
// console.log(` Có ${rs.length} phần tử giá trị >= 10 là ${rs}`);

// bài 2
// let arr = [];
// for (let i = 1; i <= 10; i++) {
//   let number = "";
//   do {
//     number = +prompt(`Enter number ${i} in arr :`);
//   } while (Number.isNaN(number));
//   arr.push(number);
// }
// let numberMax = arr[0];
// let index = 0;
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] > numberMax) {
//     numberMax = arr[i];
//   }
// }
// index = arr.indexOf(numberMax);
// console.log(`Number max is ${numberMax} , index = ${index}`);

//bài 3
// let n;
// do {
//   n = +prompt("how many element do you want this array to have ? :");
// } while (Number.isNaN(n) || n <= 0);
// let arr = [];
// for (let i = 1; i <= n; i++) {
//   let number = "";
//   do {
//     number = +prompt(`Enter number ${i} in arr :`);
//   } while (Number.isNaN(number));
//   arr.push(number);
// }
// let sum = 0;
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// let avg = sum / arr.length;
// console.log(`element max = ${max} , avg = ${avg}`);

// bài 4
// cách 1
// let n;
// do {
//   n = +prompt("how many element do you want this array to have ? :");
// } while (Number.isNaN(n) || n <= 0);
// let arr = [];
// for (let i = 1; i <= n; i++) {
//   let number = "";
//   do {
//     number = +prompt(`Enter number ${i} in arr :`);
//   } while (Number.isNaN(number));
//   arr.push(number);
// }
// console.log(arr.reverse());

// cách 2
// let n;
// do {
//   n = +prompt("how many element do you want this array to have ? :");
// } while (Number.isNaN(n) || n <= 0);
// let arr = [];
// for (let i = 1; i <= n; i++) {
//   let number = "";
//   do {
//     number = +prompt(`Enter number ${i} in arr :`);
//   } while (Number.isNaN(number));
//   arr.push(number);
// }
// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   newArr.push(arr[i]);
// }
// console.log(newArr);

// bài 5
// let n;
// do {
//   n = +prompt("how many element do you want this array to have ? :");
// } while (Number.isNaN(n) || n <= 0);
// let arr = [];
// for (let i = 1; i <= n; i++) {
//   let number = "";
//   do {
//     number = +prompt(`Enter number ${i} in arr :`);
//   } while (Number.isNaN(number));
//   arr.push(number);
// }
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     count++;
//   }
// }
// console.log(`have ${count} element < 0 in array `);

// bài 6
// cách 1
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let n;
// do {
//   n = +prompt("Enter number to search in arr :");
// } while (Number.isNaN(n));
// console.log(arr);
// if (arr.indexOf(n) == -1) {
//   console.log("Number X is not the array");
// } else {
//   console.log("Number X is in the array");
// }

// cách 2
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let n;
// do {
//   n = +prompt("Enter number to search in arr :");
// } while (Number.isNaN(n));
// let check = false;
// for (let i = 0; i < arr.length; i++) {
//   if (n == arr[i]) {
//     check = true;
//     break;
//   }
// }
// if (check) {
//   console.log("Number X is in the array");
// } else {
//   console.log("Number X is not the array");
// }

// bài 7

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let n;
// do {
//   n = +prompt("Enter number to search in arr :");
// } while (Number.isNaN(n));
// for (let i = 0; i < arr.length; i++) {
//   if (n == arr[i]) {
//     arr.splice(i, 1);
//     arr.push(0);
//     break;
//   }
// }
// console.log(arr);

// bài 8
// cách 1
// let arr = [];
// for (let i = 1; i <= 10; i++) {
//   let number = "";
//   do {
//     number = +prompt(`Enter number ${i} in arr :`);
//   } while (Number.isNaN(number));
//   arr.push(number);
// }
// console.log(arr.sort((a, b) => b - a));

//cách 2
// let arr = [];
// for (let i = 1; i <= 10; i++) {
//   let number = "";
//   do {
//     number = +prompt(`Enter number ${i} in arr :`);
//   } while (Number.isNaN(number));
//   arr.push(number);
// }
// function sort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let first = [];
//   let mid = [];
//   let last = [];
//   let piot = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > piot) {
//       first.push(arr[i]);
//     } else if (arr[i] < piot) {
//       last.push(arr[i]);
//     } else {
//       mid.push(arr[i]);
//     }
//   }
//   if (first.length > 2) {
//     first = sort(first);
//   } else {
//     if (first.length == 2) {
//       if (first[0] < first[1]) {
//         let tmp = first[0];
//         first[0] = first[1];
//         first[1] = tmp;
//       }
//     }
//   }

//   if (last.length > 2) {
//     last = sort(last);
//   } else {
//     if (last.length == 2) {
//       if (last[0] < last[1]) {
//         let tmp = last[0];
//         last[0] = last[1];
//         last[1] = tmp;
//       }
//     }
//   }

//   let newArr = first.concat(mid, last);
//   return newArr;
// }
// console.log(sort(arr));

// bài 9

let a = [];
for (let i = 1; i <= 10; i++) {
  let number = "";
  do {
    number = +prompt(`Enter number ${i} in a :`);
  } while (Number.isNaN(number));
  a.push(number);
}

let b = [];
for (let i = 1; i <= 10; i++) {
  let number = "";
  do {
    number = +prompt(`Enter number ${i} in b :`);
  } while (Number.isNaN(number));
  b.push(number);
}
let c = [];
for (let i = 0; i < a.length; i++) {
  c.push(a[i]);
  c.push(b[i]);
}
console.log(c);
