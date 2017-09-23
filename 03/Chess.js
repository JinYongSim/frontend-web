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
