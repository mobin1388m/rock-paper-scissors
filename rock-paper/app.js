const computerChoiceDisplay= document.getElementById('computer-choise');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result'); 
const possiblechoices = document.querySelectorAll('button');
const userScoreDisplay = document.getElementById("user-score")
const computerScoreDisplay = document.getElementById("computer-score")
// const computerImageDisplay = document.getElementById("computer-image")
// const userImageDisplay = document.getElementById("user-image")
const border = document.getElementById('border')


let userchoice
let computerChoice
let result
let userScore =0
let computerScore=0
possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) =>{
    userchoice = e.target.id
    userChoiceDisplay.innerHTML= userchoice
    generateComputerChoice()
    getresult()
    checkwinner()
    
}))

 
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) +1
    console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = 'rock'
        computerChoiceDisplay.setAttribute("style",`color:#503C3C`)
    }

    if(randomNumber === 2) {
        computerChoice = 'scissors'
        computerChoiceDisplay.setAttribute("style",`color:#C40C0C`)

    }

    if (randomNumber === 3){
        computerChoice = 'paper'
        computerChoiceDisplay.setAttribute("style",`color:#FEEFAD`)

    }

    computerChoiceDisplay.innerHTML = computerChoice
}


function getresult() {
    
    if (computerChoice === 'rock' && userchoice === 'rock'){
        result = 'its a draw😊'
        setimage()
        function setimage(){
            let userImage = document.createElement('img')
            userImage.src = "rock.png"
            border.appendChild(userImage)
            let computerImage = document.createElement('img')
            computerImage.src="rock.png"
            border.appendChild(computerImage)    
        }
    }

    if (computerChoice === 'scissors' && userchoice === 'scissors'){
        result = 'its a draw😊'
        setimage()
        function setimage(){
            let userImage = document.createElement('img')
            userImage.src = "scissors.png"
            border.appendChild(userImage)
            let computerImage = document.createElement('img')
            computerImage.src="scissors.png"
            border.appendChild(computerImage)    
        }
    }

    if (computerChoice === 'paper' && userchoice === 'paper'){
        result = 'its a draw😊'
        setimage()
        function setimage(){
            let userImage = document.createElement('img')
            userImage.src = "paper.png"
            border.appendChild(userImage)
            let computerImage = document.createElement('img')
            computerImage.src="paper.png"
            border.appendChild(computerImage)    
        }
    }
    if (computerChoice === 'rock' && userchoice === 'paper'){
        result = 'You win😍'
        userScore++
        setimage()
        function setimage(){
            let userImage = document.createElement('img')
            userImage.src = "paper.png"
            border.appendChild(userImage)
            let computerImage = document.createElement('img')
            computerImage.src="rock.png"
            border.appendChild(computerImage)    
        }
    }

    if (computerChoice === 'rock' && userchoice === 'scissors'){
        result = 'You lose😭'
        computerScore++
        computerScoreDisplay.textContent = computerScore
        setimage()
        function setimage(){
            let userImage = document.createElement('img')
            userImage.src = "scissors.png"
            border.appendChild(userImage)
            let computerImage= document.createElement('img')
            computerImage.src="rock.png"
            border.appendChild(computerImage)
        }
    }

    if (computerChoice === 'paper' && userchoice === 'rock'){
        result = 'You lose😭'
        computerScore++
        computerScoreDisplay.textContent = computerScore
        setimage()
        function setimage(){
            let userImage = document.createElement('img')
            userImage.src = "rock.png"
            border.appendChild(userImage)
            let computerImage= document.createElement('img')
            computerImage.src="paper.png"
            border.appendChild(computerImage)
        }
    }

    if (computerChoice === 'paper' && userchoice === 'scissors'){
        result = 'You win😍'
        userScore++
        userScoreDisplay.textContent = userScore
        setimage()
        function setimage(){
            let userImage = document.createElement('img')
            userImage.src = "scissors.png"
            border.appendChild(userImage)
            let computerImage= document.createElement('img')
            computerImage.src="paper.png"
            border.appendChild(computerImage)
        }
    }

    if (computerChoice === 'scissors' && userchoice === 'rock'){
        result = 'You win😍'
        userScore++
        userScoreDisplay.textContent = userScore
        setimage()
        function setimage(){
            let userImage = document.createElement('img')
            userImage.src = "rock.png"
            border.appendChild(userImage)
            let computerImage= document.createElement('img')
            computerImage.src="scissors.png"
            border.appendChild(computerImage)
        }
    }

    if (computerChoice === 'scissors' && userchoice === 'paper'){
        result = 'You lose😭'
        computerScore++
        computerScoreDisplay.textContent = computerScore
        setimage()
        function setimage(){
            let userImage = document.createElement('img')
            userImage.src = "scissors.png"
            border.appendChild(userImage)
            let computerImage= document.createElement('img')
            computerImage.src="paper.png"
            border.appendChild(computerImage)
        }
    }

    resultDisplay.innerHTML = result
}
function checkwinner() {
    if(userScore==3){
        alert('you win!')
    }
    if(computerScore==3){
        alert('You lose')
    }
}