//funciones de la pagina Game
setNivel();
var inst =[1,1,2,2,1];
var m1 = copiarMatriz(nivel4);
var m2 = copiarMatriz(monedas_nivel4);
var recorrido =recorrer(inst, nivel4,1,0,9,9);
  var lab = new GraficaLaberinto(m1,document.getElementById("canvas"),recorrido,m2);
  lab.generarLaberinto();
var inter;



function mover() {
  var p;
  if(recorrido.length>0){
    p = lab.sigPaso();
    //lab.dibCirculo(p.x,p.y,10,'rgb(255,0,0)');
    lab.dibImagen(p.x,p.y,"personaje");
    setPuntaje(0);
  }else{
    clearInterval(inter);
    console.log("detenido");
  }
}


function play(){
  var ins = document.getElementById("instrucciones").value;
  var cadena = ins.split(",");
  alert(cadena[1]);
  inter = setInterval(mover,500);
}

function detenerSetInterval(){
  clearInterval(inter);
}

function setNivel(){
  var ni = 0;
  var cadena = "Nivel:"+ni;
  $("#nivel").html(cadena);
}

function setPuntaje(ini){
  var ni = ini + lab.puntaje;
  var cadena = "Puntaje:"+ni;
  $("#puntaje").html(cadena);
}





//generarLaberinto2(nivel3,"canvas");
//console.log(lab.getNivel());

//llenarMatriz(tablero,1);

//var linea = [1,2,3,4,5];
//print(tablero);
//var instrucciones =[1,2,1,2,1];//ok nivel1
//var instrucciones =[1,2,1];//ok nivel2

//var instrucciones = [1,1,2,3,0,1,2,2,1];//nivel4 ok
//var instrucciones =[];
//var ruta = recorrer(instrucciones, nivel4,1,0,9,9);
//print(ruta[10].pf+" "+ruta[10].pc);
//print(printMyMatrix(nivel4));
//var prueba=[];
//var elem = prueba.shift();
//print(elem);
