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


function generarLaberinto2(matriz,canvas){
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
      c=c+ancho;
    }
    f=f+alto;
  }
}


function GraficaLaberinto(matriz,canvas){
  this.matriz=matriz;
  this.fil=matriz.length;
  this.col=matriz[0].length;
  this.canvas=canvas;
  this.ctx =canvas.getContext("2d");
  this.des = 5;
  this.anchoc = (canvas.width/this.col)-this.des;
  this.altoc = (canvas.height/this.fil)-this.des;

  this.generarLaberinto=function(){
    var f = 0;
    for (var i = 0; i < this.fil; i++) {
      f=f+this.des;
      var c = 0;
      for (var j = 0; j <this.col; j++) {
        c=c+this.des;
        if(this.matriz[i][j]==0){
          this.ctx.fillStyle='rgb(255,255,255)';
          this.ctx.fillRect(c,f,this.anchoc,this.altoc);
        }
        c=c+this.anchoc;
      }
      f=f+this.altoc;
    }
  }

}
