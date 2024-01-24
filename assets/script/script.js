//insperation from Bro Code, https://www.youtube.com/watch?v=3uKdQx-SZ5A.
const choices = ['rock','paper','scissors','cyclops','spock']

function start(playerMove){
    //Math floor rounds it to the nearest number. Math random chooses a random number, < 1. * 5 so, < 5.
    const computerMove = choices[Math.floor(Math.random()* 5)];
    console.log(computerMove)

    if(playerMove === computerMove){ //If the player chooses the same as the computer = Tie.
        result = "IT'S A TIE!";
    }
    else{
        switch(playerMove){ //Player move compared to computer move.
            case "rock":
                result = (computerMove === "scissors","cyclops") ? 'YOU WIN!' : 'YOU LOSE!'; //Player picks cyclops. Computer picks scissors, cycplops = win. If not = false (You lose)

            case "paper":
                result = (computerMove === "rock","spock") ? 'YOU WIN!' : 'YOU LOSE!'; //Player picks cyclops. Computer picks rock, spock = win. If not = false (You lose)

            case "scissors":
                result = (computerMove === "paper","cyclops") ? 'YOU WIN!' : 'YOU LOSE!'; //Player picks cyclops. Computer picks cyclops, paper = win. If not = false (You lose)

            case "cyclops":
                result = (computerMove === "spock","paper") ? 'YOU WIN!' : 'YOU LOSE!'; //Player picks cyclops. Computer picks spock, paper = win. If not = false (You lose)

            case "spock":
                result = (computerMove === "scissors","rock") ? 'YOU WIN!' : 'YOU LOSE!'; //Player picks cyclops. Computer picks scissors, rock = win. If not = false (You lose)
    }
}
}
