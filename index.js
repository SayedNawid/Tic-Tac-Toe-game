
// initialize the varables that we need

let gameActive = true ;
let PlayerX = "x" ;
let playerY = "0" ;
let gameState = ["", "", "", "", "", "", "", "", ""];
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// get value from the html input 
const countX = document.getElementById("x-player1") ;
const count0 = document.getElementById("y-player1") ;
const countEq = document.getElementById("equale1") ;
const cellElements = document.querySelectorAll(".input-cel-1");
let animateButtomX = document.getElementById("player-1") ; 
let animateButtom0 = document.getElementById("player-2") ;
const reset = document.getElementById("res");

 



