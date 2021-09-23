var inputHeight=document.querySelector("#input-height");
var inputBase=document.querySelector("#input-base");
var btnSubmit=document.querySelector(".btn-submit");
var outputMesage=document.querySelector(".output");



function calculateArea()
{
var base=Number(inputBase.value);
var height=Number(inputHeight.value);
var area=(0.5*base*height).toFixed(2);
outputMesage.innerText="The area of triangle is "+ area;
}

btnSubmit.addEventListener("click",calculateArea)