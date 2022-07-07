const myInput=document.querySelector('input');
const gamebtn=document.querySelector('button');
gamebtn.classList.add('guessbtn')
let output=document.querySelector('.results');
const main=document.querySelector('.main');
let message =document.createElement('div');
output.append(message);
const strtbtn=document.createElement('button');
output.append(strtbtn);
strtbtn.textContent = "Start Game";
strtbtn.classList.add('mainbtn');
main.prepend(output);





const vals ={
    min:0,
    max:10
};

const game = {
    guess:0,
    score:0,
    randomnum:numberMaker(vals.min, vals.max)
};


myInput.setAttribute('type', 'number');
myInput.style.display ='none';
gamebtn.style.display ='none';
gamebtn.textContent ="Guess";



strtbtn.addEventListener('click', starter);
gamebtn.addEventListener('click', guesser);


messageOut("<h3>Click to Start the Game</h3>");



function starter() {
    vals.min = numberMaker(0,1);
    vals.max = numberMaker(vals.min + 10, vals.min + 100);
    game.randomnum = numberMaker(vals.min, vals.max);
    game.guess = 0;
    insetUp(`Make a Guess!<br>`);
    myInput.style.display ='block';     
    myInput.focus();  
    gamebtn.style.display ='block';
    strtbtn.style.display ='none';
  
}


function messageOut(mes) {
    message.innerHTML = mes;
}

function numberMaker(max, min) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function guesser() {
    game.guess++;
    const val = myInput.value;
    myInput.value ='';
    if (game.randomnum == val){
        gameover();
    }
    else if (game.randomnum > val) {
        vals.min =val;
        insetUp(`${val} is too low<br>`);
    }
    else {
        vals.max =val;
        insetUp(`${val} is too high<br>`);
    }


}

function insetUp(moremessage) {
    messageOut(`${moremessage} Guess a number between ${vals.min} to ${vals.max}`);
    myInput.setAttribute('min', vals.min);
    myInput.setAttribute('max', vals.max);

}

function gameover() {
    const rep = game.guess == 1 ? 'guess' : 'guesses'
    messageOut(`<h3>You guess correctly, it takes ${game.guess} ${rep}</h3>`);
    game.score++;
    game.guess = 0;
    gamebtn.style.display ='none';
    myInput.style.display ='none';
    strtbtn.style.display ='block';
    strtbtn.textContent = "Play It Again?"






}
