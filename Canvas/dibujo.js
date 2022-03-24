var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
while(l < lineas)
{
 yi =10 * l;
 xf = 10 * (l + 1)
 dibujarLineas("blue", 0, yi, xf, 300)
 l = l + 1;
}
dibujarLineas("black", 1, 1, 1, 300);
dibujarLineas("black", 1, 299, 299, 299);
function dibujarLineas(color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}