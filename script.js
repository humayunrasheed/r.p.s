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