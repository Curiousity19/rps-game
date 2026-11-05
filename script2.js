// get com move
    function getComMove() {
        let comMove;
        let random = Math.random()
        if (random < 1/3) {
            comMove = 'rock';
        }
        else if (random < 2/3) {
            comMove = 'paper';
        }
        else {
            comMove = 'scissors'
        }
        return comMove;
    }

// play a round
function playRound (userMove, comMove) {
    // rps rules
    const Rules = {
        'rock': {'rock': 'tie', 'paper': 'lose', 'scissors': 'win'},
        'paper': {'rock': 'win', 'paper': 'tie', 'scissors': 'lose'},
        'scissors': {'rock': 'lose', 'paper': 'win', 'scissors': 'tie'},
    }

    let result = Rules[userMove][comMove];
    const resultText = document.querySelector('.result');
    resultText.textContent = `You ${result}!`

    return result;
}

// update hand image 
function updateHand(userMove, comMove) {
    const handImg = {
        'rock': '/assets/rock.png',
        'paper': '/assets/paper.png',
        'scissors': '/assets/scissors.png',
    }
    
    let userHand = document.querySelector('.user-hand');
    let comHand = document.querySelector('.com-hand');
    
    userHand.src = handImg[userMove];
    comHand.src = handImg[comMove];
}

// update score
function updateScore (userPts, comPts) {
    let showUserPts = document.querySelector('.user-pts');
    let showComPts = document.querySelector('.com-pts');
    showUserPts.textContent = userPts;
    showComPts.textContent = comPts;
}

// run game
function runGame () {
    let userPts = 0;
    let comPts = 0;
    
    const moveBtns = document.querySelectorAll('.move-btn');
    moveBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let userMove = e.target.textContent.toLowerCase();
            let comMove = getComMove();
            // hand image
            updateHand(userMove, comMove);
            
            let result = playRound(userMove, comMove);

            if (result === 'win') {
                userPts++;
            } else if (result === 'lose') {
                comPts++;
            }
            updateScore(userPts, comPts);
        })
    })

}

runGame();
