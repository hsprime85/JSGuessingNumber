'use strict';

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value = 23);

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    // when there is no input
    if(!guess) {
        displayMessage('😤 No Number!')
        // when player wins
    } else if (guess === secretNumber){
        displayMessage('🌈 Correct!')
        document.querySelector('body').style.backgroundColor= '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        } 
        // when guess is wrong
    } else if(guess !== secretNumber){
        if(score > 1){
            // document.querySelector('.message').textContent= guess > secretNumber ? '📈 too high!' :'📉 too low!' ;
            displayMessage( guess > secretNumber ? '📈 too high!' :'📉 too low!')
            score--;
            document.querySelector('.score').textContent=score;
        } else {
            displayMessage('GAME OVER')
            // document.querySelector('.message').textContent = 'GAME OVER';
            document.querySelector('.score').textContent=0;
        }
        
    }
    
}) 

document.querySelector('.again').addEventListener('click', function() {
    let score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing...');
    // document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent ='?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor= '#222';
    document.querySelector('.highscore').textContent = highScore;
    
})