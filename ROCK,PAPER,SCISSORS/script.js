let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

//computer move function
function compmove() {
    const options = ['rock', 'paper', 'scissors']
    let randnum = Math.floor(Math.random() * 3)
    return options[randnum]
}

const drawgame = () => {
    console.log("Game is Draw");
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = 'blue';
    msg.style.color = 'white';
}

const Winner = (user,userChoice,compChoice) =>{
    if(user){
        userscore+=1;
        document.querySelector("#userscore").innerText = userscore;
        msg.style.backgroundColor = 'green';
        msg.style.color = 'white';
        msg.innerText = `You Win.${userChoice} beats ${compChoice} `;
    }else{
        compscore+=1;
        document.querySelector("#compscore").innerText = compscore;
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
        msg.innerText = `Computer Wins.${compChoice} beats ${userChoice} `;
    }
}

function game(userChoice) {
    // console.log("User choice is ", userChoice);
    const compChoice = compmove();
    // console.log("Computer Choice is", compChoice);
    if (userChoice === compChoice) {
        drawgame();
    }
    else {
        let user = true
        if (userChoice == 'rock') {
            user = compChoice == 'paper' ? false : true;
        }
        else if (userChoice == 'paper') {
            user = compChoice == 'scissors' ? false : true
        }
        if (userChoice == 'scissors') {
            user = compChoice == 'rock' ? false : true
        }
        Winner(user,userChoice,compChoice)
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        game(userChoice)
    })
})
