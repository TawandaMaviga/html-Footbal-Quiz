const questions = [
    {
        question: "Which country won the World Cup in 1966?",
        answers: [
            { text: "Netherlands", correct: false},
            { text: "Germany", correct: false},
            { text: "England", correct: true},
        ]
    },
    {
        question: "What year did Diego Maradona win the World Cup with Argentina?",
        answers: [
            { text: "1986", correct: true},
            { text: "1990", correct: false},
            { text: "1982", correct: false},
        ]
    },
    {
        question: "Which football club has won the most Champions league trophies?",
        answers: [
            { text: "Liverpool", correct: false},
            { text: "Barcelona", correct: false},
            { text: "Real Madrid", correct: true},
        ]
    },
    {
        question: "What year did the English Premier League start?",
        answers: [
            { text: "1990", correct: false},
            { text: "1992", correct: true},
            { text: "1991", correct: false},
        ]
    },
    {
        question: "Who has won the World footballer of the year most?",
        answers: [
            { text: "Ronaldo", correct: false},
            { text: "Messi", correct: true},
            { text: "Maradona", correct: false},
        ]
    },
    {
        question: "What season was Arsenal nicknamed the Invincibles?",
        answers: [
            { text: "2000/2001", correct: false},
            { text: "2002/2003", correct: false},
            { text: "2003/2004", correct: true},
        ]
    },
    {
        question: "Who is the most successful manager in the English Premier League?",
        answers: [
            { text: "Jose Mourinho", correct: false},
            { text: "Sir Alex Ferguson", correct: true},
            { text: "Pep Guardiola", correct: false}
        ]

    },
    {
        question: "Which country won the Women's World Cup in 2023?",
        answers: [
            { text: "France", correct: false},
            { text: "USA", correct: false},
            { text: "Spain", correct: true},
        ]
    },
    {
        question: "Which player has won the most league titles in England, Italy and Spain combined?",
        answers: [
            { text: "David Beckham", correct: false},
            { text: "Cristiano Ronaldo", correct: true},
            { text: "Zlatan Ibrahimovic", correct: false},
        ]
    },
    {
        question: "Which country hosted the first ever Football World Cup in the Middle East?",
        answers: [
            { text: "Saudi Arabia", correct: false},
            { text: "Qatar", correct: true},
            { text: "Dubai", correct: false},
        

        ]
    }
];

const questionElement = document.getElementById("question");
const buttonsforanswers = document.getElementById("buttonsforanswers");
const nextbutton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    console.log("startQuiz");
    
    showQuestion();
}

function showQuestion(){
    console.log("showQuestion")
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("button");
        buttonsforanswers.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}


function resetState(){
    nextbutton.style.display = "none";
    while(buttonsforanswers.firstChild){
        buttonsforanswers.removeChild(buttonsforanswers.firstChild);
    }
}

function selectAnswer(a){
    console.log("selectAnswer");
    const selectedButton = a.target;
    console.log(selectedButton)
    const isCorrect = selectedButton.dataset.correct === "true";
    console.log(isCorrect)
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++;
        console.log(score)
    }else{
        selectedButton.classList.add("incorrect");
    }
    Array.from(buttonsforanswers.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =true;

    });
    nextbutton.style.display = "block";
    nextbutton.addEventListener("click", handleNextButton);
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML = "Play Again";
    nextbutton.style.display = "block";
}

function handleNextButton(){
    nextbutton.removeEventListener("click", handleNextButton);
    console.log("nextbutton");
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
startQuiz();


