
var num = document.getElementById('box')
var botao = document.getElementsByClassName('btn')



for (var i = 0; i < botao.length; i++) {
    botao[i].addEventListener('click', press);
  }
  
  function press() {
    num.value = this.innerText;
  }