const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"

let playerChoice = ""
let computerChoice = ""

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

rockButton.addEventListener("click",() => playerChoose(rock))
paperButton.addEventListener("click",() => playerChoose(paper))
scissorsButton.addEventListener("click",() => playerChoose(scissors))

function playerChoose(choice){
    console.log("Player choose", choice)
    playerChoice = choice
    play()
}

function play(){
    //Rock
    if (playerChoice == rock){
        if (computerChoice == paper){
            console.log("Result: Computer has won!")
        }
        else if(computerChoice == scissors){
            console.log("Result: Player has won!")
        }
        else{
            console.log("Result: Draw");
        }
    }   
    //Paper
    else if (playerChoice == paper){
        if (computerChoice == scissors){
            console.log("Result: Computer has won!")
        }
        else if(computerChoice == rock){
            console.log("Result: Player has won!")
        }
        else{
            console.log("Result: Draw");
        }
    }
    //Scissors
    else if (playerChoice == scissors){
        if (computerChoice == rock){
            console.log("Result: Computer has won!")
        }
        else if(computerChoice == paper){
            console.log("Result: Player has won!")
        }
        else{
            console.log("Result: Draw");
        }
    }
}

console.log("Computer choose: ", computerChoose());