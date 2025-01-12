//Assume rock = 1, paper = 2, scissor = 3;
//Create two vairables to store users choice and computers choice.
let computers_choice = () => (Math.floor(Math.random()* 3)) + 1;
let users_choice = () => {
    let temp = (prompt("Rock, Paper or Scissor!, this is an endless loop unless you enter the correct values")).toLowerCase();
    if(temp === 'rock') {
        return 1;
    }else if(temp == 'paper') {
        return 2;
    }else if(temp == 'scissor') {
        return 3;
    }else{
        return users_choice();
    }
}
//Create two variables to store the score of user and computer.
let computers_score = 0;
let users_score = 0;

//Write a compare function which to decide the winner and to update the score of based on the result.
function compare(comp, usr) {
    //computer choses rock
    if(comp === 1) {
        if(usr === 2) {
            console.log("Paper beats Rock\n");
            users_score++;
        }else if(usr === 3) {
            console.log("Alas!, your scissor is no more\n");
            computers_score++;
        }else{
            console.log("If you can't beat them join them\n");
        }
    //computer choses paper
    }else if(comp === 2) {
        if(usr === 1) {
            console.log("Rock is afraid of Paper\n");
            computers_score++;
        }else if(usr === 3) {
            console.log("Scissor is the way to go when dealing with paper\n");
            users_score++;
        }else{
            console.log("Seems like you both want to end the war, but in the process are wasting paper\n");
        }
    //computer choses scissor
    }else if(comp === 3) {
        if(usr === 1) {
            console.log("Yay get that Scissor\n");
            users_score++;
        }else if(usr === 2) {
            console.log("Nah Paper doens't stand a chance against Scissor\n");
            computers_score++;
        }else{
            console.log("Scissor against Scissor, hmmm interesting\n");
        }
    }
}
//Write a play round function which will ask both user and computer to play.
function play_round() {
    compare(computers_choice(), users_choice());
}
//Write a loop to play the game n number of times.
for(let a = 0; a < 5; a++) {
    setTimeout(play_round(), 3000);
}
if(users_score > computers_score) {
    console.log(`You won score is ${users_score} : ${computers_score}`);
}else if (users_score < computers_score){
    console.log(`You lost score is ${users_score} : ${computers_score}`);
}else{
    console.log(`You guys tied up, ${users_score} : ${computers_score}`);
}