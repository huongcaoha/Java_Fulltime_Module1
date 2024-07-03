// bài 6 
// function calculatorBMI(weight,height){
//     let bmi = weight / (height ** 2);
//     if (bmi < 18) {
//         alert(`Chỉ số BMI là ${bmi} : Underweight`)
//      } else if (bmi < 25.0) {
//         alert(`Chỉ số BMI là ${bmi} : Normal`)
//      } else if (bmi < 30.0) {
//         alert(`Chỉ số BMI là ${bmi} : Overweight`)
//      } else {
//         alert(`Chỉ số BMI là ${bmi} : Obese`)
//      }
// }
// calculatorBMI(71,1.7);

// bài 7
// function getDayOfMonth(){
//     let month ;
// do {
//     month = +prompt("Enter month of year : ");
// }while (isNaN(month) || month < 1 || month > 12);
   
// alert(`Tháng ${month} có ${new Date(2024,month-1, 0).getDate()} ngày .`);
// };

// getDayOfMonth();

// bài 8
// function bai8(){
//     let a , b , operator ;
//     do {
//         a = +prompt("Enter number a :");
//     }while(isNaN(a));

//     do {
//         b = +prompt("Enter number b :");
//     }while(isNaN(b));
//         do {
//             operator = prompt("Enter operator ('+','-','*','/','**') :");
//         }while(!['+','-','*','/','**'].includes(operator))
//     let rs ;
//         switch(operator){
//             case '+' : {
//                rs =a + b ;
//                break;
//             }
//             case '-' : {
//                 rs = a - b ;
//                 break;
//             }
//             case '*' : {
//                 rs = a * b ;
//                 break ;
//             }
//             case '/' : {
//                rs = a / b ;
//                break ;
//             }
//             case '**' : {
//                rs = a ** b ;
//                break;
//             }
//            default : {
//            rs = "Xin mời nhập lại ."
//            }
//         }
//         return rs ;
// }
// alert(bai8());

//bài 10
let month , day ;
do {
    day = +prompt("Enter day of birthday :");
}while(isNaN(day) || day > 31 || day < 1);

do {
    month = +prompt("Enter month of birthday :");
}while(isNaN(month) || month > 12 || month < 1);
let rs ;
switch(month){
    case 1 : {
      rs =  (day < 19)? "Ma kết" : "Bảo Bình" ;
      break;
    }
    case 2 : {
        rs =  (day <= 18)? "Bảo Bình" : "Song Ngư" ;
        break;
      }
      case 3 : {
        rs =  (day <= 20)? "Song Ngư" : "Bạch Dương" ;
        break;
      }
      case 4 : {
        rs =  (day <= 19)? "Bạch Dương" : "Kim Ngưu" ;
        break;
      }
      case 5 : {
        rs =  (day <= 20)? "Kim Ngưu" : "Song Tử" ;
        break;
      }
      case 6 : {
        rs =  (day <= 21 )? "Song Tử" : "Cự Giải" ;
        break;
      }
      case 7 : {
        rs =  (day <= 22 )? "Cự Giải" : "Sư Tử" ;
        break;
      }
      case 8 : {
        rs =  (day <= 22)? "Sư Tử" : "Xử Nữ" ;
        break;
      }
      case 9 : {
        rs =  (day <= 22 )? "Xử Nữ" : "Thiên Bình" ;
        break;
      }
      case 10 : {
        rs =  (day <= 23)? "Thiên Bình" : "Hổ Cáp" ;
        break;
      }
      case 11 : {
        rs =  (day <= 21)? "Hổ Cáp" : "Nhân Mã" ;
        break;
      }
      case 12 : {
        rs =  (day <= 21 )? "Nhân Mã" : "Ma Kết" ;
        break;
      }
}
alert(rs);