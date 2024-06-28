var listContent = document.querySelectorAll(".content");
var lengthContent = listContent.length ;
var index = 0 ;
var pre = document.querySelector(".pre");
var next = document.querySelector(".next");
var listLabel = document.querySelectorAll(".label")
listLabel[index].style.color = "red";
function preClick(){
    for(var element of listContent){
        element.style.display = "none" ;
    }
    if(index == 0){
        index = lengthContent - 1 ;
    }else {
        index -= 1 ;
    }
    for(var label of listLabel){
        label.style.color = "black";
    }
    listContent[index].style.display = "block" ;
    listLabel[index].style.color = "red";
}

function nextClick(){
    for(var element of listContent){
        element.style.display = "none" ;
    }
    if(index == lengthContent -1){
        index = 0 ;
    }else {
        index += 1 ;
    }
    for(var label of listLabel){
        label.style.color = "black";
    }
    listContent[index].style.display = "block" ;
    listLabel[index].style.color = "red";
}

pre.addEventListener("click", preClick);
next.addEventListener("click", nextClick);

for(var label of listLabel){
    label.addEventListener("click",function(e){
        for(var label of listLabel){
            label.style.color = "black";
        }
        this.style.color = "red";
        var idContent = this.getAttribute("for");
        var content = document.getElementById(`${idContent}`);
        for(var element of listContent){
            element.style.display = "none" ;
        }
        content.style.display = "block"
        
    });
}