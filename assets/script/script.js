//Script for popup window for index.html
/*jslint browser:true */
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    var popup = document.getElementById("popup"),
        openPopup = document.getElementById("htp"),
        closePopup = document.getElementById("close");

    openPopup.onclick = function () {
        popup.style.display = "flex";
    };
    closePopup.onclick = function () {
        popup.style.display = "none";
    };
});
//Script for character username creation.
function createCharacter() {
    "use strict";
                                           //Targets the createCharacter onclick from username.html
    var userName = document.getElementById("character-name"),
        displayName = document.getElementById("character");

    displayName.textContent = userName.value;                      //div with id character will display username.
    localStorage.setItem("character", userName.value); //https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
}
//Script for game.index
//insperation from Bro Code, https://www.youtube.com/watch?v=3uKdQx-SZ5A.
function start(playerMove) {
    "use strict";

    var choices = ["rock", "paper", "scissors", "cyclops", "spock"],
    //Math floor rounds it to the nearest number. Math random chooses a random number, < 1. * 5 so, < 5.
        computerMove = choices[Math.floor(Math.random() * 5)],
        display = document.getElementById("results"),
        result = "";

    if (playerMove === computerMove) { //If the player chooses the same as the computer = Tie.
        result = "IT'S A TIE!";
    } else {
        switch(playerMove) { //Player move compared to computer move.
        case "rock":
            document.getElementById("playmove").style.backgroundImage = "url(/assets/images/rock.jpg)";
            result = (computerMove === "scissors" || computerMove === "cyclops") ? "WINNER!" : "YOU LOSE!"; //Player picks cyclops. Computer picks scissors, cycplops = win. If not = false (You lose)
            break;
        case "paper":
            document.getElementById("playmove").style.backgroundImage = "url(/assets/images/paper.jpg)";
            result = (computerMove === "rock" || computerMove === "spock") ? "WINNER!" : "YOU LOSE!"; //Player picks cyclops. Computer picks rock, spock = win. If not = false (You lose)
            break;
        case "scissors":
            document.getElementById("playmove").style.backgroundImage = "url(/assets/images/scissors.png)";
            result = (computerMove === "paper" || computerMove === "cyclops") ? "WINNER!" : "YOU LOSE!"; //Player picks cyclops. Computer picks cyclops, paper = win. If not = false (You lose)
            break;
        case "cyclops":
            document.getElementById("playmove").style.backgroundImage = "url(/assets/images/cyclops.png)";
            result = (computerMove === "spock" || computerMove === "paper") ? "WINNER!" : "YOU LOSE!"; //Player picks cyclops. Computer picks spock, paper = win. If not = false (You lose)
            break;
        case "spock":
            document.getElementById("playmove").style.backgroundImage = "url(/assets/images/spock.png)";
            result = (computerMove === "scissors" || computerMove === "rock") ? "WINNER!" : "YOU LOSE!"; //Player picks cyclops. Computer picks scissors, rock = win. If not = false (You lose)
            break;
    }
    var myScore = getScore ();
    updateScore(result === "WINNER!" ? myScore + 1 : myScore - 1); //Result = winner. You get 1 point.
}
//Background change computer move.
if(computerMove === "rock") {
    document.getElementById("compmove").style.backgroundImage = "url(/assets/images/rock.jpg)";
}
else if(computerMove === "paper") {
    document.getElementById("compmove").style.backgroundImage = "url(/assets/images/paper.jpg)";
}
else if(computerMove === "scissors") {
    document.getElementById("compmove").style.backgroundImage = "url(/assets/images/scissors.png)";
}
else if(computerMove === "cyclops") {
    document.getElementById("compmove").style.backgroundImage = "url(/assets/images/cyclops.png)";
}
else if(computerMove === "spock") {
    document.getElementById("compmove").style.backgroundImage = "url(/assets/images/spock.png)";
}
//Score display
display.textContent = result;
}
function getScore(){
    return parseInt(localStorage.getItem("score")) || 0; //Start the local storage at 0.
}
function updateScore(score){
    var myScore = Math.max(score, 0); //Cant get a score bellow 0.
localStorage.setItem("score",myScore);
document.getElementById("score").textContent = "Score: " + myScore;

if(myScore >=5){
    alert("congratulations! You have won the game and beat Martha!"); //If you get 5 points. Game won.
    updateScore(0);
}
}