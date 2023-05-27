const change = document.querySelectorAll(".heart");

change.forEach((change)=>{
  change.onclick = function(){
    change.classList.toggle("changeColor");
  }
});


var menubtn = document.querySelector(".menubtn");
var mobNav = document.querySelector(".mob-nav");

mobNav.style.maxWidth = "0px";

menubtn.onclick = function(){
  if(mobNav.style.maxWidth == "0px"){
    mobNav.style.maxWidth = "100%";
  }
  else{
    mobNav.style.maxWidth = "0px";
  }
}

