/*----- constants -----*/
const MAX_WRONG_GUESSES = 30;
const PLACE_CARD = 'https://i.imgur.com/YcXGjgE.png';
const GAME_PICS = [{ img: 'https://i.imgur.com/Pg2Fdbb.png', match: false, showing: false },
{ img: 'https://i.imgur.com/29fSWXu.png', match: false, showing: false },
{ img: 'https://i.imgur.com/Sv44SEP.jpg', match: false, showing: false },
{ img: 'https://i.imgur.com/GCkcUeQ.jpg', match: false, showing: false },
{ img: 'https://i.imgur.com/9uJxWtF.png', match: false, showing: false },
{ img: 'https://i.imgur.com/GwyUXfy.jpg', match: false, showing: false },
{ img: 'https://i.imgur.com/yHFSBDq.jpg', match: false, showing: false },
{ img: 'https://i.imgur.com/5bKmCiX.jpg', match: false, showing: false },
]
/*----- app's state (variables) -----*/
let cards = []; // array of object to record card informaton 
let gameStatus; //game in progress=P game is over =L
let currentGameScore; // records number of matches 
let firstCard;
let secondCard;
let ignoreClick;
let highScore;
let wrongGuesses;
/*----- cached element references -----*/
const playButton = document.getElementById('Play');
const mainEl = document.getElementById('main-El');
const msgBoxEl = document.getElementById('msg-box');
const msgBoxTwoEl = document.getElementById('Num-Mat');
const msgBoxThreeEl = document.getElementById('WrgGue');
/*----- event listeners -----*/
playButton.addEventListener('click', init);  // for rendering the board
mainEl.addEventListener('click', handlePlayerClicks); // for user interaction
/*----- functions -----*/

init();

function init() {
   //shuffle cards
   cards = getShufflePicts();
   firstCard=null;
   wrongGuesses = 0;
   gameStatus = null;
   currentGameScore = 0;
   highScore = 0;
   ignoreClick = false;
   msgBoxEl.textContent ='';
   render();
}

function getrandamNumGen(max) {
   return Math.floor(Math.random() * max);
}

//get random card array
function getShufflePicts() {
   let tempCards = [];
   let cards = [];
   GAME_PICS.forEach(function (game_pic) {
      tempCards.push({ ...game_pic }, { ...game_pic });
   });
   while (tempCards.length) {
      let rIdx = getrandamNumGen(tempCards.length);
      let card = tempCards.splice(rIdx, 1)[0];
      cards.push(card);
   }
   return cards;
}

function render() {
   cards.forEach(function (card, idx) {
      const imgsbyId = document.getElementById(idx);
      const srcLnk = (card.match || card === firstCard) ? card.img : PLACE_CARD;
      imgsbyId.src = srcLnk;
   });
   
   //render Msg
   renderMsg();

}

function handlePlayerClicks(evt) {
   //get id click
   const card = cards[evt.target.id];
   // if clicked render for that image 
   //make second card and compare values 
   //guards
   if (evt.target.id === 'main-El' || evt.target.tagName !=='IMG' || firstCard===card || gameStatus==='L' || gameStatus=== 'W') return;
   if (firstCard) {
      secondCard=card;
      if (firstCard.img === card.img) {
         firstCard.match = true;
         card.match = true;
         msgBoxEl.textContent = 'You have a match!' ; // need timer
         currentGameScore++
      } else {
         wrongGuesses++
         msgBoxEl.textContent='';
      }
      firstCard = null;
   } else {
      firstCard = card;
   }
   gameStatus = getGameStatus();
   render();
}

function renderMsg() {
   //add scores
   msgBoxThreeEl.textContent=`Guess count :${wrongGuesses}  Guesses available:${MAX_WRONG_GUESSES+1}`;
    if(gameStatus === 'P' ){
      msgBoxTwoEl.textContent =`Current Score : ${currentGameScore}`;
    }else if (gameStatus === 'L') {
      msgBoxEl.textContent ='Game is over!';
    }else if(gameStatus === 'W'){
      msgBoxEl.textContent='Hold your wallets we have a Winner!' 
   }
   playButton.style.visibility = gameStatus === 'L' || gameStatus ==='W' ? 'visible' : 'hidden'; 
}

function getGameStatus() {
// win logic for where all cards matched equals win
   const isWinner = cards.every(function(card) {
          return card.match;
   });
   if (isWinner) return 'W';
   if(wrongGuesses <= MAX_WRONG_GUESSES){
      return 'P';
   }
   if(wrongGuesses >= MAX_WRONG_GUESSES) return 'L';
}
      
   

