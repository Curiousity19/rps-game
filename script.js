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

let humanScore = 0;
let comScore = 0;

// dapatin pilihan user, belum handle error
let getHumanChoice = () => prompt(`You: ${humanScore} | Com: ${comScore} \n Your Choice: `).toLowerCase();


function playRound (human, com) {
    let result;
    let next;
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
    
    if (result === 'win') {
        ++humanScore;
        console.log(`You ${result}! ${human} beats ${com}`);
        next = nextRound(`You ${result}! ${human} beats ${com}`);
    }
    else if (result === 'lose') {
        ++comScore;
        console.log(`You ${result}! ${com} beats ${human}`);
        next = nextRound(`You ${result}! ${com} beats ${human}`);
    }
    else {
        console.log(`You ${result}!`);
        next = nextRound(`You ${result}!`);
    }
    console.log(`You: ${humanScore}`, `Com: ${comScore}`);

    return next;
}

let nextRound = (result) => confirm(`${result} \n Wanna Continue?`);

function playGame () {
    while (comScore < 5 && humanScore < 5) {
        let comChoices = getComputerChoice();
        let humanChoice = getHumanChoice();
        let next = playRound(humanChoice, comChoices);
        if (!next) {
            alert('Coward~ bye'); 
            return;
        } 
    }

    if (comScore === 5) {
        alert("Game over. You Lose!");
    }
    else if (humanScore === 5) {
        alert("Game over. You Win!");
    } 

    return;
}

playGame();