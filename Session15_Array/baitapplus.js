// // bài 4
// let input = "huong    cao   ha";
// input = input.replace(/\s+/g, " ");
// let arr = input.split(" ");
// console.log(`Tổng số từ là ${arr.length+1}`);

// bài 10 nâng cao
// let arr = [1, 2, 3, 4, 5, 1, 3, 5, 3];
// let maxLength = 0;
// let rs = [];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (newArr.length == 0) {
//     newArr.push(arr[i]);
//   } else {
//     if (newArr.indexOf(arr[i]) == -1) {
//       newArr.push(arr[i]);
//     } else {
//       if (newArr.length > maxLength) {
//         rs = newArr;
//         maxLength = newArr.length;
//       }
//       newArr = [];
//     }
//   }
// }

// console.log(` Mảng có độ dài lớn nhất là ${maxLength} => ${rs}`);

//bài 2
// let numberA;
// do {
//   numberA = +prompt("Enter number A :");
// } while (Number.isNaN(numberA));

// let numberB;
// do {
//   numberB = +prompt("Enter number B :");
// } while (Number.isNaN(numberB));

// let arr = [];
// if (numberA > numberB) {
//   for (let i = numberB; i <= numberA; i++) {
//     arr.push(i);
//   }
// } else if (numberA < numberB) {
//   for (let i = numberA; i <= numberB; i++) {
//     arr.push(i);
//   }
// } else {
//   arr.push(numberA);
// }
// console.log(arr);
// bài 3
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let rs = arr.filter((number) => number % 2 === 0);
// console.log(rs);

// bài 4
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrEven = arr.filter((number) => number % 2 == 0);
// let arrOdd = arr.filter((number) => number % 2 == 1);
// console.log(arrEven);
// console.log(arrOdd);

// bài 5
// let arr = [15, 3, 6, 7, 54, 15, 3, 8, 9];
// let newArr = [...new Set(arr)];
// let uniqui = newArr[0];
// console.log(newArr);
// console.log(`số độc nhất đầu tiên là là ${uniqui}`);

// bài 6
// let arr = [15, 3, 6, 7, 54, 15, 3, 8, 9];
// arr = arr.sort((a, b) => a - b);
// console.log(arr);

// bài 7
// let arr = prompt("Enter a string : ");
// function findSubString(str){
//     let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   for (j = i + 1; j <= arr.length; j++) {
//     newArr.push(arr.slice(i, j));
//   }
// }
// return newArr ;
// }
// console.log(findSubString(arr));

//bài 8
let arr = [1, 35, 7, 6, 1, 2, 6, 1, 7];
function arrUniqui(arr) {
  return [...new Set(arr)];
}
console.log(arrUniqui(arr));
