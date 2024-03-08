let randomNum = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHigh = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame= true;

if(playGame){
    submit.addEventListener('click',function(e){
      e.preventDefault();
      const guess = parseInt(userInput.value);
      console.log(guess);
      validateGuess(guess);
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a vaild Number');
    }
    else if(guess<1){
        alert('Please enter a Bigger Number');
    }
    
    else if(guess>100){
        alert('Please enter a smaller Number');
    }
    
    else{
        prevGuess.push(guess);
        if(numGuess === 11)
        {
            displayGuess(guess);
            displayMessage(`Sorry tries are over, The random no was ${randomNum}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }


};

function checkGuess(guess){
 if(guess === randomNum){
    displayMessage(`You gussed it right`);
    endGame();
 }else if (guess > randomNum){
        displayMessage(`You guess is Too High`);
 }
 else if (guess < randomNum){
    displayMessage(`You guess is Too Low`);
}
};

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess }`


};

function displayMessage(message){
 lowOrHigh.innerHTML = `<h2>${message}<h2>`;
};

function endGame(guess){
userInput.value = '';
userInput.setAttribute('disabled',  '');

p.classList.add('button');
p.innerHTML = `<h2 id="newGame">Start A new game </h2>`;

startOver.appendChild(p);

playGame = false;

newGame();
};

function newGame(guess){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNum = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });

};

