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
function playRound(pS , cS){
    if( (pS==="Rock" && cS==="Rock" )|| (pS==='Paper' && cS==="Paper")||(pS==="Scissors"&&cS==="Scissors")){
        return(`Tie ${pS} to ${cS}`);
    }
    else if(pS==="Rock" && cS==="Scissors" ){
        return(`You Won! ${pS} beats ${cS}`);
    }
    else if(pS==="Paper" && cS==="Rock" ){
        return(`You Won! ${pS} beats ${cS}`);
    }
    else if(pS==="Scissors" && cS==="Paper" ){
        return(`You Won! ${pS} beats ${cS}`);
    }
    else if(pS==="Rock" && cS==="Paper" ){
        return(`You Lose! ${cS} beats ${pS}`);
    }
    else if(pS==="Paper" && cS==="Scissors" ){
        return(`You Lose! ${cS} beats ${pS}`);
    }
    else if(pS==="Scissors" && cS==="Rock" ){
        return(`You Lose! ${cS} beats ${pS}`);
    }
}

let pS="Rock";
let cS=getComputerChoice();