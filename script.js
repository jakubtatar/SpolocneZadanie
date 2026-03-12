const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"

let playerChoice = ""
let computerChoice = ""

let score = 0

function computerChoose(){
    let random = Math.floor(Math.random() * 3) + 1;
    switch(random){
        case 1:
            computerChoice = rock
            return "Rock"
        case 2:
            computerChoice = paper
            return "Paper"
        case 3:
            computerChoice = scissors
            return "Scissors"
    }
}

let rockButton = document.getElementById("Rock")
let paperButton = document.getElementById("Paper")
let scissorsButton = document.getElementById("Scissors")
let output = document.getElementById("Output")
let scr = document.getElementById("Score")

rockButton.addEventListener("click",() => playerChoose(rock))
paperButton.addEventListener("click",() => playerChoose(paper))
scissorsButton.addEventListener("click",() => playerChoose(scissors))

function playerChoose(choice){
    console.log("Computer choose: ", computerChoose());
    console.log("Player choose: ", choice)
    playerChoice = choice
    play()
    console.log("Score: ", score)
    reset()
}

function play(){
    //Rock
    if (playerChoice == rock){
        if (computerChoice == paper){
            console.log("Result: Computer has won!")
            output.textContent = "Result: Computer has won!"
            score -= 100
            scr.textContent = "Score: " + score
        }
        else if(computerChoice == scissors){
            console.log("Result: Player has won!")
            output.textContent = "Result: Player has won!"
            score += 100
            scr.textContent = "Score: " + score
        }
        else{
            console.log("Result: Draw");
            output.textContent = "Result: Draw"
            scr.textContent = "Score: " + score
        }
    }   
    //Paper
    else if (playerChoice == paper){
        if (computerChoice == scissors){
            console.log("Result: Computer has won!")
            output.textContent = "Result: Computer has won!"
            score -= 100
            scr.textContent = "Score: " + score
        }
        else if(computerChoice == rock){
            console.log("Result: Player has won!")
            output.textContent = "Result: Player has won!"
            score += 100
            scr.textContent = "Score: " + score
        }
        else{
            console.log("Result: Draw");
            output.textContent = "Result: Draw"
            scr.textContent = "Score: " + score
        }
    }
    //Scissors
    else if (playerChoice == scissors){
        if (computerChoice == rock){
            console.log("Result: Computer has won!")
            output.textContent = "Result: Computer has won!"
            score -= 100
            scr.textContent = "Score: " + score
        }
        else if(computerChoice == paper){
            console.log("Result: Player has won!")
            output.textContent = "Result: Player has won!"
            score += 100
            scr.textContent = "Score: " + score
        }
        else{
            console.log("Result: Draw");
            output.textContent = "Result: Draw"
            scr.textContent = "Score: " + score
        }
    }
}

function reset(){
    playerChoice = ""
    computerChoice = ""

    console.log("Computer choose: ", computerChoose());
}
