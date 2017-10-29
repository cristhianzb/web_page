//funciones de la pagina Game
var lab = new GraficaLaberinto(copiarMatriz(nivel4),document.getElementById("canvas"),[{x:1,y:1},{x:2,y:2}]);
var recorrido =recorrer([1,1,2,2,1], nivel4,1,0,9,9);
lab.generarLaberinto();


function mover() {
  var p = lab.sigPaso();
  lab.dibCirculo(p.x,p.y,10,'rgb(255,0,0)');
}


setInterval(mover,5000);








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
