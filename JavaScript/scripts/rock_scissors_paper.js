/* 
    Rock, scissors, paper JavaScript 
    By Aaron Cano, GitHub: rxnwashere
*/

// Version 1.0

const prompt = require("prompt-sync")(); // User prompt

let inGame = 0; // Actives main menu

let plays = [null, "rock", "scissors", "paper"]; // Possible plays (null is for index from 1 to 3 the possible plays and avoid the use of number 0 in player plays)

function game () { // One player mode
    let score = 0; // Player score
    let scorebot = 0; // Bot score
    let playerplay = 0; // Starts the game with no play to avoid bugs.
    let botplay = 0; // Same as line 16 but for the bot.

    while (inGame == 1) {
        let rounds = Number(prompt("How many rounds do you want to play? > ")); // Allows the player to select the number of rounds to play.
        while (rounds < 1) { // The rounds must be 1 or more.
            rounds = Number(prompt("INVALID NUMBER! How many rounds do you want to play? > "));
        }

        for (let i = 0; i < rounds; i++) { // This loop will be repeated for each round until it arrives to the max value. (For 5 rounds it will be repeated until i = 5)
            playerplay = Number(prompt("1 - Rock\n2 - Scissors\n3 - Paper\n>")); // Lines 27 & 28 are for the player play. With a number from 1 to 3 the player selects what wants to play against the bot.
            while (playerplay < 1 || playerplay > 3) {
                playerplay = Number(prompt("INVALID PLAY! Select a valid play from the list\n1 - Rock\n2 - Scissors\n3 - Paper\n>"));
            }
            playerplay = plays[playerplay]; // Selects the element in the list of possible plays to make it the player play.
            botplay = Math.random() * (3) + 1; 
            botplay = Math.trunc(botplay);
            botplay = plays[botplay];
            console.log(`PLAYER: ${playerplay}\nBOT: ${botplay}`);

            if (playerplay == botplay) {
                console.log("TIE");
                i -= 1;
            }
            else if (playerplay == plays[1] && botplay == plays[2]) {
                console.log("PLAYER WINS THE ROUND");
                score += 1;
            }
            else if (playerplay == plays[2] && botplay == plays[3])  {
                console.log("PLAYER WINS THE ROUND");
                score += 1;
            }
            else if (playerplay == plays[3] && botplay == plays[1]) {
                console.log("PLAYER WINS THE ROUND");
                score += 1;
            }
            else {
                console.log("BOT WINS THE ROUND");
                scorebot += 1;
            }
        }
        if(score > scorebot) {
            console.log("PLAYER WINS!!!");
        }
        else {
            console.log("BOT WINS!!!!");
        }
        break;
    }
}

function twoplayers () {
    let score1 = 0;
    let score2 = 0;
    let play1 = 0;
    let play2 = 0;
    
    let rounds = Number(prompt("How many rounds do you want to play? > "));
    while (rounds < 1) { // The rounds must be 1 or more.
        rounds = Number(prompt("INVALID NUMBER! How many rounds do you want to play? > "));
    }

    for (let i = 0; i < rounds; i++) {
        play1 = Number(prompt("TURN FOR PLAYER 1\n1 - Rock\n2 - Scissors\n3 - Paper\n>"));
        while (play1 < 0 || play1 > 3) {
            play1 = Number(prompt("INVALID PLAY! Please select a valid play from the list:\n1 - Rock\n2 - Scissors\n3 - Paper\n>"));
        }
        play1 = plays[play1];
        for (let j = 0; j < 100; j++) {
            console.log("NEXT TURN");
        }
        play2 = Number(prompt("TURN FOR PLAYER 2\n1 - Rock\n2 - Scissors\n3 - Paper\n>"));
        while (play2 < 0 || play2 > 3) {
            play2 = Number(prompt("INVALID PLAY! Please select a valid play from the list:\n1 - Rock\n2 - Scissors\n3 - Paper\n>"));
        }
        play2 = plays[play2];
        console.log(`PLAYER 1: ${play1}\nPLAYER 2: ${play2}`);

        if (play1 == play2) {
            console.log("TIE");
            i -= 1;
        }
        else if (play1 == plays[1] && play2 == plays[2]) {
            console.log("PLAYER 1 WINS THE ROUND");
            score1 += 1;
        }
        else if (play1 == plays[2] && play2 == plays[3])  {
            console.log("PLAYER 1 WINS THE ROUND");
            score1 += 1;
        }
        else if (play1 == plays[3] && play2 == plays[1]) {
            console.log("PLAYER 1 WINS THE ROUND");
            score1 += 1;
        }
        else {
            console.log("PLAYER 2 WINS THE ROUND")
            score2 += 1;
        }
        
        if(score > scorebot) {
            console.log("PLAYER 1 WINS!!!");
        }
        else {
            console.log("PLAYER 2 WINS!!!!");
        }
        break;
    }
}

while (inGame == 0) { //main menu
    console.log("====ROCK, SCISSORS, PAPER JAVASCRIPT EDITION====\n1 - 1 PLAYER MODE\n2 - 2 PLAYERS MODE\n3 - TUTORIAL\n4 - END CODE\nCode by Aarón Cano, GitHub: rxnwashere");
    let gamemode = Number(prompt("> "));

    if (gamemode == 1) {
        inGame = gamemode;
    }

    else if (gamemode == 2) {
        inGame = gamemode;
    }

    else if (gamemode == 3) {
        inGame = gamemode;
    }

    else if (gamemode == 4) {
        break;
    }
    
    else {
        while (gamemode < 1 && gamemode > 3) {
            gamemode = Number(prompt("Invalid option, choose a valid option > "));
        }
    }   
}

if (inGame == 1) {
    game();
}

else if (inGame == 2) {
    twoplayers();
}

else if (inGame == 3) {
    console.log("Tutorial");
}

else {
    console.log("====END====");
}