var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("mi_diagrama");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{ 
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}

function dibujoPorClick()
{
    
 var x = parseInt(texto.value);
 var lineas = x;
var l = 0;
var xi, yf;
var espacio = ancho / lineas;

for(l=0; l < lineas; l++)
{
    xi = espacio * l;
    yf = espacio * (l + 1);
    dibujarLinea("blue", xi, 0, 300, yf);

    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("blue", 0, yi, xf, 300);
}
}

