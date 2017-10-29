//para interfaz

/*
function generarLaberinto(matriz,id){
  var table = document.getElementById(id);
  var fil=matriz.length;
  var col=matriz[0].length;
  for (var i = 0; i < fil; i++) {
    table.insertRow();
    for (var j = 0; j <col; j++) {
      table.rows[i].insertCell();
      table.rows[i].cells[j].innerHTML= i + " , "+j;
    }
  }
}
*/


function generarLaberinto(matriz,canvas){
  var canvas = document.getElementById(canvas);
  var ctx = canvas.getContext("2d");
  var fil=matriz.length;
  var col=matriz[0].length;
  var des = 5;
  var ancho = (canvas.width/col)-des;
  var alto = (canvas.height/fil)-des;
  var f = 0;
  for (var i = 0; i < fil; i++) {
    f=f+des;
    var c = 0;
    for (var j = 0; j <col; j++) {
      c=c+des;
      if(matriz[i][j]==0){
        ctx.fillStyle='rgb(255,255,255)';
        ctx.fillRect(c,f,ancho,alto);
      }
      console.log(c+" , "+f);
      c=c+ancho;
    }
    f=f+alto;
  }
}
