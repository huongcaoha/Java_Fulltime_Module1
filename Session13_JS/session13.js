// for (let i = 1; i <= 10; i++) {
//   let red = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   let blue = Math.floor(Math.random() * 256);
//   console.log(
//     `%c huongcaoha ${red} ${green} ${blue}`,
//     `color: rgb(${red},${green},${blue})`
//   );
// }

// let n;
// do {
//   n = +prompt("Enter n :");
// } while (Number.isNaN(n) || n < 0);
// let isPrime = true;
// for (let i = 2; i <= Math.sqrt(n); i++) {
//   if (n % i == 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) {
//   console.log(`${n} là số nguyên tố`);
// } else {
//   console.log(`${n} ko phải số nguyên tố`);
// }

// tìm số hoàn hảo
// function checkPerfectNumber(n) {
//   let sum = 0;
//   for (let i = 1; i < n; i++) {
//     if (n % i == 0) {
//       sum += i;
//     }
//   }
//   if (sum == n) {
//     alert(`${n} là số hoàn hảo`);
//   } else {
//     alert(`${n} ko phải là số hoàn hảo .`);
//   }
// }
// let n = 0;
// do {
//   n = +prompt("Enter n :");
// } while (Number.isNaN(n) || n < 1);
// checkPerfectNumber(n);

let rs = 94;
let n = 0;
do {
  n = +prompt("Enter n (from 1 to 100) :");
  if (n < rs) {
    alert("Too small");
  } else if (n > rs) {
    alert("Too big");
  } else {
    alert("Lucky");
  }
} while (Number.isNaN(n) || n < 0 || n > 100 || n != rs);
