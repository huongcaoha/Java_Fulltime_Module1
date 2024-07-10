// bài 1
// function alertMessage() {
//   return alert("Xin chào ");
// }

// bài 2
// function upOne(number) {
//   return number++;
// }

//bài 3

// function calSum() {
//   let a, b;
//   do {
//     a = +prompt("Enter number a :");
//   } while (Number.isNaN(a));

//   do {
//     b = +prompt("Enter number b :");
//   } while (Number.isNaN(b));

//   if (a > b) {
//     return alert("số thứ nhất lớn hơn tham số thứ hai");
//   } else {
//     return a + b;
//   }
// }

// bài 4

// function addNumbers() {
//   firstNum = 4;
//   secondNum = 8;
//   result = firstNum + secondNum;
//   return result;
// }
// let result = 0;
// alert(`result = ${result}`);
// result = addNumbers();

// alert(`result = ${result}`);

// bài 5

function searchStar(string) {
  let arr1 = [
    "Polaris",
    "Aldebaran",
    "Deneb",
    "Vega",
    "Altair",
    "Dubhe",
    "Regulus",
  ];
  let arr2 = [
    "Ursa Minor",
    "Tarurus",
    "Cygnus",
    "Lyra",
    "Aquila",
    "Ursa Major",
    "Leo",
  ];
  if (arr1.indexOf(string) != -1) {
    return arr2[arr1.indexOf(string)];
  } else {
    return alert("not found");
  }
}
let input = prompt("Enter a string :");
console.log(searchStar(input));
