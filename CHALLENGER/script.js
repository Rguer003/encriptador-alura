var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var munieco = document.querySelector(".caja-muneco");
var contenedor = document.querySelector(".caja-interior");
var resultado = document.querySelector(".texto-resultado");
const contenedor1 = document.querySelector(".caja-exterior")
const contenedor2 = document.querySelector(".caja-interior2")
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;


function encriptar(){
    console.log("clic")
    ocultarAdelante();
    var cajaTexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajaTexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto(){
    var cajaTexto = document.querySelector(".primer-texto")
    return cajaTexto.value;
}

//funcion ingresar datos

function verificarCampo() {
    var campo = caja-interior.getElementById("campo");
    var cuadroTexto = caja-interior.getElementById("cuadroTexto");
    
    if (campo.value === "") {
      cuadroTexto.style.display = "block";
    } else {
      cuadroTexto.style.display = "none";
    }
  }
  


//termino funcion ingresar datos
function ocultarAdelante(){
    contenedor1.classList.add("ocultar");
    contenedor2.classList.remove("ocultar");
}


function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i + 3;
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

    }

const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Copiado");
    })