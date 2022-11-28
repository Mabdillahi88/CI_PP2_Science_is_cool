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
        question: "What percent of American adults believe that chocolate milk comes from brown cows?",
        choice1: "20%",
        choice2: "18%",
        choice3: "7%",
        choice4: "33%",
        answer: 3,
    },
    {
        question: "Approximately what percent of U.S. power outages are caused by squirrels?",
        choice1: "10-20%",
        choice2: "5-10%",
        choice3: "15-20%",
        choice4: "30%-40%",
        answer: 1,
    }
]