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
}

// run game
const moveBtns = document.querySelectorAll('.move-btn');
moveBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let userMove = e.target.textContent.toLowerCase();
        let comMove = getComMove();
        playRound(userMove, comMove);
        // hand image
        const Hand = {
            'rock': '/assets/rock.png',
            'paper': '/assets/paper.png',
            'scissors': '/assets/scissors.png',
        }

        let userHand = document.querySelector('.user-hand');
        let comHand = document.querySelector('.com-hand');

        userHand.src = Hand[userMove];
        comHand.src = Hand[comMove];

    })
})

