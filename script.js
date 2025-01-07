let display = document.getElementById('num1');

function escribir(valor) {
    display.value += valor;
}

function clearDisplay() {
    display.value = '';
}

function sumar() {
    display.value += '+';
}

function restar() {
    display.value += '-';
}

function multiplicar() {
    display.value += '*';
}

function dividir() {
    display.value += '/';
}

function resultado() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}