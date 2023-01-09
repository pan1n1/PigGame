'use strict';


var $playerTurn = 1;

var $total = 0;
var $score = 0;

var $p1_Score = 0;
var $p2_Score = 0;


const score = function($result, $score){
    //adds old total to the result and ups the current total
    $total = $result + $score;

    console.log("total is " + $total);

    score0.textContent = $total;

    return $total;
}

const diceImage = function($rol){
    if($rol == 1){
        console.log("Dice = 1");
        dice.src="./dice-1.png"
    }
    if($rol == 2){
        console.log("Dice = 2");
        dice.src="./dice-2.png"
    }
    if($rol == 3){
        console.log("Dice = 3");
        dice.src="./dice-3.png"
    }
    if($rol == 4){
        console.log("Dice = 4");
        dice.src="./dice-4.png"
    }
    if($rol == 5){
        console.log("Dice = 5");
        dice.src="./dice-5.png"
    }
    if($rol == 6){
        console.log("Dice = 6");
        dice.src="./dice-6.png"
    }
}




const diceRoll = function($score){
    let $result = Math.trunc(Math.random() * 6 + 1);
    console.log("result is " + $result);
    score($result, $score);
    diceImage($result);


    return $result
}

function click() {
    diceRoll($total);
}



//
//
//


//
//  Html selector
//
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


dice.src="dice-1.png"

//*************************/
//************************/
//starting conditions****/
//**********************/
//*********************/
score0.textContent = 0;
score1.textContent = 0;
//dice.classList.add('hidden');

btnRoll.addEventListener('click', click);
