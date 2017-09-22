// var log = document.getElementById('log')
//
// debugger;
// console.log(log);
//
// log.innerHTML='안녕';
// var log = document.querySelectorAll('log');
// console.log(log)
// var a = document.querySelectorAll('#log a'); //쿼리셀렉터 할때는 #을 붙여준다.
// console.log(a.length, a[0], a[1])

// var log = document.querySelectorAll('log');
// console.log(log)
//
// var div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";
// document.body.appendChild(div);
//
// log.innerHTML=log'<div style="color:red">hello</div>'
// window.onload=function(){
//     alert("load");
// };

// window.addEventListener('load', function(){
//     alert("load1");
// }); //실무용
// window.addEventListener('load', function(){
//     alert("load2");
// }); //1실행되고 그다음 2가 실행된다.
// window.addEventListener('load', function(){
//     console.log("load1");
// }); //실무용
// window.addEventListener('load', function(){
//     console.log("load2");
// }); //1실행되고 그다음 2가 실행된다.
//

//  var log = document.getElementById('log')
// log.addEventListener('click',function(){
// console.log('log click')
// });
 // var log = document.getElementById('log')
 // function printLog(event){
 //   console.log('log!!!')
 //   debugger;
 // }
 // log.addEventListener('click',printLog)

var divs = document.querySelectorAll('#wrap div');
console.log(divs);
function changeBg(event){
  console.log('changeBg');

  // divs[0].style.backgroundColor = 'blue';
  // console.log(event.currentTarget);
  event.currentTarget.style.backgroundColor = 'blue';
}
for(var i=0; i<divs.length; i++){
  divs[i].addEventListener('click', changeBg)
}
