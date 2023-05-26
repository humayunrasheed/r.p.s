function getComputerChoice(){
    let choice = Math.random()*3;
    choice = Math.floor(choice);
    if (choice === 0){
        return "Rock";
    }
    else if (choice ===1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
function playRound(pS){
    let cS = getComputerChoice();
    if( (pS==="Rock" && cS==="Rock" )|| (pS==='Paper' && cS==="Paper")||(pS==="Scissors"&&cS==="Scissors")){
        one.textContent=`Tie ${pS} to ${cS}`;
    }
    else if(pS==="Rock" && cS==="Scissors" ){
        one.textContent=`You Won! ${pS} beats ${cS}.`;
        player++;
        two.textContent=`Player : Computer = ${player} : ${computer}`;
    }
    else if(pS==="Paper" && cS==="Rock" ){
        one.textContent=`You Won! ${pS} beats ${cS}.`;
        player++;
        two.textContent=`Player : Computer = ${player} : ${computer}`;
    }
    else if(pS==="Scissors" && cS==="Paper" ){
        one.textContent=`You Won! ${pS} beats ${cS}.`;
        player++;
        two.textContent=`Player : Computer = ${player} : ${computer}`;
    }
    else if(pS==="Rock" && cS==="Paper" ){
        one.textContent=`You Lose! ${cS} beats ${pS}.`;
        computer++;
        two.textContent=`Player : Computer = ${player} : ${computer}`;
    }
    else if(pS==="Paper" && cS==="Scissors" ){
        one.textContent=`You Lose! ${cS} beats ${pS}.`;
        computer++;
        two.textContent=`Player : Computer = ${player} : ${computer}`;
    }
    else if(pS==="Scissors" && cS==="Rock" ){
        one.textContent=`You Lose! ${cS} beats ${pS}.`;
        computer++;
        two.textContent=`Player : Computer = ${player} : ${computer}`;
    }
    else{
        console.log("Enter a valid Choice.")
    }
    if(player==5){
        player=0;
        computer=0;
        two.textContent='You Won the Match';
        gm = false;
        container.removeChild(Rock);
        container.removeChild(Paper);
        container.removeChild(Scissors);
     }
    else if(computer==5){
        player=0;
        computer=0;
        two.textContent="You Lose the match";
        gm= false
        container.removeChild(Rock);
        container.removeChild(Paper);
        container.removeChild(Scissors);
     }
}
function game(){
    computer= 0,player=0;
    one.textContent="";
    two.textContent="";
    if(gm=false){
        container.removeChild(Rock);
        container.removeChild(Paper);
        container.removeChild(Scissors);
    }
    {   
        container = document.querySelector('#container');

        Rock=document.createElement('button');
        Rock.classList.add('btn');
        Rock.textContent="Rock";
        Rock.addEventListener('click', () => {
            playRound('Rock');
        });
        Paper=document.createElement('button');
        Paper.classList.add('btn');
        Paper.textContent="Paper";
        Paper.addEventListener('click', () => {
            playRound('Paper');
        });
        Scissors=document.createElement('button');
        Scissors.classList.add('btn');
        Scissors.textContent="Scissors";
        Scissors.addEventListener('click', () => {
            playRound('Scissors');
        });
        container.appendChild(Rock);
        container.appendChild(Paper);
        container.appendChild(Scissors);
    }
}
const startGame = document.querySelector("#startGame");
startGame.addEventListener('click',game);
output = document.querySelector('#output');
one = document.createElement('p');
one.classList.add('one');
two = document.createElement('p');
two.classList.add('two');
output.appendChild(one);
output.appendChild(two);