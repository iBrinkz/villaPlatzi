var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
var mapa = "tile.webp";

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujarFondo);

var vaca = new Image();
vaca.src = "vaca.webp";
vaca.addEventListener("load", dibujarVaca);
var cerdo = new Image();
cerdo.src = "cerdo.webp";
cerdo.addEventListener("load", dibujarCerdo);
var pollo = new Image();
pollo.src = "pollo.webp";
pollo.addEventListener("load", dibujarPollo);


function dibujarFondo(){
    papel.drawImage(fondo, 0, 0);
}

function dibujarVaca(){
    papel.drawImage(vaca, 10, 10);
}

function dibujarCerdo(){
    papel.drawImage(cerdo, 10, 300);
}

function dibujarPollo(){
    papel.drawImage(pollo, 300, 150);
}

function aleatoreo(min, max){
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}