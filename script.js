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
        return(`You Won!`);
    }
    else if(pS==="Paper" && cS==="Rock" ){
        return(`You Won!}`);
    }
    else if(pS==="Scissors" && cS==="Paper" ){
        return(`You Won!`);
    }
    else if(pS==="Rock" && cS==="Paper" ){
        return(`You Lose!`);
    }
    else if(pS==="Paper" && cS==="Scissors" ){
        return(`You Lose!`);
    }
    else if(pS==="Scissors" && cS==="Rock" ){
        return(`You Lose!`);
    }
    else{
        return("Enter a valid Choice.")
    }
}
function game(){
    let computer= 0,player=0;
    for(i=1;i<=5;i++){
        pS=prompt("Enter the Choice :");
        cS=getComputerChoice();
        out = playRound(pS,cS);
        if(out==='You Won!'){
            player=player+1;
            console.log( out + ` ${pS} beats ${cS}.`);
        }
        else if(out==="You Lose!"){
            computer= computer + 1;
             console.log( out + ` ${cS} beats ${pS}.`);
        }
        else{
             console.log(out);
        }
        if(player>=3){
           console.log('You Won the Match');
           break;
        }
        else if(computer>=3){
           console.log("You Lose the match");
           break;
        }
    }
}
let player=0 , computer=0,output, pS,cS,out;