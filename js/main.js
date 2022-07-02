/*----- constants -----*/ 
const cards=[];
/*----- app's state (variables) -----*/
 let card={};
 let gameStatus;
 let currentGameScore;
 let highScore;
/*----- cached element references -----*/ 
/*----- event listeners -----*/ 
/*----- functions -----*/
init();
function init(){
 card={
    cardsMatched:0,
    cardsVisible:'false',
    cardsShuffled:'method'
    }
    gameStatus=null;
    currentGameScore=0;
    highScore=0;
 }
render();

function render(){

}