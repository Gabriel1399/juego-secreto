let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 3;

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1;
    console.log(`Numero generado: ${numeroGenerado}`);
    console.log(`lista: ${listaNumerosSorteados}`);
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');

    } else {
        //Si el número generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    

}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroSecreto);
    //console.log(`Intentos: ${intentos}`);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');

    } else {
        //El usuario no acerto
        if(numeroSecreto > numeroDeUsuario) {
            asignarTextoElemento('p', 'El número secreto es mayor');
        } else {
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!!!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();