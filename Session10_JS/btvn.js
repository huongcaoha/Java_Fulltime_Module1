//bài tập 5
// let math ;
// let physics ;
// let chemistry ;
// do {
//     math = + prompt("Enter math : ")
// }while(isNaN(math));

// do {
//     physics = + prompt("Enter physics : ")
// }while(isNaN(physics));

// do {
//     chemistry = + prompt("Enter chemistry : ")
// }while(isNaN(chemistry));

// let average = math + physics + chemistry ;
// alert(`Average is : ${average}`);

// bài tập 6

// const dolar = 25000 ;
// let numberDolar ;
// do {
//     numberDolar = + prompt("Enter number dolar :");
// }while(isNaN(numberDolar));
// let converseVnd = numberDolar * dolar ;
// alert(`${numberDolar} = ${converseVnd}VNĐ`);

// bài tập  7
// let a , b , c ;
// do {
//     a = + prompt("Enter value a : ");
// }while(isNaN(a));

// do {
//     b = + prompt("Enter value b : ");
// }while(isNaN(b));

// do {
//     c = + prompt("Enter value c : ");
// }while(isNaN(c));

// let maxNumber = (a > b) ? ((a > c)? a : c) : ((b > c)? b : c) ;
// alert(`Max number is : ${maxNumber}`);

// bài tập 8
// let length ;
// do {
//     length = +prompt("Enter length of arr :");
// }while(isNaN(length));
// let arr = [length];
// for(let i = 0 ; i < length ; i++){
//     do {
//         arr[i] = +prompt(`Enter value number ${i} :`) ;
//     }while(isNaN(arr[i]))
// }
// let maxNumber = arr[0];
// for(let i = 1 ; i < length ; i++){
//     maxNumber = (maxNumber > arr[i])? maxNumber : arr[i];
// }
// alert(`Max number in ${length} number is : ${maxNumber}`);

//bài tập 9
// let point ;
// do {
//     point = + prompt("Enter point :");
// }while(isNaN(point));
// if(point >= 75){
//     alert("Điểm của bạn loại A");
// }else if (point >= 60 && point < 75){
//     alert("Điểm của bạn loại B");
// }
// else if (point >= 45 && point < 60){
//     alert("Điểm của bạn loại C");
// }
// else if (point >= 35 && point < 45){
//     alert("Điểm của bạn loại D");
// }
// else if (point < 35){
//     alert("Điểm của bạn loại E");
// }

// bài tập 10 
// console.log("wellcome to Rikkei Academy") ;
// prompt("mời bạn nhập số tuổi của mình");
// alert("Chào mừng bạn đến với học viện Rikkei Academy");
// window.confirm("bạn đã đủ 18 tuổi chưa!",);

// bài tập 11
//  let biology , physics ,chemistry ;
//  do {
//     biology = +prompt("Enter biology :");
//  }while(isNaN(biology));

//  do {
//     physics = +prompt("Enter physics :");
//  }while(isNaN(physics));

//  do {
//     chemistry = +prompt("Enter chemistry :");
//  }while(isNaN(chemistry));
//  let sum = biology + physics + chemistry  ;
//  let avg = sum / 3 ;
//  alert (`sum is : ${sum}`);
//  alert (`avg is : ${avg}`) ;

//  let degC ;
//  do {
//     degC = +prompt("Enter deg C :");
//  }while(isNaN(degC));

//  let degF = (degC * 9/5)+32 ;
//  alert(`Deg F = ${degF}`);

//  function perimeter(radius){
//     return 2*Math.PI*radius ;
//  }

//  function area(radius){
//     return (radius*2)*Math.PI;
//  }

 // Bài tập 12
 // 1 )
 let firstName = "Academy" ;
 let lastName = "Rikkei" ;
 let fullName = "Rikkei Academy" ;

 // 2 )
 // kiểu dữ liệu Number
 let number = 5 ;

 // kiểu dữ liệu String
 let string = "huongcaoha" ;

 // kiểu dữ liệu NaN
 let nan = NaN ;

 // kiểu dữ liệu undefind
 let undefind = undefined ;

 // kiểu dữ liệu null 
 let nul = null ;

 // kiểu dữ liệu symbol
 let symbol = Symbol ;

 // 5 ) 
 function perimeterSquare(slideA , slideB){
    return (slideA + slideB) * 2 ;
 }

 function areaSquare(slideA ,slideB){
    return slideA * slideB ;
 }
 // Toán tử "==" chỉ dùng để so sánh giá trị .
 // Toán tử "===" dùng để so sánh cả giá trị và kiểu dữ liệu

 function squarerootequation2(a,b,c){
    let delta= b**2 -4*a*b*c;
    console.log(`Delta = ${delta}`);
    if(delta < 0){
        console.log("phương trình vô nghiệm");
        return ;
    }
    let rs1 = (-b + Math.sqrt(delta)) / (2*a) ;
    let rs2 = (-b - Math.sqrt(delta)) / (2*a) ;
    console.log(`Nghiệm 1 = ${rs1}`);
    console.log(`Nghiệm 2 = ${rs2}`);
   
 }
squarerootequation2(2,1,-3);

let a,b,c ;
do {
    a = +prompt("Enter slide A of triang :");
}while(isNaN(a));

do {
    b = +prompt("Enter slide B of triang :");
}while(isNaN(b));

do {
    c = +prompt("Enter slide C of triang :");
}while(isNaN(c));

function checkTriang(a,b,c){
    if(a == 0 && b == 0 && c == 0){
        console.log("Đây ko phải hình tam giác !")
        return ;
    }else if(a+b < c || a+c < b || b+c < a ){
        console.log("Đây ko phải hình tam giác !")
        return ;
    }
    if(a == b || a == c || b == c){
        console.log("Đây là tam giác cân ");
    }else if((a**2 + b**2) == c**2){
        console.log("Đây là tam giác vuông");
    }else {
        console.log("Đây là tam giác bình thường");
    }
}
checkTriang(a,b,c);

