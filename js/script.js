let fiels = [];
let gameOver = false;
let currentShape = 'cross';

function fillShape(id) {
    if (!fiels[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.add('player-inactive');
            document.getElementById('player-2').classList.remove('player-inactive');
        }

        fiels[id] = currentShape;
        draw();
        checkForWin();
    }
}

function restart() {
    gameOver = false;
    fiels = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');

    for (let i = 0; i < 8; i++) {
        document.getElementById('line-' + i).style.transform = '';
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}

function draw() {
    for (let i = 0; i < fiels.length; i++) {
        if (fiels[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (fiels[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    let winner;

    if (fiels[0] == fiels[1] && fiels[1] == fiels[2] && fiels[0]) {
        winner = fiels[0];
        document.getElementById('line-0').style.transform = 'scaleX(1)';
    }
    if (fiels[3] == fiels[4] && fiels[4] == fiels[5] && fiels[3]) {
        winner = fiels[3];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    if (fiels[6] == fiels[7] && fiels[7] == fiels[8] && fiels[6]) {
        winner = fiels[6];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }

    if (fiels[0] == fiels[3] && fiels[3] == fiels[6] && fiels[0]) {
        winner = fiels[0];
        document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fiels[1] == fiels[4] && fiels[4] == fiels[7] && fiels[1]) {
        winner = fiels[1];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fiels[2] == fiels[5] && fiels[5] == fiels[8] && fiels[2]) {
        winner = fiels[2];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fiels[0] == fiels[4] && fiels[4] == fiels[8] && fiels[0]) {
        winner = fiels[0];
        document.getElementById('line-6').style.transform = 'rotate(45deg) scaleX(1.2)';

    }
    if (fiels[2] == fiels[4] && fiels[4] == fiels[6] && fiels[2]) {
        winner = fiels[2];
        document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(1.2)';
    }

    if (winner) {
        gameOver = true;

        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
        }, 500);
    }
}