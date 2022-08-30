const X_CLASS = "x"
const CIRCLE_CLASS='o'
const x="X"
const o ="O"
const cellElements =document.querySelectorAll('[data-cell]');
const winningText = document.querySelector('[data-winning-message-text]');
const winningbg =document.getElementById('winningMessage')
const restart =document.getElementById('restartButton')
let circleTurn
let currentsym

startGame()
restart.addEventListener('click',startGame)


function startGame(){
   cellElements.forEach(cell=>{
      cell.innerHTML=" " 
      cell.classList.remove(X_CLASS)
      cell.classList.remove(CIRCLE_CLASS)
      cell.removeEventListener('click',handleClick)
      cell.addEventListener('click', handleClick, {once:true})
   })
   winningbg.classList.remove("show");
}




function handleClick(e){
      const cell =e.target;
      const currentClass = circleTurn ? CIRCLE_CLASS:X_CLASS
      const currentSign = currentsym ? o :x
      placeMArk(cell,currentClass,currentSign)
      swapTurns()
      if(wins(currentClass)){ 
         winningText.innerHTML=`${circleTurn ? "X's wins" : "O's wins"}`
         winningbg.classList.add('show')        
      }
      if(draw()){
         winningText.innerHTML="Draw";
         winningbg.classList.add('show')
         
      }
}

function draw (){
   return [...cellElements].every(cell=>{
      return cell.classList.contains(X_CLASS)||
      cell.classList.contains(CIRCLE_CLASS)
      
   })
  
}

function placeMArk(cell,currentClass,currentSign){
      cell.classList.add(currentClass);
      cell.innerHTML=currentSign
}

function swapTurns(){
    circleTurn=!circleTurn
    currentsym=!currentsym
}

function wins(current){
      if(cellElements[0].classList.contains(current)==true &&
         cellElements[1].classList.contains(current)==true &&
         cellElements[2].classList.contains(current)){
            return true
         }
      if(cellElements[3].classList.contains(current)==true &&
         cellElements[4].classList.contains(current)==true &&
         cellElements[5].classList.contains(current)){
            return true
      }
      if(cellElements[6].classList.contains(current)==true &&
         cellElements[7].classList.contains(current)==true &&
         cellElements[8].classList.contains(current)){
            return true
         }
      if(cellElements[0].classList.contains(current)==true &&
         cellElements[3].classList.contains(current)==true &&
         cellElements[6].classList.contains(current)){
            return true
      }
      if(cellElements[1].classList.contains(current)==true &&
         cellElements[4].classList.contains(current)==true &&
         cellElements[7].classList.contains(current)){
            return true
      }
      if(cellElements[2].classList.contains(current)==true &&
         cellElements[5].classList.contains(current)==true &&
         cellElements[8].classList.contains(current)){
            return true
      }
      if(cellElements[0].classList.contains(current)==true &&
         cellElements[4].classList.contains(current)==true &&
         cellElements[8].classList.contains(current)){
            return true
      }
      if(cellElements[2].classList.contains(current)==true &&
         cellElements[4].classList.contains(current)==true &&
         cellElements[6].classList.contains(current)){
          return true
      }
      
}
  
      

