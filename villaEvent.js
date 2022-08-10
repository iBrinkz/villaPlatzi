var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

var x = 0;
var y = 0;
var numVacas = aleatoreo(5, 15);
var numCerdos = aleatoreo(0, 10);
var numPollos = aleatoreo(3, 12);
//variables con atributos
var fondo = {
    url: "tile.webp",
    cargaOK: false
};

var vaca = {
    url: "vaca.webp",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.webp",
    cargaOK: false
};

var pollo = {
    url: "pollo.webp",
    cargaOK: false
};
//crear una instancia mediante un atributo de una variable
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;//asignar la ruta de la imagen
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo(){
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas(){
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos(){
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollos(){
    pollo.cargaOK = true;
    dibujar();
}

function dibujar(){
    //dibuja 4 veces el fondo ya que hay 3 imagenes mas
    if(fondo.cargaOK){
        papel.drawImage(fondo.imagen, 0, 0);
    }
        
    if(vaca.cargaOK){
        for(i =0; i < numVacas; i++){
            x = aleatoreo(0, 10);
            y = aleatoreo(0, 10);
            x = x * 40;
            y = y * 40;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(cerdo.cargaOK){
        for(i = 0; i < numCerdos; i++){
            x = aleatoreo(0, 10);
            y = aleatoreo(0, 10);
            x = x * 40;
            y = y * 40;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if(pollo.cargaOK){
        for(i = 0; i < numPollos; i++){
            x = aleatoreo(0, 10);
            y = aleatoreo(0, 10);
            x = x * 40;
            y = y * 40;
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}

function aleatoreo(min, max){
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}