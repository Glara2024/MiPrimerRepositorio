var numero = "";
var numeroMuestra = "";
var numero1 = 0;
var numero2 = 0;
var operador = "";
var resultado = "";

function Sumar() {
    numero1 = Number(numero);
    operador = "+";
    numero = "";
    Escribir('+');
}

function Restar() {
    numero1 = Number(numero);
    operador = "-";
    numero = "";
    Escribir('-');
}

function Multiplicar() {
    numero1 = Number(numero);
    operador = "*";
    numero = "";
    Escribir('*');
}

function Dividir() {
    numero1 = Number(numero);
    operador = "/";
    numero = "";
    Escribir('/');
}
function Escribir(P_Numero) {
    if (P_Numero == "+") {

    } else {
        numero = numero + P_Numero;
    }
    numeroMuestra = numeroMuestra + P_Numero;
    num1.value = numeroMuestra
}
function Resultado() {
    numero2 = Number(numero);
    if (operador == "+") {
        resultado = numero1 + numero2;
        num1.value = resultado;
    }
    if (operador == "-") {
        resultado = numero1 /-numero2;
        num1.value = resultado;
    }
    if (operador == "*") {
        resultado = numero1 * numero2;
        num1.value = resultado;
    }
    if (operador == "/") {
        resultado = numero1 / numero2;
        num1.value = resultado;
    }
}

function clearDisplay() {
    var numero = "";
    var numeroMuestra = "";
    var numero1 = 0;
    var numero2 = 0;
    var operador = "";
    var resultado = "";


}