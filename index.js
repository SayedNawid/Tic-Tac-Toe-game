
// initialize the varables that we need
let turn = 1
let roundWin = false;
// circle = 1   cross = 2  empty = 0
let gameStroage = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
window.onload = () => {
    setBackToTern(turn != 1);
    let result = document.getElementsByClassName("input-cel-1")
    console.log(typeof result)

    document.getElementById("res").addEventListener("click", function (e) {
        console.log("reset clicked")
        reset()
    });
    Array.prototype.forEach.call(result, element => {
        element.addEventListener("click", (e) => {
            console.log(roundWin)
            if (!roundWin) {
                let cellNumb = e.target.id

                let value = gameStroage[cellNumb]
                if (value !== 0) return
                gameStroage[cellNumb] = turn
                if (turn === 1) {
                    e.target.src = "res10.png"
                    turn = 2
                    setBackToTern(true)
                } else {
                    e.target.src = "cancel11.png"
                    turn = 1
                    setBackToTern(false)
                }
                e.target.style.opacity = 1;
                checkWinner()

            } else {
                alert("Game finished")
            }
        })

    }
    )
}
function checkWinner() {
    for (let i = 0; i < winConditions.length; i++) {
        let element1 = winConditions[i]
        let a = gameStroage[element1[0]]
        let b = gameStroage[element1[1]]
        let c = gameStroage[element1[2]]
        if (!a || !b || !c) {
            continue
        }
        if (a === b && b === c) {
            if (turn === 1) {
                let x = document.getElementById('xWin');
                x.innerText = parseInt(x.innerText) + 1;
            } else if (turn === 2) {
                let o = document.getElementById('oWin');
                o.innerText = parseInt(o.innerText) + 1;
            }
            roundWin = true;
            return
        }
    }
    if (!gameStroage.includes(0)) {
        let d = document.getElementById('draws');
        d.innerText = parseInt(d.innerText) + 1;
        return
    }
}

function setBackToTern(tern) {
    if (tern) {
        document.getElementById("crossCon").style.backgroundColor = "aqua";
        document.getElementById("circulCon").style.backgroundColor = "white";
    } else {
        document.getElementById("crossCon").style.backgroundColor = "white";
        document.getElementById("circulCon").style.backgroundColor = "aqua";
    }
}

function reset() {
    gameStroage.forEach((e , i) => { gameStroage[i] = 0});
    roundWin = false;
    let cells = document.getElementsByClassName("input-cel-1");
    Array.prototype.forEach.call(cells , e => {
        e.style.opacity = 0;
    });
}



