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


function borrarInst(){
  var inst = document.getElementById("instrucciones");
  var cadena = inst.value.substring(0,inst.value.length-1);
  inst.value=cadena;
}

function agregarArriba(){
  var inst = document.getElementById("instrucciones");
  var cadena="";
  if (cadena==inst.value) {
    cadena = "0";
  }else {
    cadena = inst.value+",0";
  }
  inst.value=cadena;
}


function agregarAbajo(){
  var inst = document.getElementById("instrucciones");
  var cadena="";
  if (cadena==inst.value) {
    cadena = "2";
  }else {
    cadena = inst.value+",2";
  }
  inst.value=cadena;
}


function agregarDer(){
  var inst = document.getElementById("instrucciones");
  var cadena="";
  if (cadena==inst.value) {
    cadena = "1";
  }else {
    cadena = inst.value+",1";
  }
  inst.value=cadena;
}


function agregarIzq(){
  var inst = document.getElementById("instrucciones");
  var cadena="";
  if (cadena==inst.value) {
    cadena = "3";
  }else {
    cadena = inst.value+",3";
  }
  inst.value=cadena;
}


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


function GraficaLaberinto(matriz,canvas,recorrido,monedas){
  this.recorrido=recorrido;
  this.matriz=matriz;
  this.fil=matriz.length;
  this.col=matriz[0].length;
  this.canvas=canvas;
  this.ctx =canvas.getContext("2d");
  this.des = 5;
  this.anchoc = (canvas.width/this.col)-this.des;
  this.altoc = (canvas.height/this.fil)-this.des;
  this.monedas=monedas;
  this.puntaje=0;

  this.generarLaberinto=function(){
    var f = 0;
    for (var i = 0; i < this.fil; i++) {
      f=f+this.des;
      var c = 0;
      for (var j = 0; j <this.col; j++) {
        c=c+this.des;
        if(this.matriz[i][j]==0 ||this.matriz[i][j]==-1 ){
          this.ctx.fillStyle='rgb(255, 223, 128)';
          this.ctx.fillRect(c,f,this.anchoc,this.altoc);
        }
        c=c+this.anchoc;
      }
      f=f+this.altoc;
    }
    this.dibMonedas();
  };

  this.sigPaso=function(){
    var point = {x:0,y:0};
    if(this.recorrido.length>0){
      point = this.recorrido.shift();
      //monedas
      if(this.monedas[point.y][point.x]==1){
        this.monedas[point.y][point.x]=0;
        this.puntaje++;
      }
      this.generarLaberinto();
      var px = (point.x*(this.anchoc+this.des));//+this.anchoc/2;
      var py = (point.y*(this.altoc+this.des));//+this.altoc/2;
      point.x=px;
      point.y=py;
    }
    return point;
  };

  this.dibCirculo = function(x,y,radio,color){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    this.generarLaberinto();
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x,y,radio,0,2*Math.PI,false);
    this.ctx.stroke();
  };

  this.dibImagen = function(x,y,id){
    var imagen = document.getElementById(id);
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    this.generarLaberinto();
    this.ctx.drawImage(imagen,x,y);
  };

  this.dibMonedas = function(){
    var imagen = document.getElementById("moneda");
    var px,py;
    for (var i = 0; i < this.monedas.length; i++) {
      for (var j = 0; j <this.monedas[0].length; j++) {
        if (this.monedas[i][j]==1) {
          px = j*(this.anchoc+1.5*this.des);
          py = i*(this.anchoc+1.5*this.des);
          this.ctx.drawImage(imagen,px,py);
        }

      }
    }

  };


}
