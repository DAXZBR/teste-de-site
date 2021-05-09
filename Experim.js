function ligar() {
  
 var imgon = document.getElementById('lamp').src = "on.jpg"
 
 var msgalert = alert(" ocara clicou mesmo kkkkk que gay kkkk!!!")
 

  


}

function desligar() {
  
var i = document.getElementById('lamp').src = "off.jpg"
  
}


function piscar() {
  
  
  var intervalo = 0
  var contador = 0
  
  while (contador < 10) {
    intervalo += 300
    setTimeout("document.getElementById('lamp').src ='on.jpg'; " ,intervalo); intervalo += 300;
    
    setTimeout("document.getElementById('lamp').src ='off.jpg'; " ,intervalo); contador ++;
  }

  
  
}
  
  
  
