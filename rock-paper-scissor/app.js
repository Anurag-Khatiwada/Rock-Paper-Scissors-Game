let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");
let userscore=document.querySelector("#user-score");
let compscore=document.querySelector("#comp-score");
let resetGame=document.querySelector("#reset")
const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"]
    return options[Math.floor(Math.random()*3)];
}

const drawGame=()=>{
    return "Game was a draw. Play Again";
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        msg.innerText="Congratulations! you won";
        msg.style.backgroundColor="green";
        userscore.innerText=userScore;
    }
    else{
        compScore++;
        msg.innerText="Sorry! you lost";
        msg.style.backgroundColor="red";
        compscore.innerText=compScore;
    }
}

const playGame=(userChoice)=>{
    //Generate computer choice
    const compChoice=genCompChoice();

    if(userChoice === compChoice){
        let result=drawGame();
        msg.innerText=result;
        msg.style.backgroundColor="#081b31";
        
        
    }else{
        let userWin=true;
        if(userChoice==="rock")
        {
            if(compChoice==="paper"){
                userWin=false;
                
            }else if(compChoice==="scissor")
            {
                userWin=true;
                
            }
        }
        if(userChoice==="paper")
        {
            if(compChoice==="scissor")
            {
                userWin=false;
                
            }else if(compChoice==="rock")
            {
                userWin=true;
              
            }
        }
        if(userChoice==="scissor")
        {
            if(compChoice==="paper")
            {
                userWin=true;
                
            }else if(compChoice==="rock")
            {
                userWin=false;
                
            }
        }
        showWinner(userWin);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener(("click"),()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

resetGame.addEventListener("click",()=>{
    msg.innerText="Play Your Move";
    msg.style.backgroundColor="#081b31";
    userscore.innerText='0';
    compscore.innerText='0';
    userScore=0;
    compScore=0;
})