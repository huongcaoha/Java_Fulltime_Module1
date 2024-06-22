var div1 = document.querySelector("#div1");
var div2 = document.querySelector("#div2");
var div3 = document.querySelector("#div3");

var divItem1 = document.querySelector(".div-item1"); 
var divItem2 = document.querySelector(".div-item2"); 
var divItem3 = document.querySelector(".div-item3"); 

div1.onclick = function (){
    var up = div1.querySelector(".up");
    var down = div1.querySelector(".down") ;
    if(divItem1.style.display == "none"){
        divItem1.style.display = "block" ;
        up.style.display = "block";
        down.style.display = "none" ;
        this.style.backgroundColor = "rgb(232, 242, 255)";
    }else {
        divItem1.style.display = "none"
        up.style.display = "none";
        down.style.display = "block" ;
        this.style.backgroundColor = "white";
    }
}

div2.onclick = function (){
    var up = div2.querySelector(".up");
    var down = div2.querySelector(".down") ;
    if(divItem2.style.display == "none"){
        divItem2.style.display = "block" ;
        up.style.display = "block";
        down.style.display = "none" ;
        this.style.backgroundColor = "rgb(232, 242, 255)";
    }else {
        divItem2.style.display = "none"
        up.style.display = "none";
        down.style.display = "block" ;
        this.style.backgroundColor = "white";
    }
}
div3.onclick = function (){
    var up = div3.querySelector(".up");
    var down = div3.querySelector(".down") ;
    if(divItem3.style.display == "none"){
        divItem3.style.display = "block" ;
        up.style.display = "block";
        down.style.display = "none" ;
        this.style.backgroundColor = "rgb(232, 242, 255)";
    }else {
        divItem3.style.display = "none"
        up.style.display = "none";
        down.style.display = "block" ;
        this.style.backgroundColor = "white";
    }
}
