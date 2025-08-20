//Bloquea caracteres
function bloquearCaracteres(e) {
    const teclasProhibidas = ['e', 'E', '+', '-'];
    if (teclasProhibidas.includes(e.key)) {
        e.preventDefault();
    }
}

function verificarOpcionesDeGanar() {
    const num = parseInt(document.getElementById('numeroACalcular').value);
    const resultadoDiv = document.getElementById('resultadoNumero');
    // Validar que sea un número entero entre 2 y 100
    if (
        typeof num !== 'number' ||
        !Number.isInteger(num) ||
        num <= 1 ||
        num > 100
    ) {
        return 'Número inválido. Debe ser entero entre 2 y 100.';
    }

    const mayorQue5yMenorQue15 = num > 5 && num < 15;
    const esEspecial = num === 55 || num === 70;

    if (mayorQue5yMenorQue15 || esEspecial) {
        resultadoDiv.innerHTML = `<h5 class="text-center">El número ingresado es favorable.</h5>`;
        return;
    } else {
        resultadoDiv.innerHTML = `<h5 class="text-center">El número ingresado no es favorable.</h5>`;
        return;
    }
}

//Determina si un año es bisiesto según el calendario Gregoriano.

function esBisiesto() {
    const year = parseInt(document.getElementById('yearACalcular').value);
    const resultadoDiv = document.getElementById('resultadoYear');
    // Validar entrada
    if (
        typeof year !== 'number' ||
        !Number.isInteger(year) ||
        year < 0
    ) {
        return 'Año inválido. Debe ser entero y mayor qué 0.';
    }

    const divisiblePor4 = year % 4 === 0;
    const divisiblePor100 = year % 100 === 0;
    const divisiblePor400 = year % 400 === 0;

    if ((divisiblePor4 && !divisiblePor100) || divisiblePor400) {
        resultadoDiv.innerHTML = `<h5 class="text-center">El año ${year} es bisiesto.</h5>`;
        return;
    } else {
        resultadoDiv.innerHTML = `<h5 class="text-center">El año ${year} no es bisiesto.</h5>`;
        return;
    }
}

//Determina el estado de un set de tenis.

function resultadoPartido() {
    const puntuacionA = parseInt(document.getElementById('puntuacionA').value);
    const puntuacionB = parseInt(document.getElementById('puntuacionB').value);
    const resultadoDiv = document.getElementById('resultadoPartido');
    // Validación básica
    const m = puntuacionA;
    const n = puntuacionB;
    if (
        !Number.isInteger(m) ||
        !Number.isInteger(n) ||
        m < 0 ||
        n < 0
    ) {
        resultadoDiv.innerHTML = `<h5 class="text-center">Marcador inválido. Debe ser un número entero no negativo.</h5>`;
        return;
    }

    const diff = Math.abs(m - n);
    const max = Math.max(m, n);

    // Caso de victoria normal (6+ y diferencia ≥2, sin pasar de 7)
    if (max >= 6 && max <= 7 && diff >= 2 && (m <= 7 && n <= 7)) {
        if (m > n) {
            return resultadoDiv.innerHTML = `<h5 class="text-center">A ganó el set</h5>`;
        } else {
            return resultadoDiv.innerHTML = `<h5 class="text-center">B ganó el set</h5>`;
        };
    }

    // Caso tie-break 7-6
    if ((m === 7 && n === 6) || (m === 6 && n === 7)) {
        if (m > n) {
            return resultadoDiv.innerHTML = `<h5 class="text-center">A ganó el set 7-6</h5>`;
        } else {
            return resultadoDiv.innerHTML = `<h5 class="text-center">B ganó el set 7-6</h5>`;
        };
    }

    // Set aún en curso si ninguno llegó a 6 o no se cumple la diferencia
    if (m < 6 && n < 6) {
        return resultadoDiv.innerHTML = `<h5 class="text-center">El set todavía no termina</h5>`;
    }
    if ((m === 6 && n === 5) || (m === 5 && n === 6)) {
        return resultadoDiv.innerHTML = `<h5 class="text-center">El set todavía no termina</h5>`;
    }

    return resultadoDiv.innerHTML = `<h5 class="text-center">Marcador inválido</h5>`;
}