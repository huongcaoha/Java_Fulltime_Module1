// câu 1
function prime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function isPerfect(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }
  if (sum == n) {
    return true;
  } else {
    return false;
  }
}
// let n = 0;
// do {
//   n = +prompt("Enter n:");
// } while (Number.isNaN(n) || n < 1);
// let primes = [];
// for (let i = 2; i <= n; i++) {
//   if (prime(i)) {
//     primes.push(i);
//   }
// }
// alert(primes);

// câu 2
// let count = 0;
// let n = 0;
// let arrPrime = [];
// do {
//   n = +prompt("Enter n:");
// } while (Number.isNaN(n) || n < 1);
// for (let i = 2; ; i++) {
//   if (prime(i)) {
//     arrPrime.push(i);
//     count++;
//   }
//   if (count == n) {
//     break;
//   }
// }
// alert(arrPrime);

// câu 3
// let n = 0;
// do {
//   n = +prompt("Enter n ( n > 0)");
// } while (Number.isNaN(n) || n < 0);
// if (isPerfect(n)) {
//   alert(` ${n} là số hoàn hảo `);
// } else if (prime(n)) {
//   alert(` ${n} là số nguyên tố `);
// } else if (n % 2 == 0) {
//   alert(` ${n} là số chẵn `);
// } else {
//   alert(` ${n} là số lẻ `);
// }

// câu 4
// let sum = 0;
// count = 0;
// for (let i = 5; count <= 30; i += 5) {
//   sum += i;
//   count++;
// }
// alert(sum);

//câu 5
// let sum = 1;
// let first = 0;
// let next = 1;
// for (let i = 3; i <= 20; i++) {
//   let rs = first + next;
//   sum += rs;
//   first = next;
//   next = rs;
// }
// alert(sum);

// câu 6
// let width = 0,
//   height = 0;
// do {
//   width = +prompt("Enter width of rectangle :");
// } while (Number.isNaN(width) || width < 0);

// do {
//   height = +prompt("Enter height of rectangle :");
// } while (Number.isNaN(height) || height < 0);
// let rs = "";
// for (let i = 1; i <= height; i++) {
//   for (let j = 1; j <= width; j++) {
//     if (i == 1 || i == height || j == 1 || j == width) {
//       rs += "*";
//     } else {
//       rs += " ";
//     }
//   }
//   rs += "\n";
// }
// console.log(rs);

// câu 7
