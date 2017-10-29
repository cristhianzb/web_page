//los 0 significan via libre
//los 10 significan muro
//los 1 significa ya recorrido

//crea una matriz dadas las filas y columnas
function generarMatriz(fil,col){
    var matriz = new Array(fil);
    for(var i=0;i<matriz.length;i++){
	     matriz[i]=new Array(col);
    }
    return matriz;
}

//imprime en el id printer
function print(string){
  document.getElementById("printer").innerHTML=string;
}

function printId(string,id){
  document.getElementById(id).innerHTML=string;
}

//devuelve un string que imprime una matriz
function printMyMatrix(matriz){
  var ans="[";
  for(var i=0;i<matriz.length;i++){
    ans = ans +"[";
    for(var j=0;j<matriz[0].length;j++){
      ans = ans + matriz[i][j];
      if(j<matriz[0].length-1){
        ans = ans +",";
      }
    }
    ans = ans +"]";
    if(i<matriz.length-1){
      ans = ans +"  <br>";
    }
  }
  return ans+"]";
}


//devuelve un string que imprime una matriz
function printMatrix(matriz){
  var ans="";
  for(var i=0;i<matriz.length;i++){
    ans = ans +"[";
    for(var j=0;j<matriz[0].length;j++){
      ans = ans + matriz[i][j];
      if(j<matriz[0].length-1){
        ans = ans +",";
      }
    }
    ans = ans +"]";
    if(i<matriz.length-1){
      ans = ans +"  <br>";
    }
  }
  return ans;
}



//llena una matriz con el valor de x
function llenarMatriz(matriz,x){
  for(var i=0;i<matriz.length;i++){
    for(var j=0;j<matriz[0].length;j++){
      matriz[i][j]=x;
    }
  }
}


//devuelve el recorrido realizado en una matriz
function recorrer(inst, matriz,fil,col,ffil,fcol){
  // 0 up,1 right, 2 down,3 left
  var lim=8;
  var recorrido=[];
  var up,right,down,left;
  if(inst.length>0){
    var sa= inst.shift();
    while(esValido(fil,col,matriz,lim)&&inst.length>=0 && !(fil==ffil && col==fcol)){
      recorrido.push({y:fil,x:col});
      if(matriz[fil][col]==-1){
        //decidir
        sa= inst.shift();
      }
      if(matriz[fil][col]!=-1){
        matriz[fil][col]++;
      }
      //si va arriba y puede continuar
      up=esValido(fil-1,col,matriz,lim);
      if((sa==0) && up){
        col=col;
        fil=fil-1;
      }else{
        if((sa==0) && !up){
          sa = inst.shift();
          matriz[fil][col]--;
          continue;
        }
        //si va a la derecha y puede continuar
        right=esValido(fil,col+1,matriz,lim);
        if((sa==1) && right){
          col=col+1;
          fil=fil;
        }else{
          if((sa==1) && !right){
            sa = inst.shift();
            matriz[fil][col]--;
            continue;
          }
          //si va hacia abajo y puede continuar
          down = esValido(fil+1,col,matriz,lim);
          if((sa==2) && down){
            col=col;
            fil=fil+1;
          }else{
            if((sa==2) && !down){
              sa = inst.shift();
              matriz[fil][col]--;
              continue;
            }
            //si va hacia la izq y puede continuar
            left = esValido(fil,col-1,matriz,lim);
            if((sa==3) && left){
              col=col-1;
              fil=fil;
            }else{
              if((sa==3) && !left){
                sa = inst.shift();
                matriz[fil][col]--;
              }
            }
          }
        }
      }
    }
    if(fil==ffil && col==fcol){
      recorrido.push({pf:fil,pc:col});
      matriz[fil][col]++;
    }
  }
  return recorrido;
}




//retorna un bool, true cuando la posicion x,y esta dentro de la matriz
function esValido(fil,col,matriz,lim){
  return (0<=fil && fil<matriz.length)&&(0<=col && col<matriz[0].length)&&matriz[fil][col]<lim;
}


//devuelve un bool, true si desde x,y se puede mover a cualquier lado
function seMueve(fil,col,matriz,lim){
  var ans = false;
  //arriba
  if(esValido(fil-1,col,matriz)){
    ans=true;
  }else{
    //derecha
    if(esValido(fil,col+1,matriz)){
      ans=true;
    }else{
      //abajo
      if(esValido(fil+1,col,matriz)){
        ans=true;
      }else{
        //izquierda
        if(esValido(fil,col-1,matriz)){
          ans=true;
        }
      }
    }
  }
  return ans;
}


function Laberinto(matriz,lim,canvas,nivel) {
  this.matriz=matriz;
  this.lim=lim;
  this.canvas=canvas;
  this.nivel=nivel;
  this.getNivel=function(){
    return "el nivel es "+nivel;
  };
}
