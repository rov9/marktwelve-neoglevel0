const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#btn-submit");
const outputMessage = document.querySelector(".output");

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  var base = Number(sides[0].value);
  var height= Number(sides[1].value);
  if(base>0 && height>0)
  {
  const sumOfSquares = calculateSumOfSquare(base,height);
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares).toFixed(2);
  outputMessage.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
  }
else{
outputMessage.innerText ="Please enter valid values!";
}
}

calculateBtn.addEventListener("click", calculateHypotenuse);
