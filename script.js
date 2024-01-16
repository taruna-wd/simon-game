let gameSeq = [];
let userSeq = [];

let colors = ["red" , "green" ,"yellow" ,"orange"]
let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress" , function(e){
  if( started == false){
    console.log("game started");
     started = true;

     levelup();
  }
});
function gameFlash(btn){
  btn.classList.add("white");
  setTimeout(() => {
  btn.classList.remove ("white");
  }, 250);
}
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(() => {
  btn.classList.remove ("userflash");
  }, 250);
}
function levelup(){
  userSeq = [];
  level++;
  h3.innerText = `level ${level}`;
  
  let randIndx = Math.floor(Math.random() *3);
  let randomColor = colors[randIndx];
  let randBtn = document.querySelector(`.${randomColor}`)
  gameSeq.push(randomColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkbtn(idx){
  if( userSeq[idx] === gameSeq[idx]){
  if( userSeq.length === gameSeq.length){
   setTimeout(levelup , 1000)
  }
  }else{
    h3.innerHTML = `Game over oops ! your score was <b> ${level}</b>   press any key to  start game`;
   reset();
  }
}
function btnPress(){
  let btn = this;
  userFlash(btn);
  userColor= btn.getAttribute("id");
  userSeq.push(userColor); 
 checkbtn(userSeq.length-1);
  }

let allBtns = document.querySelectorAll(".box");
for(btn of allBtns){
  btn.addEventListener("click" , btnPress);
}

function reset(){
     started = false ;
     gameSeq = [];
     userSeq =[];
     level  = 0;
}

