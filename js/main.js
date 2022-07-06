/*----- constants -----*/ 
const MAX_WRONG_GUESSES = 4;
const PLACE_CARD ='https://i.imgur.com/YcXGjgE.png';
const GAME_PICS = [{img:'https://i.imgur.com/Pg2Fdbb.png', match:false, showing:false},
{img:'https://i.imgur.com/29fSWXu.png', match:false, showing:false},
{img:'https://i.imgur.com/Sv44SEP.jpg', match:false, showing:false},
{img:'https://i.imgur.com/GCkcUeQ.jpg', match:false, showing:false},
{img:'https://i.imgur.com/9uJxWtF.png', match:false, showing:false},
{img:'https://i.imgur.com/GwyUXfy.jpg', match:false, showing:false},
{img:'https://i.imgur.com/yHFSBDq.jpg', match:false, showing:false}
]
/*----- app's state (variables) -----*/
let cards=[]; //object to record card informaton 
let gameStatus; //game in progress=P game is over =O
let currentGameScore; // records number of matches 
let firstCard=null;
let highScore;
let wrongGuesses;
/*----- cached element references -----*/ 
const playButton = document.getElementById('Play');
const allDivImgs = document.querySelectorAll('main div img');
const allDivs = document.querySelectorAll('div');
const mainEl = document.querySelector('main');
/*----- event listeners -----*/ 
playButton.addEventListener('click',handleClick);  // for rendering the board
mainEl.addEventListener('click',renderPlayerClicks); // for user interaction
/*----- functions -----*/
init();
function init() {
       //shuffle cards
       cards = getShufflePicts();
         wrongGuesses=0;
         gameStatus=null;
         currentGameScore=0;
         highScore=0;
         
         render(); 
}
function randamNumGen(max) {
         return Math.floor(Math.random()*max);
         }
         //get random card array
function getShufflePicts(){
         let tempCards=[];
         let cards=[];
         GAME_PICS.forEach(function(game_pic){
            tempCards.push({...game_pic}, {...game_pic});
         });
         while (tempCards.length){
            let rIdx = randamNumGen(tempCards.length);
            let card = tempCards.splice(rIdx, 1)[0]; 
            cards.push(card);
         }
      return cards;
}
function render() {
   cards.forEach(function(card, idx){
   const imgsbyId = document.getElementById(idx);
   const srcLnk= (card.match || card === firstCard) ? card.img : PLACE_CARD;
   imgsbyId.src=srcLnk;
        });
         //to accept Userclicks 
      renderPlayerClicks();
    
   } 
function renderPlayerClicks(evt) {
  //get id click
  let lnk=evt;
   // if clicked render for that image 
   if(lnk.target.tagName ==='IMG') {
      let source = lnk.target.getAttribute('id');
      // source of image
      let newSrc = cards[source].img;
      lnk.target.src = newSrc;
      newSrc = cards
   } else {
      console.log('Not a image');
   }
}
      
function handleClick(evt) { //replay button
     
   render();
} 

