var imagenes =[];
imagenes["Charizar"] = "charizar.png";
imagenes["Pikachu"] = "pika.png";
imagenes["Squirtle"] = "sq.png";



class Pokemon
{
    constructor(n, t, v, a)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.tipo = t;
        this.vida = v;
        this.ataque = a; 
        this.imagen.src = imagenes[this.nombre];
       
        
    }
 hablar()
 {
     alert(this.nombre);
 }
  mostrar()
  {
      document.body.appendChild(this.imagen);  
      document.write("<p>"); 
      document.write("<strong>" + this.nombre + "</strong><br />");
      document.write("vida: " + this.vida + "<br />");
      document.write("ataque: " + this.ataque + "<br />");
      document.write("tipo: " + this.tipo + "<br />" + "<hr />");
      document.write("</p>");
  }
}

var charizar = new Pokemon("Charizar", "Fuego", 100, 200);
var pikachu = new Pokemon("Pikachu", "Electric", 50, 100);
var squirtle= new Pokemon("Squirtle", "Agua", 200, 80);



charizar.mostrar();
pikachu.mostrar();
squirtle.mostrar();