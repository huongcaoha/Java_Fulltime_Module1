// bài 1

// function searchNumberSmall() {
//   let input1 = "";
//   let input2 = "";
//   let input3 = "";
//   do {
//     input1 = +prompt("Enter number1 :");
//   } while (Number.isNaN(input1));

//   do {
//     input2 = +prompt("Enter number2 :");
//   } while (Number.isNaN(input2));

//   do {
//     input3 = +prompt("Enter number3 :");
//   } while (Number.isNaN(input3));

//   let numberSmall =
//     input1 < input2
//       ? input1 < input3
//         ? input1
//         : input3
//       : input2 < input3
//       ? input2
//       : input3;
//   return alert(` number smallest is ${numberSmall}`);
// }
// searchNumberSmall();

// bài 2

// function checkPrime(number) {
//   if (Number.isNaN(number)) {
//     return alert("Input invalid");
//   } else {
//     let check = true;
//     for (let i = 2; i < Math.sqrt(number); i++) {
//       if (number % i == 0) {
//         check = false;
//         break;
//       }
//     }
//     if (check) {
//       return alert(` ${number} is prime`);
//     } else {
//       return alert(` ${number} not is prime`);
//     }
//   }
// }

// bài 3
// function checkSumEqual10(arr) {
//   let rs = [];
//   let numberCurrent = 0;
//   for (let i = 0; i < arr.length; i++) {
//     numberCurrent = arr[i];
//     let newArr = [];
//     newArr.push(arr[i]);
//     for (let j = 0; j < arr.length; j++) {
//       if (numberCurrent + arr[j] === 10) {
//         newArr.push(arr[j]);
//         rs.push(newArr);
//         break;
//       }
//     }
//   }
//   return rs;
// }
// console.log(checkSumEqual10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// bài 4

// function countWord() {
//   let input = prompt("Enter a string :").split("");
//   let newArr = [...new Set(input)];
//   for (let i = 0; i < newArr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < input.length; j++) {
//       if (newArr[i] == input[j]) {
//         count++;
//       }
//     }
//     console.log(` ký tự ${newArr[i]} xuất hiện ${count} lần`);
//   }
// }
// countWord();

// bài 5

// function factorial(number) {
//   let sum = 1;
//   if (Number.isNaN(number)) {
//     return alert("input invalid");
//   } else {
//     for (let i = 2; i <= number; i++) {
//       sum *= i;
//     }
//   }
//   return sum;
// }
// console.log(factorial(5));

// bài 6

// function sort(arr) {
//   let first = [];
//   let mid = [];
//   let last = [];
//   let piot = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > piot) {
//       last.push(arr[i]);
//     } else if (arr[i] < piot) {
//       first.push(arr[i]);
//     } else {
//       mid.push(arr[i]);
//     }
//   }
//   if (first.length > 2) {
//     first = sort(first);
//   } else {
//     if (first.length == 2) {
//       if (first[0] > first[1]) {
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
//       if (last[0] > last[1]) {
//         let tmp = last[0];
//         last[0] = last[1];
//         last[1] = tmp;
//       }
//     }
//   }
//   return first.concat(mid, last);
// }
// console.log(sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

// bài 7

function leapYear(year) {
  if (year % 400 == 0) {
    alert(`${year} is leap year`);
  } else if (year % 4 == 0 && year % 100 != 0) {
    alert(`${year} is leap year`);
  } else {
    alert(`${year} not is leap year`);
  }
}
leapYear(2023);
