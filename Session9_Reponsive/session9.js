var zalo = document.querySelector("#zalo");
var message = document.querySelector("#message");
var textZalo = document.querySelector(".text-zalo");
var textmessage = document.querySelector(".text-message");
zalo.addEventListener("mouseenter",function(){
    textZalo.style.display = "block" ;
   
    
})
zalo.addEventListener("mouseleave",function(){
    textZalo.style.display = "none";
})

message.addEventListener("mouseenter",function(){
    textmessage.style.display = "block";
   
})

message.addEventListener("mouseleave",function(){
    textmessage.style.display = "none" ;
})