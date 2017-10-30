var m = 9;
var d = -1;
var v = 1;
var i = -2;
var f = -3

var nivel1=
[[m,m,m,m,m,m,m,m,m,m],
[i,0,0,0,m,m,m,m,m,m],
[m,m,m,0,m,m,m,m,m,m],
[m,m,m,0,m,m,m,m,m,m],
[m,m,m,0,m,m,m,m,m,m],
[m,m,m,0,m,m,m,m,m,m],
[m,m,m,0,0,0,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,0,0,0,f]];

var monedas_nivel1=
[[m,m,m,m,m,m,m,m,m,m],
[i,0,v,v,m,m,m,m,m,m],
[m,m,m,v,m,m,m,m,m,m],
[m,m,m,0,m,m,m,m,m,m],
[m,m,m,0,m,m,m,m,m,m],
[m,m,m,0,m,m,m,m,m,m],
[m,m,m,0,v,v,m,m,m,m],
[m,m,m,m,m,v,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,0,0,0,f]];

var nivel2=
[[m,m,m,m,m,m,m,m,m,m],
[i,0,0,d,0,d,0,0,0,d],
[m,m,m,0,m,0,m,m,m,m],
[m,m,m,0,m,0,m,m,m,m],
[m,m,m,0,m,0,m,m,m,m],
[m,m,m,0,m,0,m,m,m,m],
[m,m,m,0,0,d,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,0,0,0,f]];

var monedas_nivel2=
[[m,m,m,m,m,m,m,m,m,m],
[i,0,0,v,v,v,0,0,0,v],
[m,m,m,0,m,v,m,m,m,m],
[m,m,m,v,m,v,m,m,m,m],
[m,m,m,v,m,v,m,m,m,m],
[m,m,m,v,m,v,m,m,m,m],
[m,m,m,0,0,v,m,m,m,m],
[m,m,m,m,m,v,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,0,v,0,f]];

var nivel3=
[[m,m,m,m,m,m,m,m,m,m],
[i,0,0,d,0,0,0,d,0,d],
[m,m,m,0,m,m,m,0,m,m],
[m,m,m,0,m,m,m,0,m,m],
[m,m,m,0,m,m,m,d,m,m],
[m,m,m,0,m,m,m,m,m,m],
[m,m,m,0,0,0,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,0,0,0,f]];

var monedas_nivel3=
[[m,m,m,m,m,m,m,m,m,m],
[i,0,0,d,0,v,0,d,0,v],
[m,m,m,0,m,m,m,0,m,m],
[m,m,m,v,m,m,m,v,m,m],
[m,m,m,v,m,m,m,v,m,m],
[m,m,m,v,m,m,m,m,m,m],
[m,m,m,v,0,0,m,m,m,m],
[m,m,m,m,m,v,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,0,v,0,f]];

var nivel4=
[[m,m,m,m,m,m,m,m,m,m],
[i,0,0,d,0,d,0,0,0,d],
[m,m,m,0,m,0,m,m,m,m],
[m,m,m,0,m,0,m,m,m,m],
[m,m,m,0,m,0,m,m,m,m],
[m,m,m,0,m,0,m,m,m,m],
[m,m,m,d,0,d,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,0,0,0,f]];

var monedas_nivel4=
[[m,m,m,m,m,m,m,m,m,m],
[i,0,0,d,v,v,0,0,0,0],
[m,m,m,0,m,v,m,m,m,m],
[m,m,m,0,m,v,m,m,m,m],
[m,m,m,v,m,v,m,m,m,m],
[m,m,m,0,m,0,m,m,m,m],
[m,m,m,d,0,d,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,0,0,0,f]];

var nivel5=
[[i,m,m,m,m,m,m,m,m,m],
[0,0,d,0,m,m,m,m,m,m],
[m,m,0,m,m,m,m,m,m,m],
[m,m,0,m,m,m,m,m,m,m],
[m,m,0,m,m,m,m,0,0,f],
[m,m,0,m,m,m,m,0,m,m],
[m,m,0,0,0,d,0,0,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,0,0,0,d]];


var monedas_nivel5=
[[i,m,m,m,m,m,m,m,m,m],
[0,0,d,v,m,m,m,m,m,m],
[m,m,0,m,m,m,m,m,m,m],
[m,m,0,m,m,m,m,m,m,m],
[m,m,v,m,m,m,m,0,0,f],
[m,m,v,m,m,m,m,0,m,m],
[m,m,v,v,0,v,0,0,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,v,m,m,m,m],
[m,m,m,m,m,0,0,v,0,0]];


var nivel6=
[
[d,0,0,d,0,0,0,0,0,i],
[0,m,m,0,m,m,m,m,m,m],
[0,m,m,0,m,m,m,m,m,m],
[0,0,d,0,m,m,m,m,m,m],
[m,m,0,m,m,m,m,0,d,m],
[m,m,0,m,m,m,m,0,m,m],
[m,m,0,0,0,d,0,0,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,0,0,0,f]];


var monedas_nivel6=
[
[d,0,v,d,0,0,v,0,0,i],
[0,m,m,0,m,m,m,m,m,m],
[0,m,m,0,m,m,m,m,m,m],
[0,0,v,0,m,m,m,m,m,m],
[m,m,0,m,m,m,m,0,d,m],
[m,m,0,m,m,m,m,0,m,m],
[m,m,v,0,0,v,0,v,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,0,v,0,f]];


var nivel7=
[
[d,0,0,d,0,0,0,d,0,i],
[0,m,m,0,m,m,m,0,m,m],
[0,m,m,0,m,m,m,0,m,m],
[0,0,0,d,0,0,0,d,m,m],
[m,m,m,0,m,m,m,0,m,m],
[m,m,m,0,m,m,m,0,m,m],
[m,m,m,0,0,d,0,0,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,0,0,0,0,f]];


var monedas_nivel7=
[
[v,0,0,v,0,v,0,d,0,i],
[0,m,m,0,m,m,m,0,m,m],
[0,m,m,0,m,m,m,0,m,m],
[v,0,v,d,0,v,0,d,m,m],
[m,m,m,0,m,m,m,0,m,m],
[m,m,m,v,m,m,m,v,m,m],
[m,m,m,0,0,d,0,0,m,m],
[m,m,m,m,m,0,m,m,m,m],
[m,m,m,m,m,v,m,m,m,m],
[m,m,m,m,m,0,0,v,0,f]];
