/*----- constants -----*/
const MAX_WRONG_GUESSES = 4;
const PLACE_CARD = 'https://i.imgur.com/YcXGjgE.png';
const GAME_PICS = [{ img: 'https://i.imgur.com/Pg2Fdbb.png', match: false, showing: false },
{ img: 'https://i.imgur.com/29fSWXu.png', match: false, showing: false },
{ img: 'https://i.imgur.com/Sv44SEP.jpg', match: false, showing: false },
{ img: 'https://i.imgur.com/GCkcUeQ.jpg', match: false, showing: false },
{ img: 'https://i.imgur.com/9uJxWtF.png', match: false, showing: false },
{ img: 'https://i.imgur.com/GwyUXfy.jpg', match: false, showing: false },
{ img: 'https://i.imgur.com/yHFSBDq.jpg', match: false, showing: false }
]
/*----- app's state (variables) -----*/
let cards = []; //object to record card informaton 
let gameStatus; //game in progress=P game is over =O
let currentGameScore; // records number of matches 
let firstCard;
let ignoreClick;
let highScore;
let wrongGuesses;
/*----- cached element references -----*/
const playButton = document.getElementById('Play');
const allDivImgs = document.querySelectorAll('main div img');
const allDivs = document.querySelectorAll('div');
const mainEl = document.getElementById('main-El');
const msgBox = document.getElementById('msg-box');
/*----- event listeners -----*/
playButton.addEventListener('click', handleClick);  // for rendering the board
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
   ignoreClick=false;

   render();
}
function randamNumGen(max) {
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
      let rIdx = randamNumGen(tempCards.length);
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
   //to accept Userclicks 
   //render Msg
   renderMsg();

}
function handlePlayerClicks(evt) {
   //get id click
   const card = cards[evt.target.id];
   // if clicked render for that image 
  if (evt.target.id === 'main-El' || ignoreClick) return;
   if (firstCard) {
      if (firstCard.img === card.img) {
         firstCard.match = true;
         card.match = true;
         gameStatus = 'P';
         currentGameScore++
      } else {
         wrongGuesses++
      }
      firstCard = null;
   } else {
      firstCard = card;
   }
   //TODO Put in Winning Logic 
   render();
}

function handleClick(evt) { //replay button
   
   render();
}
function renderMsg(){
    if(gameStatus === 'P'){
      msgBox.textContent = 'You have a match!';
    }else if (gameStatus === 'O') {
      msgBox.textContent ='Game is over!';
    }

   
}

