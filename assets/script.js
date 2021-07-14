var themeButtonEl = $('#theme-btn');
var refreshButtonEl = $('#refresh-btn');
var isDark = true;
function startTimer() {

    var quizBlock = document.getElementById('quiz-block');
    quizBlock.classList.remove('hidden');
    quizBlock.classList.add('show');
    goToNextQuestion();

    var timeleft = 50;

    var downloadTimer = setInterval(function (){
        
    document.getElementById("countdown").innerHTML = timeleft + "&nbsp"+"seconds remaining";

    timeleft -= 1;

    if(timeleft < -1){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up!"
    }
    }, 1000);
}

var startButtonEl = document.querySelector('#gameStart');

startButtonEl.addEventListener('click', startTimer)





// var isDark = true;



// These below are the questions and answers
let currentQuestionIndex = 0;

const myQuestions = [
    {
      question: "1. How Many Lakes are in Minnesota?",
      answers: {
        a: "a: 11,842",
        b: "b: 10,000",
        c: "c: I Don't Know"
      },
      correctAnswer: "a"
    },
    {
      question: "2. Which year did Minnesota became a state?",
      answers: {
        a: "a: 1912",
        b: "b: 1776",
        c: "c: 1858"
      },
      correctAnswer: "c"
    },
    {
      question: "3. What does the name Minnesota Mean?",
      answers: {
        a: "a: land of many lakes",
        b: "b: Let me ask Google",
        c: "c: cloudy water or sky-tinted water",
        
      },
      correctAnswer: "b"
    }
  ];


function goToNextQuestion() {

    var quizTextEl = document.getElementById("quiz-text");
    quizTextEl.textContent = myQuestions[currentQuestionIndex].question;

    var option1El = document.getElementById("option-1");
    option1El.textContent = myQuestions[currentQuestionIndex].answers.a;
    option1El.addEventListener('click', goToNextQuestion)

    var option2El = document.getElementById("option-2");
    option2El.textContent = myQuestions[currentQuestionIndex].answers.b;
    option2El.addEventListener('click', goToNextQuestion)

    var option3El = document.getElementById("option-3");
    option3El.textContent = myQuestions[currentQuestionIndex].answers.c;
    option3El.addEventListener('click', goToNextQuestion)

    currentQuestionIndex++
}

// Click event causes alert light theme toggle. Excercise from class
themeButtonEl.on('click', function () {
  if (isDark) {
    $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
    isDark = !isDark;
  } else {
    $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
    isDark = !isDark;
  }
});

// Click event causes refresh
refreshButtonEl.on('click', function () {
  location.reload();
});

