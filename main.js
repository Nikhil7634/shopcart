const change = document.querySelectorAll(".heart");

change.forEach((change)=>{
  change.onclick = function(){
    change.classList.toggle("changeColor");
  }
});
