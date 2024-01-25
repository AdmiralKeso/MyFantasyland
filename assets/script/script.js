//Script for popup window for index.html
var popup = document.getElementById("popup");
var openPopup = document.getElementById("htp");
var closePopup = document.getElementById("close");
openPopup.onclick = function() {
    popup.style.display = "flex";
}
closePopup.onclick = function() {
    popup.style.display = "none";
}
//Script for character username creation.
function createCharacter(){                                        //Targets the createCharacter onclick from username.html
const userName = document.getElementById("character-name");
const displayName = document.getElementById("character");
    displayName.textContent = userName.value;                      //div with id character will display username.
    localStorage.setItem("character", userName.value) //https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
}

//Script for game.index
//insperation from Bro Code, https://www.youtube.com/watch?v=3uKdQx-SZ5A.
function start(playerMove){
    const choices = ['rock','paper','scissors','cyclops','spock'];
    //Math floor rounds it to the nearest number. Math random chooses a random number, < 1. * 5 so, < 5.
    const computerMove = choices[Math.floor(Math.random()* 5)];
    console.log(computerMove)

    if(playerMove === computerMove){ //If the player chooses the same as the computer = Tie.
        result = "IT'S A TIE!";
    }
    else{
        switch(playerMove){ //Player move compared to computer move.
            case "rock":
                document.getElementById("playmove").style.backgroundImage = "url(/assets/images/rock.jpg)"
                result = (computerMove === "scissors","cyclops") ? 'YOU WIN!' : 'YOU LOSE!'; //Player picks cyclops. Computer picks scissors, cycplops = win. If not = false (You lose)
                break;
            case "paper":
                document.getElementById("playmove").style.backgroundImage = "url(/assets/images/paper.jpg)"
                result = (computerMove === "rock","spock") ? 'YOU WIN!' : 'YOU LOSE!'; //Player picks cyclops. Computer picks rock, spock = win. If not = false (You lose)
                break;
            case "scissors":
                document.getElementById("playmove").style.backgroundImage = "url(/assets/images/scissors.png)"
                result = (computerMove === "paper","cyclops") ? 'YOU WIN!' : 'YOU LOSE!'; //Player picks cyclops. Computer picks cyclops, paper = win. If not = false (You lose)
                break;
            case "cyclops":
                document.getElementById("playmove").style.backgroundImage = "url(/assets/images/cyclops.png)"
                result = (computerMove === "spock","paper") ? 'YOU WIN!' : 'YOU LOSE!'; //Player picks cyclops. Computer picks spock, paper = win. If not = false (You lose)
                break;
            case "spock":
                document.getElementById("playmove").style.backgroundImage = "url(/assets/images/spock.png)"
                result = (computerMove === "scissors","rock") ? 'YOU WIN!' : 'YOU LOSE!'; //Player picks cyclops. Computer picks scissors, rock = win. If not = false (You lose)
                break;
    }
    }
}
}
