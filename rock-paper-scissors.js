

let score = JSON.parse(localStorage.getItem('score'));

if(!score)
{
    score = {
        wins: 0,
        loses: 0,
        ties: 0
    }
}

updateScoreElement();

let isAutoPlaying = false;
let intervalId = undefined;

function autoPlay() {

    if(!isAutoPlaying){   

        intervalId = setInterval(function() {
           const playerMove = pickComputerMove();
           playGame(playerMove);
        }, 1000);

        isAutoPlaying = true;
    }else {
        clearInterval(intervalId);
        isAutoPlaying = false;
        
    }
}


function playGame(playerMove)
{   
    let result = '';
    
    const computerMove = pickComputerMove();
    if(playerMove === 'rock')
    {
        if(computerMove === 'rock')
        {
            result = 'Tie';

        }
        else if(computerMove === 'paper')
        {
            result = 'You Lose';
            
        }
        else if(computerMove === 'scissors')
        {
            result = 'You Win';
            
        }
    }

    else if(playerMove === 'paper')
    {
        if(computerMove === 'rock')
        {
            result = 'You Win';
            
        }
        else if(computerMove === 'paper')
        {
            result = 'Tie';
            
        }
        else if(computerMove === 'scissors')
        {
            result = 'You Lose';
            
        }
    }

    else if(playerMove === 'scissors')
    {
        if(computerMove === 'rock')
        {
            result = 'You Lose';
            
        }
        else if(computerMove === 'paper')
        {
            result = 'You Win';
            
        }
        else if(computerMove === 'scissors')
        {
            result = 'Tie';
            
        }
    }

    if(result === 'Tie')
    {
        score.Tie++;
    }
    else if(result ===  'You Lose')
    {
        score.Lose++;
    }
    else if(result === 'You Win')
    {
        score.Win++;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-moves').innerHTML = `you
<img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
<img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
computer`;
    document.querySelector('.js-result').innerHTML = result;


    //alert(`Your Move : ${playerMove}\nComputer Move : ${computerMove}\n>>> ${result}\n\n Win: ${score.Win} | Lose: ${score.Lose} | Tie: ${score.Tie}`);
}

function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Win: ${score.Win} | Lose: ${score.Lose} | Tie: ${score.Tie}`;

}

function resetScore()
{
    score.Lose = 0;
    score.Win = 0;
    score.Tie = 0;
        localStorage.setItem('score',JSON.stringify(score));
        updateScoreElement();
        document.querySelector('js-moves').innerHTML='';

        //alert(`reset Successfully!`);
    }
        

        
        function pickComputerMove()
        {
            const RandNumber = Math.random();
            

            if(RandNumber >= 0 && RandNumber < 1/3) {
                computerMove = 'rock';
            }
            else if(RandNumber >= 1/3 && RandNumber < 2/3) {
                computerMove = 'paper';
            }
            else if(RandNumber<1) {
                computerMove = 'scissors';
            }

            return computerMove;
            
        }

        
   