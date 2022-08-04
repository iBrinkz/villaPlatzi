var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
var mapa = "tile.webp";

var imagen = new Image();
imagen.src = mapa;
imagen.addEventListener("load", dibujar);

function dibujar(){
    papel.drawImage(imagen, 0, 0);
}

for(i = 0; i < 10; i++){
    var z = aleatoreo(30, 140);
    document.write(z + ", ");
}

function aleatoreo(min, max){
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}