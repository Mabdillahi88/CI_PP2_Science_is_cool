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