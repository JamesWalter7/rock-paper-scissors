//Assume rock = 1, paper = 2, scissor = 3;
//Create two vairables to store users choice and computers choice.
let choices = ["rock", "paper", "scissor"];
let computers_choice = () => choices[(Math.floor(Math.random()* 3))];

let playing_area = document.querySelector("#playing-area");
playing_area.addEventListener("click", (e) => {
    let users_choice = e.target.id;
    let comp_choice = computers_choice();
    play_round(comp_choice, users_choice);
});
//Create two variables to store the score of user and computer.
let computers_score = document.querySelector("#computer-score");
let users_score = document.querySelector("#user-score");
let rounds_remaining = document.querySelector("#rounds-remaining");
let play_again = document.querySelector("#new-round");
let session_active = true;
play_again.addEventListener("click", reset);

computers_score.textContent = 0;
users_score.textContent = 0;
rounds_remaining.textContent = 5;

//Write a compare function which to decide the winner and to update the score of based on the result.
function play_round(comp, usr) {
    if(session_active === false) {
        alert("To play again press the play again button at the bottom.");
        return;
    }
    rnds_rmng = parseInt(rounds_remaining.textContent);
    rnds_rmng--;
    rounds_remaining.textContent = rnds_rmng;
    compare(comp, usr);
    if(rnds_rmng === 0) {
        session_active = false;
        declare_winner();
    }
}
function compare(comp, usr) {
    console.log(`computers_choice: ${comp}`);
    console.log(`users_choice: ${usr}`);
    let dialogue;
    //computer choses rock
    if(comp === 'rock') {
        if(usr === 'paper') {
            dialogue = "Paper beats Rock";
            increase_users_points();
        }else if(usr === 'scissor') {
            dialogue = "Alas!, your scissor is no more";
            increase_computers_points();
        }else{
            dialogue = "If you can't beat them join them";
        }
    //computer choses paper
    }else if(comp === 'paper') {
        if(usr === 'rock') {
            dialogue = "Rock is afraid of Paper";
            increase_computers_points();
        }else if(usr === 'scissor') {
            dialogue = "Scissor is the way to go when dealing with paper";
            increase_users_points();
        }else{
            dialogue = "Seems like you both want to end the war, but in the process are wasting paper";
        }
    //computer choses scissor
    }else if(comp === 'scissor') {
        if(usr === 'rock') {
            dialogue = "Yay get that Scissor";
            increase_users_points();
        }else if(usr === 'rock') {
            dialogue = "Nah Paper doens't stand a chance against Scissor";
            increase_computers_points();
        }else{
            dialogue = "Scissor against Scissor, hmmm interesting";
        }
    }
    dialogue_box = document.querySelector("#dialogue-box");
    console.log(dialogue);
    dialogue_box.textContent = dialogue;
}
function increase_users_points() {
    let a = parseInt(users_score.textContent);
    a++;
    users_score.textContent = a;
}
function increase_computers_points() {
    let a = parseInt(computers_score.textContent);
    a++;
    computers_score.textContent = a;
}
function reset() {
    session_active = true;
    users_score.textContent = 0;
    computers_score.textContent = 0;
    rounds_remaining.textContent = 5;
    (document.querySelector("#dialogue-box")).textContent = "";
}

function declare_winner() {
    let usr_sc = parseInt(users_score.textContent);
    let cmp_sc = parseInt(computers_score.textContent);
    let dialogue;
    if(usr_sc > cmp_sc) {
        dialogue = `You won score is ${usr_sc} : ${cmp_sc}`;
    }else if (usr_sc < cmp_sc){
        dialogue = `You lost score is ${usr_sc} : ${cmp_sc}`;   
    }else{
        dialogue = `You guys tied up, ${usr_sc} : ${cmp_sc}`;
    }
    (document.querySelector("#dialogue-box")).textContent = dialogue;
    console.log(dialogue);
}