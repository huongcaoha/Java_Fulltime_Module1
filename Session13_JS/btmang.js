// bài tập 1
// let myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
// let rs = myColor.join(" ");
// console.log(rs);
// console.log(typeof rs);

// bài 2
// let n = "";
// do {
//   n = +prompt("Enter string number :");
// } while (Number.isNaN(n));

// arr = n.toString().split("");
// let rs = "";
// for (let i = 0; i < arr.length; i++) {
//   rs += arr[i].toString();
//   if (parseInt(arr[i]) % 2 == 0 && parseInt(arr[i + 1]) % 2 == 0) {
//     rs += "-";
//   }
// }
// alert(rs);

// câu 3
// let string = prompt("Enter string :").trim();
// let rs = "";
// for (let char of string) {
//   if (Number.isInteger(char)) {
//     rs += char;
//   } else if (char === char.toUpperCase()) {
//     rs += char.toLowerCase();
//   } else {
//     rs += char.toUpperCase();
//   }
// }
// alert(rs);

// đảo ngược chuỗi
let arr = [-3, -5, 5, 1, 2, 4];
// let rs = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   rs.push(arr[i]);
// }
// console.log(rs);
// let min = arr[0];
// let newArr = [];
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i; j < arr.length; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let tmp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = tmp;
//     }
//   }
// }
// function quickSort(arr) {
/**
 * Sắp xếp mảng arr bằng thuật toán Quicksort.
 */
// function quickSort(arr) {
/**
 * Sắp xếp mảng arr bằng thuật toán Quicksort.
 */
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const pivot = arr[Math.floor(arr.length / 2)];
//   const left = [];
//   const right = [];
//   const middle = [];

//   for (const item of arr) {
//     if (item < pivot) {
//       left.push(item);
//     } else if (item > pivot) {
//       right.push(item);
//     } else {
//       middle.push(item);
//     }
//   }

//   return [...quickSort(left), ...middle, ...quickSort(right)];
// }

// const unsortedArray = [5, 2, 9, 1, 7];
// const sortedArray = quickSort(unsortedArray);
// console.log(sortedArray);

function sort(arr) {
  let first = [];
  let mid = [];
  let last = [];
  let piot = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > piot) {
      last.push(arr[i]);
    } else if (arr[i] < piot) {
      first.push(arr[i]);
    } else {
      mid.push(arr[i]);
    }
  }

  if (first.length > 2) {
    first = sort(first);
  } else {
    if (first.length == 2) {
      if (first[0] > first[1]) {
        let tmp = first[0];
        first[0] = first[1];
        first[1] = tmp;
      }
    }
  }

  if (last.length > 2) {
    last = sort(last);
  } else {
    if (last.length == 2) {
      if (last[0] > last[1]) {
        let tmp = last[0];
        last[0] = last[1];
        last[1] = tmp;
      }
    }
  }

  return first.concat(mid).concat(last);
}
let array = [13, 1, 9, 6, 7, 85, 96, 2, 5, 4];
console.log(sort(array));
