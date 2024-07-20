let computerNumber
let userTries = []
let tries = 0
let maxTries = 10
const btn = document.getElementById('newGameButton')


function newGame() {
    window.location.reload()
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function compareNumbers() {
    const userGuess = Number(document.getElementById('inputBox').value)

    if(userGuess < 100 && userGuess > 0) {
        userTries.push(" " + userGuess)
        document.getElementById('guesses').innerHTML = userTries
        if (tries < maxTries){
            if (userGuess > computerNumber) {
                document.getElementById('textOutput').innerHTML = 'Your number is too high'
                document.getElementById('inputBox').value = ''
                tries++
                document.getElementById('attempts').innerHTML = tries
            }
            else if(userGuess < computerNumber) {
                document.getElementById('textOutput').innerHTML = 'Your number is too low'
                document.getElementById('inputBox').value = ''
                tries++
                document.getElementById('attempts').innerHTML = tries
            }
            else {
                document.getElementById('textOutput').innerHTML = 'Congratulations!!!'
                tries++
                document.getElementById('attempts').innerHTML = tries
                document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
            }
        }
        else {
            document.getElementById('textOutput').innerHTML = 'You lose! The computer number was ' + computerNumber
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    }
    else {
        document.getElementById('textOutput').innerHTML = 'Number out of range, try again'
    }
}

