//funciones de la pagina Game



//datos iniciales
var nickname = localStorage.nombre;
var nivel=Number(localStorage.getItem(nickname)[0]);
var puntos=Number(localStorage.getItem(nickname).substring(1,localStorage.getItem(nickname).length));

//globales
setDatos(nickname,nivel,puntos);
var m1 = nextNivel();
var m2 = nextMonedas();
setJuego();
var inter;
var lab;
var recorrido;
var p;//punto actual
var ini;
var fin;
var recorrido_length;



function play(){
  var inst =getInstrucciones();
  ini =getIni();
  fin =getFin();
  lab.recorrido=recorrer(inst, copiarMatriz(m1),ini.f,ini.c,fin.f,fin.c);
  recorrido_length = lab.recorrido.length;
  inter = setInterval(mover,500);
}

function getFin(){
  var ans ={f:0,c:0};
  for (var i = 0; i < m1.length; i++) {
    for (var j = 0; j < m1[0].length; j++) {
      if(m1[i][j]==-3){
        ans.f=i;
        ans.c=j;
      }
    }
  }
  return ans;
}

function getIni(){
  var ans ={f:0,c:0};
  for (var i = 0; i < m1.length; i++) {
    for (var j = 0; j < m1[0].length; j++) {
      if(m1[i][j]==-2){
        ans.f=i;
        ans.c=j;
      }
    }
  }
  return ans;
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
  if(recorrido_length>0){
    p = lab.sigPaso();
    recorrido_length--;
    lab.dibImagen(p.x,p.y,"personaje");
    setNextPuntaje();
  }else{
    clearInterval(inter);
    if((fin.f*(lab.altoc+lab.des))==p.y && (fin.c*(lab.anchoc+lab.des))==p.x){
      nivel++;
      puntos = puntos + Number(lab.puntaje);
      var cadena = ""+Number(nivel)+""+Number(puntos);
      localStorage.setItem(localStorage.nombre,cadena);
    }else {
      alert("no lo lograste, intenta de nuevo");
    }
    document.location.reload();
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

function setNextPuntaje(){
  var ni = puntos + Number(lab.puntaje);
  var cadena = "Puntaje:"+Number(ni);
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
