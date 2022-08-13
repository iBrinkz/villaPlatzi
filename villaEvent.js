var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

var x = 0;
var y = 0;
var numVacas = aleatoreo(5, 15);
var numPollos = aleatoreo(1, 6);
var cerdoX = aleatoreo(0, 420);
var cerdoY = aleatoreo(0, 420);
//Array de las coordenadas de las vacas y pollos
var arrVacasX = [];
var arrVacasY = [];
var arrPollosX = [];
var arrPollosY = [];
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
    cargaOk: false
};
var limite = {
    IZQUIERDO: 0,
    DERECHO: 420,
    ARRIBA: 0,
    ABAJO: 420
};
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
//crear una instancia mediante un atributo de una variable
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;//asignar la ruta de la imagen
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

document.addEventListener("keyup", dibujarTeclado);

//funcion para dibujar en el teclado que sera llamado en el evento listener
function dibujarTeclado(evento){
    var desplazamiento = 10;

    switch(evento.keyCode){
        case teclas.DOWN:
            if(cerdoY<=limite.ABAJO){
                cerdoY = cerdoY + desplazamiento;
            }
            dibujar();
        break;
        case teclas.UP:
            if(cerdoY>=limite.ARRIBA){
                cerdoY = cerdoY - desplazamiento;
            }
            dibujar();
        break;
        case teclas.LEFT:
            if(cerdoX>=limite.IZQUIERDO){
                cerdoX = cerdoX - desplazamiento;
            }
            dibujar();
        break;
        case teclas.RIGHT:
            if(cerdoX<=limite.DERECHO){
                cerdoX = cerdoX + desplazamiento;
            }
            dibujar();
        break;
        default:
            
        break;
    }
}

function cargarFondo(){
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas(){
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollos(){
    pollo.cargaOk = true;
    dibujar();
}

function cargarCerdos(e){
    cerdo.cargaOK = true;
    dibujar();
}
//Guarda las coordenadas de las vacas
for(i =0; i < numVacas; i++){
    x = aleatoreo(0, 10);
    y = aleatoreo(0, 10);
    x = x * 40;
    y = y * 40;
    arrVacasX[i] = x;
    arrVacasY[i] = y;
}
//Guarda las coordenadas de los pollos
for(i = 0; i < numPollos; i++){
    x = aleatoreo(0, 10);
    y = aleatoreo(0, 10);
    x = x * 40;
    y = y * 40;
    arrPollosX[i] = x;
    arrPollosY[i] = y;
}

function dibujar(){
    if(fondo.cargaOK){
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK){
        for(i =0; i < numVacas; i++){
            papel.drawImage(vaca.imagen, arrVacasX[i], arrVacasY[i]);
        }
    }
    if(pollo.cargaOk){
        for(i = 0; i < numPollos; i++){
            papel.drawImage(pollo.imagen, arrPollosX[i], arrPollosY[i]);
        }
    }
    if(cerdo.cargaOK){

            papel.drawImage(cerdo.imagen, cerdoX, cerdoY);
  
    }
}
//Genera un numero aleatoreo
function aleatoreo(min, max){
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}