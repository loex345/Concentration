/*----- constants -----*/ 
/*----- app's state (variables) -----*/
let cards={}; //object to record card informaton 
let gameStatus; //game in progress=P game is over =O
let currentGameScore; // records number of matches 
let highScore;
/*----- cached element references -----*/ 
const playButton = document.getElementById('Play');
const allDivImgs = document.querySelectorAll('main div img');
const allDivs = document.querySelectorAll('div');
const mainEl = document.querySelector('main');
/*----- event listeners -----*/ 
playButton.addEventListener('click',handleClick);  // for rendering the board
mainEl.addEventListener('click',handleUserClick); // for user interaction
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
         //Render game board
         renderGameImgs();
         //to accept Userclicks 
         renderPlayerClicks()
   } 
   function renderPlayerClicks() {

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
            // hide image until clicked
      allDivImg.style.visibility='hidden'; //to do take away the hidden files
         });
         // to add the placeholder
   allDivs.forEach(function(allDiv){
         allDiv.classList.add('placeholder');
         //allDiv.textContent="Inplay";
         console.log('I am working!')
      });
   render();
   } 

   function handleUserClick(evt){
      //remove class on click
      evt.target.classList.remove('placeholder');
      //remove hidden
      if(evt.target.tagName==='DIV'){
        document.querySelector('img').style.visibility='visible';
      }
      console.log(evt.target.tagName);
      return;
      render();
   }