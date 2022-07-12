// variables json de las funciones de las flechas del teclado----------------
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var cant = aleatorio (1, 5);
// variables json y function para poder insertar imagen de tile.png----------------
var fondo = {
    url: "./images/tile.png",
    cargaOK: false,
}
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}
// variables json y function para poder insertar imagen de vaca.png----------------
var vaca = {
    url: "./images/vaca.png",
    cargaOK: false,
    x:[],//se crea variables con array para que guarden la posición de x para re dibujar
    y:[] //se crea variables con array para que guarden la posición de x para re dibujar
}
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
function cargarVacas() {
    vaca.cargaOK = true;
    dibujar();
}
// variables json y function para poder insertar imagen de cerdo.png----------------
var cerdo = {
    url: "./images/cerdo.png",
    cargaOK: false,
    x: 200,
    y: 200
}
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);
function cargarCerdos() {
    cerdo.cargaOK = true;
    dibujar();
}
// variables json y function para poder insertar imagen de pollo.png----------------
var pollo = {
    url: "./images/pollo.png",
    cargaOK: false,
    x:[],//se crea variables con array para que guarden la posición de x para re dibujar
    y:[] //se crea variables con array para que guarden la posición de y para re dibujar
}
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);
function cargarPollos() {
    pollo.cargaOK = true;
    dibujar();
}
//function dibujar imágenes en el canvas----------------------------------------------
function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen,0,0);
    }
    if (vaca.cargaOK) {
        for (var v = 0; v < cant; v++) {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            vaca.x[v] = x;
            vaca.y[v] = y;
            papel.drawImage(vaca.imagen , x, y);
        }
    }
    // se comentan lineas para mover al cerdo mas adelante
    if (cerdo.cargaOK) {
        /*for (var c = 0; c < cant; c++) {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            cerdo.x = x;
            cerdo.y = y;
            papel.drawImage(cerdo.imagen,x,y);
        }*/ // se llama una imagen del cerdo en esa posición
        papel.drawImage(cerdo.imagen,cerdo.x, cerdo.y);
    }
    if (pollo.cargaOK) {
        for (var p = 0; p < cant; p++) {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            pollo.x[p] = x;
            pollo.y[p] = y;
            papel.drawImage(pollo.imagen , x, y);
        }
    }
}
// function números aleatorios-------------------------------------------------------
function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
    return resultado;
}
//re dibujamos las imágenes guardadas en el array para poder mover al cerdo-----------
//refrescando la imagen
function dibujarOtraVez(){
	if(fondo.cargaOK){
		papel.drawImage(fondo.imagen , 0 , 0);
	}
	if(vaca.cargaOK){
		for( var v = 0; v < cant; v++)
		{
			papel.drawImage(vaca.imagen , vaca.x[v] , vaca.y[v]);
		}
	}
	if(pollo.cargaOK){
    for( var p = 0; p < cant; p++)
		{
			papel.drawImage(pollo.imagen , pollo.x[p] , pollo.y[p]);
		}
	}
}
//function y llamada de instrucciones para poder mover el cerdo----------------
function moverCerdo(x,y) {
    papel.drawImage(cerdo.imagen,x,y);
}
document.addEventListener("keyup", moverTecla);
function moverTecla(evento){
        var movimiento = 5;
        switch (evento.keyCode)
    {
        case teclas.UP:
            dibujarOtraVez();
            moverCerdo(cerdo.x,cerdo.y);
            cerdo.y = cerdo.y - movimiento;
        break;
        case teclas.DOWN:
            dibujarOtraVez();
            moverCerdo(cerdo.x,cerdo.y);
            cerdo.y = cerdo.y + movimiento;
        break;
        case teclas.LEFT:
            dibujarOtraVez();
            moverCerdo(cerdo.x,cerdo.y);
            cerdo.x = cerdo.x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarOtraVez();
            moverCerdo(cerdo.x,cerdo.y);
            cerdo.x = cerdo.x + movimiento;
        break;
        default:
            console.log("Otra tecla");
        break;
    }
}