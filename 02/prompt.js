function my_prompt(){
  var num, total = 0;

  while(true){
    num = prompt("숫자를 입력하세요");
    if(num === null){
      alert("합은 "+ total +" 입니다");
      return total;
    }
    else{
      total += parseInt(num, 10);
    }
  }
}

my_prompt();
