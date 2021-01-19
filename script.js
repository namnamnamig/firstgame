/*

score between 1 and 20
score < 10 break
score --
highscore
again
message
*/
'use strict';

let secretNumber = Math.trunc(Math.random()*20) +1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess || guess > 20){
        if(!guess){
            displayMessage("Are you fucking kidding me type a fucken number");
        }
        else if (guess > 20){
            displayMessage("Are you damn stupid blind don't you see between 1 and 20");
        }
    }
    else if(guess === secretNumber){
        displayMessage("You fucken son/daughter of a bitch you have guessed right");
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess < secretNumber ? "too low bitch I am decresing your score" :
            "too high motherfucker I am decreasing your score");
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('Looooooser');
            document.querySelector('.score').textContent = 0;
        }
        // if(guess < secretNumber){
        //     displayMessage("too low bitch I am decresing your score");
        //     score--;
        //     document.querySelector('.score').textContent = score;
        // }
        // else if(guess > secretNumber){
        //     displayMessage("too high motherfucker I am decreasing your score");
        //     score --;
        //     document.querySelector('.score').textContent = score;
        // }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) +1;
    console.log(secretNumber);

    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});
