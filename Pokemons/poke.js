
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
