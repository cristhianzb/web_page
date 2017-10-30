//funciones de la pagina Game
var nickname = "nick";
var puntos=0;
var nivel=1;


setDatos(nickname,nivel,puntos);

var m1 = nextNivel();
var m2 = nextMonedas();


setJuego();
//necesarios
var inter;
var lab;
var recorrido;
//necesarios


function play(){
  var inst =getInstrucciones();
  lab.recorrido=recorrer(inst, copiarMatriz(m1),1,0,9,9);
  inter = setInterval(mover,500);
}

function setJuego(){
  lab = new GraficaLaberinto(m1,document.getElementById("canvas"),[],m2);
  lab.generarLaberinto();
}


function nextNivel(){
  var ans=[];
  if(nivel<=7){
    ans = copiarMatriz(niveles[nivel-1]);
  }else {
    alert("Felicitaciones, Ganaste!!!!");
  }
  return ans;
}

function nextMonedas(){
  var ans=[];
  if(nivel<=7){
    ans = copiarMatriz(monedas_niveles[nivel-1]);
  }
  return ans;
}

function getInstrucciones(){
  var ins = document.getElementById("instrucciones").value;
  var cadena = ins.split(",");
  return cadena;
}




function mover() {
  var p;
  if(lab.recorrido.length>0){
    p = lab.sigPaso();
    //lab.dibCirculo(p.x,p.y,10,'rgb(255,0,0)');
    lab.dibImagen(p.x,p.y,"personaje");
    setNextPuntaje(puntos);
  }else{
    clearInterval(inter);
    console.log("detenido");

  }
}




function detenerSetInterval(){
  clearInterval(inter);
}

function setNivel(ni){
  var cadena = "Nivel:"+ni;
  $("#nivel").html(cadena);
}

function setPuntaje(p){
  var cadena = "Puntaje:"+p;
  $("#puntaje").html(cadena);
}

function setNextPuntaje(miPuntaje){
  var ni = miPuntaje + lab.puntaje;
  var cadena = "Puntaje:"+ni;
  $("#puntaje").html(cadena);
}

function setNick(nick){
  var cadena = "Nickname:"+nick;
  $("#nick").html(cadena);
}

function setDatos(nickame,nivel,puntos){
  setNick(nickame);
  setNivel(nivel);
  setPuntaje(puntos);
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
