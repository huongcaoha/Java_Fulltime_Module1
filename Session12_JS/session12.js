// let month ;
// do {
//     month = +prompt("Enter month of year : (1-12)");
//     if(Number.isNaN(month) || month < 1 || month > 12){
//         alert("Please enter from 1 to 12 !");
//     }
// }while(Number.isNaN(month) || month < 1 || month > 12);
// if(month >= 1 && month <= 3){
//     alert("Mùa xuân (Quý I)");
// }else if (month >= 4 && month <= 6) {
//     alert("Mùa hè (Quý II)");
// }else if (month >= 7 && month <= 9){
//     alert("Mùa thu (Quý III)")
// }else {
//     alert("Mùa đông (Quý IV)");
// }

let n , A = 0 , B = 0 , C = 0 ;
do {
    n = +prompt("Enter n :");
}while(Number.isNaN(n));

for(let i = 1 ; i <= n ; i++){
    A += i ;
}

for(let i = 1 ; i <= n ; i++){
    B += i**2 ;
}

C = 1 - (1/n);

console.log(`A = ${A}`);
console.log(`B = ${B}`);
console.log(`C = ${C}`);