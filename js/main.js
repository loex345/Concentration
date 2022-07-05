/*----- constants -----*/ 
const MAX_WRONG_GUESSES = 4;
const PLACE_CARD ='https://i.imgur.com/YcXGjgE.png';
const GAME_PICS =[{img:'https://i.imgur.com/Pg2Fdbb.png', match:'false'},
{img:'https://i.imgur.com/29fSWXu.png', match:'false'},
{img:'https://i.imgur.com/Sv44SEP.jpg', match:'false'},
{img:'https://i.imgur.com/GCkcUeQ.jpg', match:'false'},
{img:'https://i.imgur.com/9uJxWtF.png', match:'false'},
{img:'https://i.imgur.com/GwyUXfy.jpg', match:'false'},
{img:'https://i.imgur.com/yHFSBDq.jpg', match:'false'}
]
/*----- app's state (variables) -----*/
let cards={}; //object to record card informaton 
let gameStatus; //game in progress=P game is over =O
let currentGameScore; // records number of matches 
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
      // render board and set guesses
      allDivImgs.forEach(function(allDivImg){
         //generate new number based on imgs card length
      let imgId=randamNumGen(GAME_PICS.length); 
            //render cards to board using look up structurue
      allDivImg.setAttribute("src",GAME_PICS[imgId]['img']);
            // hide image until clicked
      allDivImg.style.visibility='hidden'; //to do take away the hidden files
         });
         // to add the placeholder
   allDivs.forEach(function(allDiv){
         allDiv.classList.add('placeholder');
         console.log('I am working!')
      });

      wrongGuesses=0;
      cards= {
         cardsMatched:0,
         cardsVisible:'false',
         cardsShuffled:'method',

      }
         gameStatus=null;
         currentGameScore=0;
         highScore=0;
         
         render(); 
}
0
function randamNumGen(max) {
         return Math.floor(Math.random()*max);
         }
function render() {
         //Render should not have function code exception media
         renderGameImgs();
         //to accept Userclicks 
         renderPlayerClicks();
   } 
function renderPlayerClicks(evt) {
    //remove class on click
    evt.target.classList.remove('placeholder');
    //remove hidden
    if(evt.target.tagName==='DIV'){
      allDivImgs.forEach(function(allDivImg){
         allDivImg.style.visibility='visible'; //only works once
      });
    }
    console.log(evt.target.tagName);

    render();
   }

function renderGameImgs(){
         
   }
      
function handleClick(evt) { //replay button
   const trackEvt= evt.target;
     
   render();
} 

