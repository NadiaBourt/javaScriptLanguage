
const questions = [["beach","Place near the sea"],["apple", "Eva to Adam"],["mathematica", "It is the science"],
    ["Israel","Holy land"],[ "Golf","Shop in Israel and the game"],["dress", "It is on a woman"],
    ["Java script", "language of programming"]];
let word;
let sectionElement = document.querySelector(".word-guess");
sectionElement.innerHTML = getDivsElements();
const letterElements = document.querySelectorAll(".letter-guess");
const trialsElement = document.querySelector(".guess-trials");
const gameOverElement = document.querySelector(".game-over-message");
const playAgainElement = document.getElementById("play-again");
let flGameOver = false;
const INITIAL_TRIALS = 6;
let trials = INITIAL_TRIALS;
function getDivsElements()
{
    let question = Math.floor(Math.random() * words.length);
    let wordField = words[question];
    let wordFieldArray = Array.from(wordField);
    let resField = wordFieldArray.map(letter => `<div class="letter-guess">${letter}</div>`);
    return resField.join('');
}
function showTrialsMessage(trials)
{
    trialsElement.innerHTML =
        `remained ${trials} guess trials`;
}
function startGame() {
    // let question = Math.floor(Math.random() * questions.length);
    // let index;
    // word = words[question];
    // trials = INITIAL_TRIALS
    // showTrialsMessage(trials);
    // gameOverElement.innerHTML ='';
    // playAgainElement.style.display='none';
    // letterElements.forEach(e => e.innerHTML='');
    // flGameOver = false;
}

function onChange(event) {
    const word = event.target.value;

    if (flGameOver) {
        alert("game is over");
        return;
    }
    trials--;
    showTrialsMessage(trials);

    if (wordF != words[questions]) {
        alert(`A word should contain ${N_LETTERS} letters`)
    } else {
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l);
        const colors = wordAr.map((letter, i) => {
            let index = word.indexOf(letter);
            let res = 'red';
            if (index  > -1) {
                res = letter == word[i] ? 'green' : 'yellow'
            }
            return res;
        })
        colors.forEach((c, i) =>
            letterElements[i].style.color=c)
    }
    const res = wordGuess == word;
    if (trials == 0 || res) {
        endGame(res);
    }

}
function endGame(isSuccess) {
    if (isSuccess) {
        gameOverElement.innerHTML =  "Congratulations you are winner";
        gameOverElement.style.color = "green"
    } else {
        gameOverElement.innerHTML =  "Sorry you are loser";
        gameOverElement.style.color = "red"
    }

    playAgainElement.style.display='block';
    trialsElement.innerHTML = '';
    flGameOver = true;
}
startGame()


