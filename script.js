let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled=false);

function disableOptions(questionName){
  let options = document.getElementsByName (questionName);
  options.forEach(option => {
      if(!option.checked){
          option.disabled = true;
      }
  });
}
function playSound(){
  let clickSound = document.getElementById('selecionasom');
  clickSound.play();
}
function submitQuiz(){

  let correctAnswers = {
      q1 : "A",
      q2 : "B",
      q3 : "D",
      q4 : "B",
      q5 : "C",
      q6 : "A",
      q7 : "D",
      q8 : "A",
      q9 : "D",
      q10 : "B",
  };
  let form = document.getElementById('quiz-form');
  let score = 0;

  for (let key in correctAnswers){
      let userAnswer = form.elements[key].value;
      if(userAnswer === correctAnswers[key]){
          score++;
      }
  }
  let result = document.getElementById('result');
  result.innerHTML = `Você acertou ${score} de 10 perguntas.`

  if(score === 10){
      let sucessSound = document.getElementById("venceusom");
      sucessSound.play();
  }else{
      let failSound = document.getElementById("perdeusom");
      failSound.play();
  }
  document.getElementById('enviar').disabled=true;
  document.getElementById('recomeco').disabled=false;
}

function recomecar(){
  let form = document.getElementById('quiz-form');
  form.reset();
  let options = document.querySelectorAll('input[type="radio"]');
  options.forEach(option => option.disabled=false);
  score = 0;
  result.innerHTML = "";
  document.getElementById('enviar').disabled=false;
  document.getElementById('recomeco').disabled=true;
};

 
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {

  slides.forEach(slide => slide.classList.remove('active'));
  
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  
  slides[currentSlide].classList.add('active');
}

function changeSlide(step) {
  showSlide(currentSlide + step);
}


showSlide(currentSlide);

  