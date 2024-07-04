// bài 1
// let first = 1 ;
// let second = 1 ;
// let st3 = 2 ;
// console.log(first);
// console.log(second);
// console.log(st3);
// for(let i = 4 ; i <= 20 ; i++){
//     let rs = second + st3 ;
//     console.log(rs);
//     first = second ;
//     second = st3 ;
//     st3 = rs ;
// }

// bài 2

// let n = 0 ;
// do {
//     n = +prompt("Enter n :");
// }while(Number.isNaN(n) || n < 1);
// let factorial = 1 ;
// for(let i = 2 ; i <= n ; i++){
//     factorial *= i ;
// };
// console.log(`factorial of ${n} = ${factorial}`);

// bài 3

// let length = 5;
// let rs1 = "";
// for(let i = 1; i <= length; i++){
//     for(let j = 1; j <= i; j++){
//       rs1 += "*" ;
//     }
//     rs1 += "\n";
// }
// console.log(rs1);

// let rs2 = "";
// for(let i = length; i >= 1; i--){
//     for(let j = 1; j <= i; j++){
//       rs2 += "*" ;
//     }
//     rs2 += "\n";
// }
// console.log(rs2);

// let rs3 = "";
// for(let i = 1; i <= length; i++){
//     for(let k = length-i ; k >= 1 ; k--){
//         rs3 += " " ;
//     }
//     for(let j = 1; j <= i; j++){
//       rs3 += "*" ;
//     }
//     rs3 += "\n";
// }
// console.log(rs3);

// let rs4 = "";
// for(let i = length; i >= 1; i--){
//     for(let k = length-i ; k >= 1 ; k--){
//         rs4 += " " ;
//     }
//     for(let j = 1; j <= i; j++){
//       rs4 += "*" ;
//     }
//     rs4 += "\n";
// }
// console.log(rs4);

// bài 4
// let rs5 = "" ;
// let width = 40 ;
// let height = 10 ;
// for(let i = 1 ; i <= height ; i++){
//     for(let j = 1 ; j <= width ; j++){
//         if(i == 1 || i == height || j == 1 || j == width){
//             rs5 += "*";
//         }else {
//             rs5 += " " ;
//         }
//     }
//     rs5 += "\n";
// }
// console.log(rs5);

// bài 5
let size = 5;
let rs6 = "";
for (let i = size; i >= 1; i--) {
  // Vẽ nửa trái tim (phần trên)
  for (let j = 1; j <= size - i; j++) {
    rs6+= "  ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    rs6+="* ";
  }
  rs6+="\n";
}

for (let i = 1; i <= size; i++) {
  // Vẽ nửa trái tim (phần dưới)
  for (let j = 1; j <= i; j++) {
   rs6+="  ";
  }
  for (let j = 1; j <= 2 * (size - i) - 1; j++) {
   rs6+="* ";
  }
  rs6+="\n";
}
console.log(rs6);

// bài 6
// let month = 0 ;
// let monney = 0 ;
// let interestRateOfMonth = 1/100 ;

// do {
//     month = +prompt("Nhập số tháng vay :");
// }while(Number.isNaN(month) || month < 0);

// do {
//     monney = +prompt("Nhập số tiền vay :");
// }while(Number.isNaN(monney) || monney < 0);

// let totalMoney = monney ;
// for(let i = 1 ; i <= month ; i++){
//     totalMoney += (totalMoney * interestRateOfMonth);
// }
// totalMoney = Math.floor(totalMoney);
// console.log(`Vậy số tiền phải trả sau ${month} là ${totalMoney}`);
