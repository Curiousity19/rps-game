function getComputerChoice() {
    let comChoices;
    // dapatin random dan bagi jadi 3 range
    let random = Math.random()
    if (random < 1/3) {
        comChoices = 'rock';
    }
    else if (random < 2/3) {
        comChoices = 'paper';
    }
    else {
        comChoices = 'scissor'
    }
    return comChoices;
}

// dapatin pilihan user, belum handle error
let getHumanChoice = () => prompt('Your Choice: ').toLowerCase();

let humanScore = 0;
let comScore = 0;

function playRound (human, com) {
    let result;
    if (human === 'rock') {
        switch (com) {
            case 'rock':
            result = 'tie';
            break;
            case 'paper':
            result = 'lose';
            break;
            case 'scissor':
            result = 'win';
            break;
        }
    }
    else if (human === 'paper') {
        switch (com) {
            case 'rock':
            result = 'win';
            break;
            case 'paper':
            result = 'tie';
            break;
            case 'scissor':
            result = 'lose';
            break;
        }
    }
    else {
        switch (com) {
            case 'rock':
            result = 'lose';
            break;
            case 'paper':
            result = 'win';
            break;
            case 'scissor':
            result = 'tie';
            break;
        }
    }

    // cek score
    if (result === 'win') {
        humanScore++;
        console.log(`You ${result}! ${human} beats ${com}`);
    }
    else if (result === 'lose') {
        comScore++;
        console.log(`You ${result}! ${com} beats ${human}`);
    }
    else {
        console.log(`You ${result}!`);
    }
    console.log(`You: ${humanScore}`, `Com: ${comScore}`)
}

function playGame () {
    while (comScore < 5 || humanScore < 5) {
        let comChoices = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, comChoices);
        if (comScore === 5) {
            console.log("Game over. You Lose!");
            break;
        }
        else if (humanScore === 5) {
            console.log("Game over. You Win!");
            break;
        }
    }
}

playGame();