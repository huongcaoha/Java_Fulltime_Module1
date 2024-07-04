// bài 1
// let a , b ;
// do {
//     a = +prompt("Enter a :")
// }while(Number.isNaN(a));

// do {
//     b = +prompt("Enter b :")
// }while(Number.isNaN(b));

// if(a % b == 0){
//     alert("a chia hết cho b");
// }else {
//     alert("a ko chia hết cho b");
// }

// bài 2
// let age ;
// do {
//     age = +prompt("Enter your age") ;
// }while(Number.isNaN(age) || age < 0);
// if(age > 16){
//     alert("Bạn đã đủ tuổi vào học lợp 10");
// }else {
//    alert( "Bạn chưa đủ tuổi vào học lớp 10");
// };

// bài 4
// let numberA , numberB , numberC ;
// do {
//     numberA = +prompt("Enter number A :");
// }while(Number.isNaN(numberA));

// do {
//     numberB = +prompt("Enter number B :");
// }while(Number.isNaN(numberB));

// do {
//     numberC = +prompt("Enter number C :");
// }while(Number.isNaN(numberC));

// let numberMax = (numberA > numberB)? ((numberA > numberC)? numberA : numberC) : ((numberB > numberC)? numberB : numberC);
// alert(`Max number is ${numberMax}`);

// bài 5
let pointTest , pointMid , pointEnd ;
do {
    pointTest = +prompt("Enter point test :");
}while(Number.isNaN(pointTest) || pointTest < 0 || pointTest > 10);

do {
    pointMid = +prompt("Enter point mid :");
}while(Number.isNaN(pointMid) || pointMid < 0 || pointMid > 10);

do {
    pointEnd = +prompt("Enter point end :");
}while(Number.isNaN(pointEnd) || pointEnd < 0 || pointEnd > 10);

let pointAvg = (pointTest + pointMid + pointEnd) / 3 ;
if(pointAvg >= 8){
    alert("Bạn xếp loại giỏi");
   
}else if (pointAvg > 5 && pointAvg <= 8){
    alert("Bạn xếp loại Khá");
}else {
    alert("Bạn xếp loại Trung Bình");
}
