'use strict';


var $playerTurn = 1;

var $total = 0;
var $score = 0;

var $p1_Score = 0;
var $p2_Score = 0;
// The score that needs to be reached to win
var $win_Score = 100;


const newGame = function(){
    var $playerTurn = 1;

    var $total = 0;
    var $score = 0;

    var $p1_Score = 0;
    var $p2_Score = 0;


}


const turn = function(){
    $total = 0;
    //changes player turn
    if($playerTurn == 1){
        $playerTurn = 2;
        console.log("its the turn of player " + $playerTurn);
        score0.textContent = $total;

    }
    else if($playerTurn == 2){
        $playerTurn = 1;
        console.log("its the turn of player " + $playerTurn);
        score1.textContent = $total;
    }

}



//if the hold button is pressed the following is run
    const holdStart = function(){
        hold($total, $p1_Score, $p2_Score);
    }
    const hold = function($total, p1, p2){
        
        console.log($total);
        console.log(p1);
        console.log(p2);



        if($playerTurn == 1){
            $p1_Score = $total + p1;
            console.log("player 1's total score = " + $p1_Score);
            totalP1.textContent = $p1_Score;

        } else if($playerTurn == 2){
            $p2_Score = $total + p2;
            console.log("player 2's total score = " + $p2_Score);
            totalP2.textContent = $p2_Score;
        }
        console.log("player 1 score is " + $p1_Score);
        console.log("player 2 score is " + $p2_Score);
        
        if($p1_Score < $win_Score && $p2_Score < $win_Score ){
            turn();
        } 
        else {
            
        if ($p1_Score > $win_Score){
            console.log("Player 1 wins");

        }
        if ($p2_Score > $win_Score){
            console.log("Player 2 wins");
        }
    }

}


const score = function($result, $score){
    //adds old total to the result and ups the current total
    $total = $result + $score;

    console.log("total is " + $total);
    
    if($playerTurn == 1){
    score0.textContent = $total;
    }else if ($playerTurn == 2) {
    score1.textContent = $total;
    }
    return $total;
}



const diceImage = function($rol){
    if($rol == 1){
        console.log("Dice = 1");
        turn();
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

const totalP1 = document.getElementById('current--0')
const totalP2 = document.getElementById('current--1')

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
btnHold.addEventListener('click', holdStart);