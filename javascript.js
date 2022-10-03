let userschoice;
let computerchoice;
let results;
            
const btn = document.querySelectorAll("button");
const div = document.querySelector('.result');
            
btn.forEach((button) => {
    button.addEventListener('click', getChoices);
});
            
function getComputerChoice() {
let x = Math.floor(Math.random() * 3);
let y = ['rock', 'paper', 'scissors'];
return (y[x]);
};
            
function getChoices() {
    let getClass = this.className;
    userschoice = getClass;
    computerchoice = getComputerChoice();
    results = play(userschoice, computerchoice);
    div.textContent = results;
 };
function play(a, b) {
    if( a == 'rock') {
        if(b =='rock') {
            return ('Match tied');
        }else if (b =='paper'){
            return('You lost');
        } else if (b =='scissors') {
            return('You won');
        };
    }else if (a == 'paper') {
        if(b =='rock') {
            return ('You won');
        }else if (b =='paper'){
            return('Match tied');
        } else if (b =='scissors') {
            return('You lost');
        };
    }else if (a == 'scissors') {
        if(b =='rock') {
            return ('You lost');
        }else if (b =='paper'){
            return('You won');
        } else if (b =='scissors') {
            return('Match tied');
        };
    };
};