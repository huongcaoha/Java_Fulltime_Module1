// let root = prompt("Enter a string :").split("");

// let rs = [];
// for (let i = 0; i < root.length; i++) {
//   let newArr = [];
//   for (let j = i; j < root.length; j++) {
//     newArr.push(root[j]);
//     rs.push(newArr.join(""));
//   }
// }

// console.log(rs);

function calculaterSum() {
  let a, b;
  do {
    a = +prompt("Enter a :");
  } while (Number.isNaN(a));

  do {
    b = +prompt("Enter b :");
  } while (Number.isNaN(b));
  return a + b;
}
console.log(calculaterSum());
