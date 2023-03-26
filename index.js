let list = document.querySelectorAll(".buttonRow button");
let inputTab = document.querySelector(".inputTab");
let string = "";


Array.from(list).forEach((item)=>{item.addEventListener('click',(e)=>{

  if(e.target.innerHTML=="="){
    string=eval(string);
    inputTab.value=string;
  }
  else if (e.target.innerHTML=="AC") {
    string = "";
    inputTab.value=string;
  }
  else{
    string+=e.target.innerHTML;
    inputTab.value=string;
  }

})});
