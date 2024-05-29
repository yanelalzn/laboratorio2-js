let btnVerificar = document.getElementById('verificar');

btnVerificar.addEventListener('click',verMensaje)


function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    // Comprobamos si el número es divisible por algún número menor que él mismo
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}


function verMensaje(){
    let valor = document.getElementById('numero').value;
    let resultado = document.getElementById('resultado');
    let mensaje = '';
    

// Ejemplo de uso:
if (esPrimo(valor)) {
    mensaje = 'el numero ingresado es primo';
} else {
    mensaje = 'el numero ingresado no es primo';
}

resultado.textContent = mensaje;

}
