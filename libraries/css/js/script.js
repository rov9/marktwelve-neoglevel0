const inputs= document.querySelectorAll('.angle-input');
const isTriangleBtn=document.querySelector("#is-triangle-btn");
const outputMessage=document.querySelector("#output");

function isTriangle(){
var angle1= Number(inputs[0].value);
var angle2= Number(inputs[1].value);
var angle3= Number(inputs[2].value);

  if(angle1>0&&angle2>0&&angle3>0)
{
var sum= angle1+angle2+angle3;
if(sum===180)
{
  outputMessage.innerText="The angles form a triangle!"
  }
else{
outputMessage.innerText="The angles do not form a triangle!"
}
}
else{
  outputMessage.innerText="Enter valid input!";
}
}
isTriangleBtn.addEventListener('click',isTriangle)