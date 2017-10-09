var tablero,fil,col;
fil=20;
col=20;

generarMatriz(tablero, fil,col);







function generarMatriz(tablero, fil,col){
    tablero = new Array(fil);
    for(var i=0;i<tablero.length;i++){
	tablero[i]=new Array(col);
    }
}
