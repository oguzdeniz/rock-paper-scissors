console.log('Welcome to the game')

const btnRock = document.getElementById('rock')
const btnPaper = document.getElementById('paper')
const btnScissors = document.getElementById('scissors')
const compChoiceSpan = document.getElementById('compChoice')
const resultDiv = document.getElementById('result')
const btnReset = document.getElementById('reset')
let counter = 1
const resultArray = []

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const idx = Math.floor(Math.random() * choices.length)
  const choice = choices[idx]
  return choice
}

function disableButtons() {
  btnRock.disabled = true
  btnPaper.disabled = true
  btnScissors.disabled = true
  btnRock.classList
}

// function getPlayerChoice() {
//   let check = true
//   let choice = ''
//   while (check) {
//     const inp = parseInt(
//       prompt(
//         `Select one from the list ['1 for rock', "2 for paper", "3 for scissors" ] `
//       )
//     )
//     if (inp === 1) {
//       choice = 'rock'
//       check = false
//     } else if (inp === 2) {
//       choice = 'paper'
//       check = false
//     } else if (inp === 3) {
//       choice = 'scissors'
//       check = false
//     } else {
//       alert('Please enter 1, or 2, or 3')
//     }
//   }

//   return choice
// }

function playRound(playerSelection, compSelection) {
  if (playerSelection === compSelection) {
    console.log('This is a tie!')
    return 'tie'
  }

  if (playerSelection === 'rock') {
    if (compSelection === 'scissors') {
      console.log('You win! Rock beats scissors')
      return 'win'
    } else if (compSelection === 'paper') {
      console.log('You lose! Paper beats rock')
      return 'lose'
    }
  }

  if (playerSelection === 'paper') {
    if (compSelection === 'rock') {
      console.log('You win! Paper beats rock')
      return 'win'
    } else if (compSelection === 'scissors') {
      console.log('You lose! Scissors beats paper')
      return 'lose'
    }
  }

  if (playerSelection === 'scissors') {
    if (compSelection === 'paper') {
      console.log('You win! Scissors beats paper')
      return 'win'
    } else if (compSelection === 'rock') {
      console.log('You lose! Rock beats scissors')
      return 'lose'
    }
  }
}

// let win = 0
// let check = true
// const rounds = 6
// for (let i = 0; i < rounds; i++) {
//   const ps = getPlayerChoice()

//   const cs = getComputerChoice()
//   console.log(`Round: ${i + 1}\nplayer: ${ps} vs computer: ${cs}`)
//   const response = playRound(ps, cs)
//   if (response.includes('You win')) {
//     win++
//     console.log(`${response}\nYou win this round. Total wins: ${win}`)
//   } else {
//     console.log(`${response}\n`)
//   }
// }
// console.log(
//   `You win ${win} rounds; tie in ${tie}; lose in ${rounds - win - tie}`
// )

function playAndShowResult(playerChoice) {
  const playerChoiceSpan = document.getElementById('playerChoice')
  const compChoice = getComputerChoice()
  playerChoiceSpan.textContent = playerChoice
  compChoiceSpan.textContent = compChoice
  const result = playRound(playerChoice, compChoice)
  const resultSpan = document.getElementById('result')
  console.log({ result })
  resultArray.push(result)
  let resultContent = '<div>'
  let count = 1
  resultArray.forEach((r) => {
    resultContent += '<div>' + 'Round ' + count + ': ' + r + '</div>'
    count++
  })
  resultContent += '</div>'
  console.log({ resultContent })
  resultSpan.innerHTML = resultContent
}

function handleClick(e) {
  const playerChoice = e.target.innerText.toLowerCase()
  const res = playAndShowResult(playerChoice)
  counter++
  if (counter > 5) {
    disableButtons()
    btnReset.style.display = 'block'
  }
}

function restartGame() {
  location.reload()
}

btnRock.addEventListener('click', handleClick)
btnPaper.addEventListener('click', handleClick)
btnScissors.addEventListener('click', handleClick)
btnReset.addEventListener('click', restartGame)
