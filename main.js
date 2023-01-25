console.log('Welcome to the game')

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const idx = Math.floor(Math.random() * choices.length)
  const choice = choices[idx]
  return choice
}

function getPlayerChoice() {
  let check = true
  let choice = ''
  while (check) {
    const inp = parseInt(
      prompt(
        `Select one from the list ['1 for rock', "2 for paper", "3 for scissors" ] `
      )
    )
    if (inp === 1) {
      choice = 'rock'
      check = false
    } else if (inp === 2) {
      choice = 'paper'
      check = false
    } else if (inp === 3) {
      choice = 'scissors'
      check = false
    } else {
      alert('Please enter 1, or 2, or 3')
    }
  }

  return choice
}

let tie = 0
function playRound(playerSelection, compSelection) {
  if (playerSelection === compSelection) {
    tie++
    return 'This is tie!'
  }

  if (playerSelection === 'rock') {
    if (compSelection === 'scissors') {
      return 'You win! Rock beats scissors'
    } else if (compSelection === 'paper') {
      return 'You lose! Paper beats rock'
    }
  }

  if (playerSelection === 'paper') {
    if (compSelection === 'rock') {
      return 'You win! Paper beats rock'
    } else if (compSelection === 'scissors') {
      return 'You lose! Scissors beats paper'
    }
  }

  if (playerSelection === 'scissors') {
    if (compSelection === 'paper') {
      return 'You win! Scissors beats paper'
    } else if (compSelection === 'rock') {
      return 'You lose! Rock beats scissors'
    }
  }
}

let win = 0
let check = true
const rounds = 6
for (let i = 0; i < rounds; i++) {
  const ps = getPlayerChoice()

  const cs = getComputerChoice()
  console.log(`Round: ${i + 1}\nplayer: ${ps} vs computer: ${cs}`)
  const response = playRound(ps, cs)
  if (response.includes('You win')) {
    win++
    console.log(`${response}\nYou win this round. Total wins: ${win}`)
  } else {
    console.log(`${response}\n`)
  }
}
console.log(
  `You win ${win} rounds; tie in ${tie}; lose in ${rounds - win - tie}`
)
