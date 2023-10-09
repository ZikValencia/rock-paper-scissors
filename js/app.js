const choices = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0
game()
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3)
    return choices[random]
}
function playerSelection() {
    return prompt("Rock?, Paper?, Scissors?").toLowerCase()
}
function game() {
    while(!(playerScore === 5 || computerScore === 5)) {
        const compiterChoice = getComputerChoice()
        const selection = playerSelection()
        if(choices.includes(selection)) {
            decision(selection,compiterChoice)
        }else {
            alert("invalid input please enter Rock?, Paper?, Scissors?")
        }
    }
}
function decision (players,computers) {
    if (players === computers){
        alert("It was a tie")
    }else if ((
        players === "rock" && computers === "scissors") ||
        (players === "paper" && computers === "rock") || 
        (players === "scissors" && computers === "paper")){
            playerScore++
            alert("Player wins\nPlayer Selected: "+players+" \nComputer Selected: "+computers+"\nPlayer Score:"+playerScore+"\nComputer Score: "+computerScore)
    }else {
        computerScore++
        alert("Computer wins\nPlayer Selected: "+players+" \nComputer Selected: "+computers+"\nPlayer Score:"+playerScore+"\nComputer Score: "+computerScore)
    }
}