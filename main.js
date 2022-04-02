
// this sets up the function to let the computer select rock, paper, scissors
function computerPlay(){
    let comp = Math.random()
    if (comp < 0.33){
        return 'rock';
    }else if (comp >0.34 && comp < 0.66){
        return 'paper'
    }else{
        return 'scissors'
    }
}
function playRound(playerSelection, computerSelection){
   
    if (playerSelection === computerSelection){
        result  = 'The match is a tie!!!!'
        return result
    } else if ((playerSelection === 'rock' && computerSelection ==='Scissors')||
    (playerSelection === 'paper' && computerSelection === 'rock')||
    (playerSelection === 'scissors' && computerSelection ==='paper')){
        result = 'Player Wins!!!!'
        return result
    }else{
        result = 'Computer Wins!!!!'
        return result;
    }
}
function game(){
       playRound()
       for(let i = 0; i <5; i++){
          console.log(playRound(result))
       }
       
}
let result;
const playerSelection = prompt('Please enter rock, paper, or scissors: ').toLowerCase()
const computerSelection = computerPlay()
game()
// console.log(playRound(playerSelection, computerSelection))
