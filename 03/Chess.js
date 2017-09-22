// var str='';
// for(var i=0; i<=15; i++){
//   var className = '';
//   if(i%20){
//     className = 'white'
//   }
//   else{
//     className = 'black'
//   }
//   str+='<div class="'+className+ ' "></div>'
// }
var str='';
for(var i=0; i<4; i++){
  str+='<div class=Board"></div>'

}
var divs = document.querySelectorAll('#Board div');
console.log(divs);
function changeBg(event){
  console.log('changeBg');
  event.currentTarget.style.backgroundColor = 'blue';
}
for(var i=0; i<divs.length; i++){
  divs[i].addEventListener('click', changeBg)
}
