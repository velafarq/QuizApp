'use strict'

// quiz data //
const data = [
  {

  question: 'What is biltong?',
  answer1: 'My Uncle Bill’s tongs',
  answer2: 'A tart dried apricot that goes well with white wine',
  answer3: "Meat covered in spices and air dried until it is mouth-wateringly delicious",
  answer4: 'An event of really large tractors',
  correctAnswer: "Meat covered in spices and air dried until it is mouth-wateringly delicious",

},
{

  question: 'What does it mean when a South African says, "I will do it now now"?',
  answer1: 'They are in a huge rush to get it done and will do it right this second',
  answer2: 'They will do it tomorrow',
  answer3: 'They don’t really know when they will do it, but it will be sometime soon, for sure',
  answer4: 'They are currently doing it',
  correctAnswer: 'They don’t really know when they will do it, but it will be sometime soon, for sure',
},
{
  question: 'How many official languages does South Africa have?',
  answer1: 2,
  answer2: 5,
  answer3: 8,
  answer4: 11,
  correctAnswer: 11,
},
{

  question: 'What colors are represented in the South African flag?',
  answer1: 'Red, white, green, yellow, black, and blue',
  answer2: 'Red, blue, and white',
  answer3: 'Red, green, yellow, black',
  answer4: 'South Africa doesn’t have an official flag',
  correctAnswer: 'Red, white, green, yellow, black, and blue',
},
{

  question: 'What is the capital of South Africa?',
  answer1: 'Cape Town',
  answer2: 'Johannesburg',
  answer3: 'Pretoria and Durban',
  answer4: 'Cape Town, Pretoria and Bloemfontein',
  correctAnswer: 'Cape Town, Pretoria and Bloemfontein',
},
{

  question: 'Who is the president of South Africa?',
  answer1: 'Jacob Zuma',
  answer2: 'Cyril Ramaphosa',
  answer3: 'Nelson Mandela',
  answer4: 'Trevor Noah',
  correctAnswer: 'Cyril Ramaphosa',
},
{

  question: 'What is a koeksister?',
  answer1: 'An affectionate term for sisters that are twins',
  answer2: 'A traditional Afrikaans fried dough that has been plaited and infused in honey',
  answer3: 'A special type of sausage that can, without a doubt, be found at every food gathering',
  answer4: 'A household name for a witch that scares little children',
  correctAnswer: 'A traditional Afrikaans fried dough that has been plaited and infused in honey',
},
{

  question: 'What is Mrs Balls’ speciality?',
  answer1: 'Chutney',
  answer2: 'Lemon curd',
  answer3: 'Applesauce',
  answer4: 'Chocolate milk',
  correctAnswer: 'Chutney',
},
{

  question: 'What is the national flower of South Africa?',
  answer1: 'Violet',
  answer2: 'Lilly',
  answer3: 'Protea',
  answer4: 'Rooibos',
  correctAnswer: 'Protea',
},
{

  question: 'What is a braai?',
  answer1: 'A very hot day',
  answer2: 'A type of South African wheat beer',
  answer3: 'A term South Africans use when they are going camping',
  answer4: 'A social gathering that revolves around grilling meat',
  correctAnswer: 'A social gathering that revolves around grilling meat',
},
];

//declaring variables //

const beginButton = document.getElementById('begin-button'),
      mainSection = document.getElementById('main'),
      titleElements = document.getElementById('title'),
      mainBody = document.getElementById('body'),
      form = document.getElementById('questionForm'),
      questionNumber = document.getElementById('question-number');

//initial values of questionNum and score//

let questionNum = 0;
let score = 0;

//question form template//

const questionTemplate = (questionNum) => {
  return `
    <section class="container" id='${questionNum}'>
    <div class='info'>
      <h2>${data[questionNum].question}</h2>
      </div>
    <form id='questionForm'>
    <fieldset name='answers'>

      <label id='flex-label'>
        <input type="radio" id="1" name="answers" value='${data[questionNum].answer1}' required>
        <span>${data[questionNum].answer1}</span>
      </label>


      <label id='flex-label'>
        <input type="radio" id="2" name="answers" value='${data[questionNum].answer2}' required>
        <span>${data[questionNum].answer2}</span>
      </label>


      <label id='flex-label'>
          <input type="radio" id="3" name="answers" value='${data[questionNum].answer3}' required>
          <span>${data[questionNum].answer3}</span>
      </label>


      <label id='flex-label'>
          <input type="radio" id="4" name="answers" value='${data[questionNum].answer4}' required>
          <span>${data[questionNum].answer4}</span>
      </label>

    </fieldset>

    <div class='info'>
    <button type="submit" onclick='submitForm(); return false;'>Submit</button>


  </div>
  </form>
  <h3>Question: ${questionNum + 1}/10</h3>
  </section>`;
  };

