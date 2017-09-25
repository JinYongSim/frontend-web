//체스판 자바스크립트
var board = ''
var chess = document.getElementById('chess');

for (i = 1; i <= 16; i++){
  className='';
  if (i % 8 == 1 || i % 8 == 3 || i % 8 == 6 || i % 8 == 0)
    className = "white";

  else {
    className = "black";
  }
  board += '<div class =' + className + '>' + '</div>'
}

chess.innerHTML = board;

var divs = document.querySelectorAll('#chess div');
console.log(divs);

var prevTarget = null;
function changeBg(event){
  console.log('changeBg');
  if (prevTarget !== null){
    prevTarget.style.backgroundColor = '';
  }
  event.currentTarget.style.backgroundColor = 'blue';
  prevTarget = event.currentTarget;
}

for (var i = 0; i < divs.length; i++){
  divs[i].addEventListener('click', changeBg)
}
