var listSlide = document.querySelectorAll(".slide");
var indexSlide = 0;
var lengthSlide = listSlide.length;

var changeSlide = function() {
    for(var slide of listSlide){
        slide.style.display = "none";
    }
  for (var i = 0; i < lengthSlide; i++) {
    if (i === indexSlide) {
      listSlide[i].style.display = "block";
    } else {
      listSlide[i].style.display = "none";
    }
  }
  indexSlide = (indexSlide + 1) === lengthSlide ? 0 : indexSlide + 1;
};
changeSlide();
setInterval(changeSlide, 3000);

var logo = document.querySelector(".logo");
function aleart(e){
    alert(e.target);
}
logo.addEventListener("click",aleart);
setTimeout(function(){
    logo.removeEventListener("click",aleart);
},3000)