//function that initiates the quiz on a click//

function beginQuiz() {
  questionNum = 0;
  score = 0;
  mainSection.innerHTML = questionTemplate(0);
  titleElements.style.display = 'none';
  mainBody.style.backgroundImage = "url('https://images.pexels.com/photos/197906/pexels-photo-197906.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb')";
}

// submitting form and gathering input info//

function submitForm() {
  const answerInput = document.querySelector('input[name="answers"]:checked').value;

  answerEval(answerInput);
}

// evaluating whether or not the quesiton was correctly answered //
function answerEval(answerInput) {
  const correctAnswer = `${data[questionNum].correctAnswer}`;

  if (correctAnswer === answerInput) {
    correctAnswerFeedback();
  } else incorrectAnswerFeedback();
}

//feedback for correct answer//

function correctAnswerFeedback() {
  titleElements.style.display = 'none';
  mainSection.innerHTML = `<div class='outer-feedback'><div class='feedback'>
    <h2>You got it right!</h2>
    <div class="button-section">
      <button type="button" class="begin-button" onclick='nextQuestionEvaluation()' id="next-question">Onward!</button>
    </div>
  </div></div>`;
  addToScore();
}

//feedback for incorrect answer//

function incorrectAnswerFeedback() {
  titleElements.style.display - 'none';
  mainSection.innerHTML = `<div class='outer-feedback'><div class='feedback'>
    <h2>Better luck next time...</h2>
    <p>The correct answer is "${data[questionNum].correctAnswer}"</p>
    <div class="button-section">
      <button type="button" class="begin-button" onclick='nextQuestionEvaluation()'>Onward!</button>
    </div>
  </div></div>`;
}

function nextQuestionEvaluation() {
  if (questionNum < data.length - 1) {
    nextQuestion();
  } else {
    finalFeedback();
  }
}

//bring on the next question //

function nextQuestion() {
  questionNum++;
  questionNumber.innerHTML = (`&nbsp${score}`);
  mainSection.innerHTML = questionTemplate(questionNum);
  titleElements.style.display = 'none';
  mainBody.style.backgroundImage = "url('https://images.pexels.com/photos/197906/pexels-photo-197906.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb')";
}

// adding to score everytime there is a correct answer//
function addToScore() {
  return score++;
}

//final feedback and score, also option to begin again //

function finalFeedback() {
  titleElements.style.display = 'none';

  if (score > 7) {
    mainSection.innerHTML = `
    <div class='outer-feedback'><div class='feedback'>
      <h2>Congratulations! It looks like you'd fit right in.</h2>
      <h3>You scored ${score}/10</h3>
      <p>Want to retake the quiz?</p>
      <div class="button-section">
      <button type="reset" class="begin-button" onclick='beginQuiz()'>Yes, please!</button>
      </div>
    </div></div>`;
  } else if (score > 4) {
    mainSection.innerHTML = `
    <div class='outer-feedback'><div class='feedback'>
      <h2>Good effort! It's nice to know there are people like you around.</h2>
      <h3>You scored ${score}/10</h3>
      <p>Want to retake the quiz?</p>
      <div class="button-section">
      <button type="reset" class="begin-button" onclick='beginQuiz()'>Yes, please!</button>
      </div>
    </div></div>`;
  } else {
    mainSection.innerHTML = `
    <div class='outer-feedback'><div class='feedback'>
      <h2>Thanks for taking the quiz! Maybe visit a couple of times and then retake it.</h2>
      <h3>You scored ${score}/10</h3>
      <p>Want to retake the quiz?</p>
      <div class="button-section">
      <button type="reset" class="begin-button" onclick='beginQuiz()'>Yes, please!</button>
      </div>
    </div></div>`;
  }
}
