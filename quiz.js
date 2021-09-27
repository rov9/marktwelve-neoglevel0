const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector(".btn-submit");
const outputMessage = document.querySelector(".output");

const correctAnswers = ["obtuse","scalene triangle","Isosceles triangle","12, 16, 20","Equilateral triangle","100°","30°","a + b + c","Hypotenuse","45°"];

function calculateScore(event) {
  event.preventDefault();

  const formResults = new FormData(quizform);
  let score = 0;
  let index = 0;
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  outputMessage.innerText = "The score is " + score;
  // console.log(score);
}

// submitBtn.addEventListener("click", calculateScore);
quizform.addEventListener("submit", calculateScore);