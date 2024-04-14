let gameseq=[];
let userseq=[];

let started=false;
let level=0;
let least=30000;
 let btns=["yellow","green","blue","red"];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
          
        started=true;
        levelUp();
    }
}); 

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250 );
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500 );
}
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
     let randidx=Math.floor(Math.random()*3);
     let randcolor=btns[randidx];
     let randbtn=document.querySelector(`.${randcolor}`);

     gameseq.push(randcolor);
     console.log(gameseq);
     btnFlash(randbtn);
}
 
function checkAns(idx){
   
   if(userseq[idx]==gameseq[idx]){

   if(userseq.length==gameseq.length){
    setTimeout(levelUp,1000);
    
   }
   }
   else{
    let score=((level-1)*(level))/2;
    if(score<least) least=score;
    h2.innerHTML=`Game Over!Your score was <b>${score}</b> <br> Least score is ${least} Press any key to start again.`; 
   document.querySelector("body").style.backgroundColor="red";
   setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
   },150);

    reset();
   }
}
function btnpress(){
   let btn=this;
   userflash(btn);
  userColor=btn.getAttribute("id");
  userseq.push(userColor);
  
  checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress); 
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}