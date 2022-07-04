/*----- constants -----*/ 
/*----- app's state (variables) -----*/
let cards={}; //object to record card informaton 
let gameStatus; //game in progress=P game is over =O
let currentGameScore; // records number of matches 
let highScore;
/*----- cached element references -----*/ 
const playButton=document.getElementById('Play');
const allDivImgs=document.querySelectorAll('main div img');
const allDiv=document.querySelector('div');
/*----- event listeners -----*/ 
playButton.addEventListener('click',handleClick);
/*----- functions -----*/
init();

function init() {
   cards= {
      cardsMatched:0,
      cardsVisible:'false',
      cardsShuffled:'method',
      imgs:['css/img/picThree.jpeg','css/img/picTwo.png','css/img/picOne.jpeg']
   }
      gameStatus=null;
      currentGameScore=0;
      highScore=0;
      render();
}

function randamNumGen(max) {
      return Math.floor(Math.random()*max);
      }
      function render(){
      renderGameImgs();
   } 

function renderGameImgs(){
      
   }
function handleClick(evt) {
   const trackEvt= evt.target;
   //get ramdom number for ids
   allDivImgs.forEach(function(allDivImg){
      //generate new number based on imgs card length
      let imgId=randamNumGen(cards.imgs.length);
      //render cards to board using 
      console.log(cards.imgs[imgId]);
      allDivImg.setAttribute("src",cards.imgs[imgId]);
      // TODO hide image until clicked
 });

 render();

}