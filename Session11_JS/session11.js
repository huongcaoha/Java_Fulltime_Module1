let arr = [2, 7, 9, 1, 6, 44, 7, 23];
let numberMax = arr[0] , numberMin = arr[0] , nextMax = arr[0] , numberSth3 =arr[0] , arrPrime = [] , sumEven = 0 , sumOdd = 0;

// // 1 )

// for(let value of arr){
//     if(value % 2 == 0){
//         sumEven += value ;
//     }else {
//         sumOdd += value ;
//     }
// }
//  console.log(`Sum even = ${sumEven}`);
//  console.log(`Sum odd = ${sumOdd}`);

// 2 )
// for (let value of arr ){
//     if(value > numberMax){
//         numberMax = value ;
//     }else if (value < numberMax && value > nextMax ) {
//         nextMax = value ;
//     }else if (value < numberMax && value < nextMax ){
//         numberSth3 = value ;
//     }else if (value < numberMin ){
//         numberMin = value ;
//     }
// }
// console.log(`Number max = ${numberMax}`);
// console.log(`Number min = ${numberMin}`);


// 3 )
// console.log(`Number sth3 = ${numberSth3}`);

// 4 )
// let newArr = [] ;
// for(let value of arr){
//     newArr.unshift(value);
// }
// console.log(" arr after reverse : " + newArr);

// 5 )

// for(let value of arr){
//     let isPrime = true ;
//     for(let i = 2 ; i <= Math.sqrt(value) ; i++){
//         if(value % i == 0){
//             isPrime = false ;
//             break ;
//         }

//     }
//     if(isPrime){
//         arrPrime.push(value);

//     }
//     isPrime = true ;
   
// }
// console.log(`number prime : ${arrPrime}`);

// 6 ) sort

// let tmp ;
// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = i+1 ; j < arr.length ; j++){
//         if(arr[i] > arr[j]){
//             tmp = arr[i] ;
//             arr[i] = arr[j];
//             arr[j] = tmp ;
//         }
//     }
// }
// console.log(`Array after sort is : ${arr}`);

function searchIndex(arr , index){
    arr.sort((a,b) => b-a) ;
    if(index == undefined || index > arr.length || index < 0){
        return arr[0] ;
    }else{
        return arr[index-1];
    }
}
let array = [1,2,3,5,9,8];
console.log(searchIndex(array,
));