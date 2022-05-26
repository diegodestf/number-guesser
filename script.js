let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn')
      guessInput = document.querySelector('#guess-input')
      message = document.querySelector('.message')

minNum.textContent = min
maxNum.textContent = max

guessBtn.addEventListener('click', () => {
    
    let guess = parseInt(guessInput.value)
    
    if (isNaN(guess) || guess < min || guess > max) {

        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }

    if (guess === winningNum) {

        gameOver(true, `${winningNum} is correct! YOU WIN!`)

    } else {
        
        guessesLeft--
        
        gameOver(false, `Your guess is incorrect. You have ${guessesLeft} guesses left` )

        guessInput.style.borderColor = 'red'

        if (guessesLeft === 0) {

            gameOver(false, `You've lost! The correct number was ${winningNum}`)

            guessInput.disabled = true

            guessBtn.disabled = true

        }
    }
})

function setMessage(msg, color) {
    message.style.color = color
    message.textContent = msg
}

function gameOver (won, msg) {
    
    let color

    won === true ? color = 'green' : color = 'red'

    guessInput.disabled = true

    guessInput.style.borderColor = color

    message.style.color = color

    setMessage(msg)

}