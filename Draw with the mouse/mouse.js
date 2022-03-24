var papel = document.getElementById("area");
var cuadro = papel.getContext("2d")
var rect = papel.getBoundingClientRect();
var x = 0, y = 0, dibujando = false, color = "black", grosor = 1;

function defcolor (c)
{
  color = c;
}
function defgrosor (g)
{
  grosor = g;
}

papel.addEventListener("mousedown",
function (e)
{
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  dibujando = true;
});

papel.addEventListener("mousemove",
function(e)
{
if(dibujando===true)
{
  dibujar (x, y, e.clientX - rect.left, e.clientY - rect.top)
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
}
});
papel.addEventListener("mouseup",
function(e)
{
if (dibujando===true)
{
  dibujar (x, y, e.clientX - rect.left, e.clientY - rect.top)
  x = 0;
  y = 0;
  dibujando = false;
}
});

function dibujar(x1, y1, x2, y2)
{
cuadro.beginPath();
cuadro.strokeStyle = color;
cuadro.lineWidth = grosor;
cuadro.moveTo(x1, y1);
cuadro.lineTo(x2, y2);
cuadro.stroke();
cuadro.closePath();
}