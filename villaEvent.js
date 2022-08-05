var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.webp",
    cargaOK: false
};

var vaca = {
    url: "vaca.webp",
    cargaOK: false
};


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);


function cargarFondo(){
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas(){
    vaca.cargaOK = true;
    dibujar();
}

function dibujar(){
    if(fondo.cargaOK){
        papel.drawImage(fondo.imagen, 0, 0);
    }
    
    if(vaca.cargaOK){
        papel.drawImage(vaca.imagen, 10, 150);
    }
}



function aleatoreo(min, max){
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}