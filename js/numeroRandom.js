let numeroRandom;

function generarNumeroRandom() {
    numeroRandom = Math.floor(Math.random() * 100) + 1;
}

function mostrarAviso(mensaje) {
    alert(mensaje);
}

document.getElementById('startBtn').addEventListener('click', function () {
    generarNumeroRandom();
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('gameSection').style.display = 'block';
});

document.getElementById('submitBtn').addEventListener('click', function () {
    const intentoUsuario = parseInt(document.getElementById('guessInput').value);

    if (isNaN(intentoUsuario)) {
        mostrarAviso('Por favor, ingresa un número válido.');
    } else {
        if (intentoUsuario === numeroRandom) {
            mostrarAviso('¡Felicidades! ¡Adivinaste el número!');
            document.getElementById('startBtn').style.display = 'block';
            document.getElementById('gameSection').style.display = 'none';
        } else {
            const mensaje = intentoUsuario < numeroRandom ? 'El número es mayor.' : 'El número es menor.';
            mostrarAviso('¡Incorrecto! ' + mensaje);
        }
    }
});