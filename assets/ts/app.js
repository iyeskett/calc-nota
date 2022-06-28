"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let boxResultado = document.getElementById('resultado');
let buttonExame = document.getElementById('buttonExame');
let input1Exame = document.getElementById('input1Exame');
let input2Exame = document.getElementById('input2Exame');
let boxResultadoExame = document.getElementById('resultadoExame');
let aprovado = 'Aprovado';
let exame = 'Exame';
let reprovado = 'Reprovado';
function notaMD(numero1, numero2) {
    let soma = ((numero1 * 9) + (1 * numero2)) / 10;
    let resultado = arredondaNotaMD(soma);
    if (resultado >= 6) {
        if (resultado != soma) {
            boxResultado.innerHTML = String(`Nota: ${soma.toFixed(3)} \nNota arredondada: ${resultado.toFixed(3)} \nResultado: ${aprovado}`);
        }
        else {
            boxResultado.innerHTML = String(`Nota: ${resultado.toFixed(3)} - ${aprovado}`);
        }
    }
    else {
        let notaMininaMF = 9.5 - resultado;
        boxResultado.innerHTML = String(`Nota: ${resultado.toFixed(3)} \nResultado: ${exame} \nNota mínima Exame: ${notaMininaMF}`);
        input1Exame.value = String(resultado.toFixed(3));
    }
}
function notaMF(numero1, numero2) {
    let soma = (numero1 + numero2) / 2;
    let resultadoFinal = arredondaNotaMF(soma);
    if (resultadoFinal >= 5) {
        if (resultadoFinal != soma) {
            boxResultadoExame.innerHTML = String(`Nota: ${soma.toFixed(3)} \nNota arredondada: ${resultadoFinal.toFixed(3)} \nResultado: ${aprovado}`);
        }
        else {
            boxResultadoExame.innerHTML = String(`Nota: ${resultadoFinal.toFixed(3)} \n${aprovado}`);
        }
    }
    else {
        boxResultadoExame.innerHTML = String(`${resultadoFinal.toFixed(3)} + ${reprovado}`);
    }
}
function arredondaNotaMD(nota) {
    if (nota >= 5.7 && nota < 6) {
        return 6;
    }
    else {
        return nota;
    }
}
function arredondaNotaMF(nota) {
    if (nota >= 4.75 && nota < 5) {
        return 5;
    }
    else {
        return nota;
    }
}
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(notaMD(Number(input1.value), Number(input2.value)));
        }
    });
}
if (buttonExame) {
    buttonExame.addEventListener('click', () => {
        if (input1Exame && input2Exame) {
            console.log(notaMF(Number(input1Exame.value), Number(input2Exame.value)));
        }
    });
}
