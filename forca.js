const readline = require('readline-sync');

const palavraSecreta = "abacaxi".toLocaleUpperCase();
let acertou = Array.from(palavraSecreta).fill("_");

const arrayDaPalavraSecreta = palavraSecreta.split("");
let palavraCorreta;

function obterLetra(letraDigitadaPeloUsuario) {
    

    for (let i = 0; i < arrayDaPalavraSecreta.length; i++) {
        if (arrayDaPalavraSecreta[i] === letraDigitadaPeloUsuario) {
            acertou[i] = letraDigitadaPeloUsuario;
        } else if (arrayDaPalavraSecreta.includes(letraDigitadaPeloUsuario)) {
            continue;
        }
    }
    console.log(acertou);

    palavraCorreta = acertou.join('');
}

function estadoDojogo() {
    
    let estado = null;

    if (tentativa >= 0 && palavraCorreta === palavraSecreta) {
        estado = true;
    }
    if (tentativa === 0 && palavraCorreta !== palavraSecreta) {
        estado = false;
    }
    
    return estado;
}

let tentativa = 6;
function inicioDojogo() {

    while (tentativa >= 0) {
        if (estadoDojogo()) {
            console.log('Ganhou');
            return 'Ganhou';
            break;
        }
        if (estadoDojogo() === false) {
            console.log('Perdeu');
            return 'Perdeu';
            break;
        }
        const chute = readline.question(`${tentativa} - Aguardando chute: `);
        tentativa--;
        obterLetra(chute.toLocaleUpperCase());
        estadoDojogo();
    }

}

function forca() {

    inicioDojogo();

}

forca();
