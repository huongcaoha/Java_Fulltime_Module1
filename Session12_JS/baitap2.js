// bài 3
// let first = 1 ;
// let second = 1 ;
// let st3 = 2 ;
// console.log(first);
// console.log(second);
// console.log(st3);
// for(let i = 4 ; i <= 20 ; i++){
//     let rs = second + st3 ;
//     if(rs % 5 == 0)
//     console.log(rs);
//     first = second ;
//     second = st3 ;
//     st3 = rs ;
// }

// bài 4
// let first = 1 ;
// let second = 1 ;
// let st3 = 2 ;
// let firstnumberchiahetcho5 ;
// for(let i = 4 ; i <= 20 ; i++){
//     let rs = second + st3 ;
//     if(rs % 5 == 0){
//         firstnumberchiahetcho5 = rs ;
//         break ;
//     }
//     first = second ;
//     second = st3 ;
//     st3 = rs ;
// }
// console.log(`First number chia het cho 5 = ${firstnumberchiahetcho5}`);

// bài 5
// let first = 1 ;
// let second = 1 ;
// let st3 = 2 ;
// let sum = 4 ;
// for(let i = 4 ; i <= 20 ; i++){
//     let rs = second + st3 ;
//     sum += rs
//     first = second ;
//     second = st3 ;
//     st3 = rs ;
// }
// console.log(`Sum = ${sum}`);

// bài 6
// let count = 0 ;
// let first = 1 ;
// let second = 1 ;
// let st3 = 2 ;
// let sumchiahetcho7 = 0 ;
// for(let i = 4 ; ; i++){
//     let rs = second + st3 ;
//     if(rs % 7 == 0){
//         sumchiahetcho7 += rs ;
//         count++ ;
//     }
//     if(count == 30){
//         break;
//     }
//     first = second ;
//     second = st3 ;
//     st3 = rs ;
// }
// console.log(`Sum = ${sumchiahetcho7}`);

// bài 7
// for(let i = 1 ; i <= 100 ; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz");
//     }else if (i % 3 == 0){
//         console.log("Fizz");
//     }else if(i % 5 == 0){
//         console.log("Buzz");
//     }else {
//         console.log(i);
//     }
// }

// bài 8
let buttonPlay = document.querySelector(".play");
let buttonReplay = document.querySelector(".replay");
let image1 = document.querySelector(".xucxac1"); 
let image2 = document.querySelector(".xucxac2"); 
let image3 = document.querySelector(".xucxac3"); 

let number1 = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3151323/one-clipart-sm.png";
let number2 = "https://th.bing.com/th/id/OIP.V6KbZ1wWgqnfvUPRGiEX-QHaHa?pid=ImgDet&w=199&h=199&c=7";
let number3 = "https://img.favpng.com/24/16/1/black-and-white-monochrome-photography-png-favpng-1xC1KwdSWaNx4c0WMqKwDn9iD.jpg";
let number4 = "https://th.bing.com/th/id/OIP.SA4FalTxM8AUIddWPHUygAAAAA?pid=ImgDet&w=199&h=199&c=7";
let number5 = "https://th.bing.com/th/id/OIP.y-3Kv8htN2v9B395UVhejQAAAA?pid=ImgDet&w=199&h=199&c=7";
let number6 = "https://e7.pngegg.com/pngimages/1020/759/png-clipart-french-braille-e-arabic-braille-english-braille-others-text-rectangle-thumbnail.png";
let choose ;

let xucxac1 = Math.floor(Math.random()*6)+1 ;
let xucxac2 = Math.floor(Math.random()*6)+1 ;
let xucxac3 = Math.floor(Math.random()*6)+1 ;

buttonPlay.addEventListener("click", function(){
    xucxac1 = Math.floor(Math.random()*4)+3 ;
    xucxac2 = Math.floor(Math.random()*4)+3 ;
    xucxac3 = Math.floor(Math.random()*4)+3 ;
    let sum = xucxac1+ xucxac2 + xucxac3;
    do {
        choose = +prompt("Enter 1 = Tài ; 2 = Xỉu :" );
    }while(choose !== 1 && choose !== 2);
let rs ;
if(sum > 9){
    rs = 1 ;
}else {
    rs = 2 ;
}
if(xucxac1 == 1){
    image1.src = number1 ;
}else if(xucxac1 == 2){
    image1.src = number2 ;
}else if(xucxac1 == 3){
    image1.src = number3 ;
}else if(xucxac1 == 4){
    image1.src = number4 ;
}else if(xucxac1 == 5 ){
    image1.src = number5 ;
}else {
    image1.src = number6 ;
}

if(xucxac2 == 1){
    image2.src = number1 ;
}else if(xucxac2 == 2){
    image2.src = number2 ;
}else if(xucxac2 == 3){
    image2.src = number3 ;
}else if(xucxac2 == 4){
    image2.src = number4 ;
}else if(xucxac2 == 5 ){
    image2.src = number5 ;
}else {
    image2.src = number6 ;
}

if(xucxac3 == 1){
    image3.src = number1 ;
}else if(xucxac3 == 2){
    image3.src = number2 ;
}else if(xucxac3 == 3){
    image3.src = number3 ;
}else if(xucxac3 == 4){
    image3.src = number4 ;
}else if(xucxac3 == 5 ){
    image3.src = number5 ;
}else {
    image3.src = number6 ;
}

if(choose == rs){
    alert("you win");
}else {
    alert("You lose");
}
buttonPlay.style.display = "none";
buttonReplay.style.display = "block"; 
})
buttonReplay.addEventListener("click", function(){
    buttonPlay.style.display = "block";
    buttonReplay.style.display = "none";
    image1.src = "https://banner2.cleanpng.com/20180326/pqq/kisspng-question-mark-dice-presentation-animation-clip-art-question-5ab8a8c816c071.2332142215220512720932.jpg" ;
    image2.src = "https://banner2.cleanpng.com/20180326/pqq/kisspng-question-mark-dice-presentation-animation-clip-art-question-5ab8a8c816c071.2332142215220512720932.jpg" ;
    image3.src = "https://banner2.cleanpng.com/20180326/pqq/kisspng-question-mark-dice-presentation-animation-clip-art-question-5ab8a8c816c071.2332142215220512720932.jpg" ;

})