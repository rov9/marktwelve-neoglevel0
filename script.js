const inputs= document.querySelectorAll('.angle-input');
const isTriangleBtn=document.querySelector("#is-triangle-btn");
const outputMessage=document.querySelector("#output");
var angle1= Number(inputs[0].value);
var angle2= Number(inputs[1].value);
var angle3= Number(inputs[2].value); 
function isTriangle(){
var sum= Number(inputs[0].value)+Number(inputs[1].value)+Number(inputs[2].value);
if(sum===180)
{
  outputMessage.innerText="The angles form a triangle!"
  }
else{
outputMessage.innerText="The angles do not form a triangle!"
}
}

isTriangleBtn.addEventListener('click',isTriangle)