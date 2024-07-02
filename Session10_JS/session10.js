let arr = [1,2,100,4,5,6,7,35,16];
let max = 0 ;
let nextMax = 0 ;
for(let i = 0 ; i < arr.length ; i++){
    if(max < arr[i]){
        max = arr[i];
    } 
     else if(arr[i] > nextMax && arr[i] < max){
        nextMax = arr[i];
    }
}


console.log("max : " + max)
console.log("nextMax : " + nextMax);