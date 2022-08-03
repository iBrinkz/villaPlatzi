var valMax;
var valMin;

for(i = 0; i < 10; i++){
    var z = aleatoreo(10, 20);
    document.write(z + ", ");
}

function aleatoreo(min, max){
    resultado = Math.floor(Math.random() * (min - max + 1)) + min;
    return resultado;
}