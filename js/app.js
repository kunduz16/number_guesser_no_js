let min = 1;
let max = 10;
let guessesLeft = 3;


const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');


minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    let randNumber = Math.floor(Math.random() * 10) + 1;
    // validation
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Нужно ввести число от ${min} до ${max}`, "red");
    }

    // check if won
    if (guess === randNumber) {
        guessInput.disabled = true;
        guessInput.style.border = "1px solid green";
        setMessage(`Поздравляю! Вы угадали число ${randNumber}`, "green");
        guessBtn.innerHTML = "Новая игра!";
        if (guessBtn.innerHTML == "Новая игра!") {
            guessBtn.addEventListener('click', function() {
                location.reload();
            })
        }
    } else {
        guessesLeft -= 1
        if (guessesLeft) {
            guessInput.value = "";
            setMessage(`У вас осталось  ${guessesLeft} попытка`, "red");
            guessInput.style.border = "1px solid red";
        } else if (guessesLeft == 0) {
            setMessage(`Вы проиграли! Было задано ${randNumber}`, "red");
            guessInput.value = "";
            guessBtn.innerHTML = "Начать заново!";
            if (guessBtn.innerHTML == "Начать заново!") {
                guessBtn.addEventListener('click', function() {
                    location.reload();
                })
            }
        }

    }
})

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}