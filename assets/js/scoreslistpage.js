const highScoresList = document.querySelector('#topScoresList')
const highScores = JSON.parse(localStorage.getItem("scoresList")) || []

topScoresList.innerHTML =
scoresList.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")
