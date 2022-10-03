function rpsFuction() {
    var userSelection = prompt("Choose ROCK, PAPER, or SCISSORS?");
    var computerSelection = Math.random();
    if (computerSelection < 0.34) {
        computerSelection = "rock";
    } else if(computerSelection <= 0.67) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    
    var compare = function(userSelection1, computerSelection1) {
        if(userSelection1 === computerSelection1) {
          alert("It's a tie!");
    }
    if(userSelection1 === "rock") {
        if(computerSelection1 === "scissors") {
            alert("User wins");
        } else {
            alert("Computer wins");
        }
    }
    if(userSelection1 === "paper") {
        if(computerSelection1 === "rock") {
            alert("User wins");
        } else {
            if(computerSelection1 === "scissors") {
                alert("Computer wins");
        }
    }
    if(userSelection1 === "scissors") {
        if(computerSelection1 === "rock") {
            alert("Computer wins");
        } else {
            if(computerSelection1 === "paper") {
               alert("User wins");
            }
        }
    }
    }
    };
    console.log("User Choice: " + userSelection);
    console.log("Computer Choice: " + computerSelection);
    compare(userSelection, computerSelection)
    } 