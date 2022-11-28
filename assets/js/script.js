const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.options-text'));
const progressText = document.querySelector('#gameText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#gameComplete');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is the name of the storage carbohydrate found in plants?',
        choice1: 'Glycogen',
        choice2: 'Cellulose',
        choice3: 'Starch',
        choice4: 'All of the above',
        answer: 3,
    },
    {
        question:
            "What is a limiting factor?",
        choice1: "A factor which, if in short supply limits or reduces the rate of photosynthesis",
        choice2: "An enzyme which increases the rate of the reaction",
        choice3: "An inhibitor of an enzyme which decreases the rate of the reaction",
        choice4: "All of the above",
        answer: 1,
    },
    {
        question: "Which organisms can photosynthesise?",
        choice1: "Plants and algae",
        choice2: "Plants and animals",
        choice3: "Fungi and plants",
        choice4: "All of the above",
        answer: 1,
    },
    {
        question: "Photosynthesis is what kind of reaction?",
        choice1: "Exothermic",
        choice2: "Endothermic",
        choice3: "Phototropic",
        choice4: "All of the above",
        answer: 2,
    },
    {
        question: "Which of these is a limiting factor of photosynthesis?",
        choice1: "Oxygen",
        choice2: "Carbon dioxide",
        choice3: "Methane",
        choice4: "All of the above",
        answer: 2,
    },
    {
        question: "Which of these will increase the rate of photosynthesis?",
        choice1: "Light intensity increases",
        choice2: "Light intensity decreases",
        choice3: "Light intensity remains constant",
        choice4: "All of the above",
        answer: 1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 6

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    