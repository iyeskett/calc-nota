let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;
let boxResultado = document.getElementById('resultado') as HTMLTextAreaElement;

let buttonExame = document.getElementById('buttonExame');
let input1Exame = document.getElementById('input1Exame') as HTMLInputElement;
let input2Exame = document.getElementById('input2Exame') as HTMLInputElement;
let boxResultadoExame = document.getElementById('resultadoExame') as HTMLTextAreaElement;

function nota(numero1: number, numero2: number) {
    let aprovado = ' Aprovado';
    let exame = ' Exame';
    let soma =  ((numero1 * 9) + (1 * numero2)) / 10;
    let resultado = arredondaNota(soma);
    if (resultado >= 6) {
        boxResultado.innerHTML = String(resultado + aprovado);
    } else {
        boxResultado.innerHTML = String(resultado + exame);
        input1Exame.value = String(resultado);
    }
}

function notaFinal(numero1: number, numero2: number) {
    let soma = (numero1 + numero2) / 2;
    let resultadoFinal = arredondaNota(soma);
    let aprovado = ' Aprovado';
    let reprovado = ' Reprovado';
    if (resultadoFinal < 5) {
        boxResultadoExame.innerHTML = String(resultadoFinal + reprovado);
    } else {
        boxResultadoExame.innerHTML = String(resultadoFinal + aprovado);
    }

}

function arredondaNota(nota: number) {
    if (nota >= 0.75 && nota < 1) {
        return 1;
    }
    else if (nota >= 1.75 && nota < 2) {
        return 2;
    }
    else if (nota >= 2.75 && nota < 3) {
        return 3;
    }
    else if (nota >= 3.75 && nota < 4) {
        return 4;
    }
    else if (nota >= 4.75 && nota < 5) {
        return 5;
    }
    else if (nota >= 5.75 && nota < 6) {
        return 6;
    }
    else if (nota >= 6.75 && nota < 7) {
        return 7;
    }
    else if (nota >= 7.75 && nota < 8) {
        return 8;
    }
    else if (nota >= 8.75 && nota < 9) {
        return 9;
    }
    else if (nota >= 9.75 && nota < 10) {
        return 10;
    }
    else{
        return nota;
    }
}




if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(nota(Number(input1.value), Number(input2.value)));
        }
    })
}

if (buttonExame) {
    buttonExame.addEventListener('click', () => {
        if (input1Exame && input2Exame) {
            console.log(notaFinal(Number(input1Exame.value), Number(input2Exame.value)));
        }
    })
}
