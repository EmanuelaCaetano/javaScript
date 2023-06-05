function diferencaPeloMenor(){
    let numero = Number(prompt("digite um numero"))
    let numero02 = Number(prompt("digite um numero"))
    let resultado

    if (numero < numero02) {
        resultado = numero02 - numero
        alert(" o resultado é" + resultado)
    } else {
        resultado = numero02 - numero
        alert(" o resultado é" + resultado) 
    }
}

function moduloNumero(){
    let numero = Number(prompt("digite um numero"))
    let resultado

    if (numero < 0) {
        resultado = numero * 0
        alert(" o modulo é" + resultado)
    } else {
        alert(" o modulo é" + resultado) 
    }
}

function mediaEscolarAprovacao(){
    let nota = Number(prompt("digite primeira nota"))
    let nota2 = Number(prompt("digite segunda nota"))
    let nota3 = Number(prompt("digite terceira nota"))
    let nota4 = Number(prompt("digite quarta nota"))
    let resultado = (nota + nota2 + nota3 + nota4)/4

    if (resultado < 6) {
        alert("reprovado, sua media foi:" + resultado)
    } else {
        alert("aprovado, sua media foi:" + resultado) 
    }
}

function sistemaEscolar(){
    let nota = Number(prompt("digite primeira nota"))
    let nota2 = Number(prompt("digite segunda nota"))
    let nota3 = Number(prompt("digite terceira nota"))
    let nota4 = Number(prompt("digite quarta nota"))
    let extra = 0
    let resultado = (nota + nota2 + nota3 + nota4)/4

    if (resultado > 7) {
        alert("aprovado, sua media foi:" + resultado)
    } else {
        extra = Number(prompt("digite o resultado do exame final"))
        resultado = (resultado + extra)/2
        if (resultado > 5){
            alert("aprovado, sua media foi:" + resultado)
        } else {
            alert("reprovado, sua media foi:" + resultado)
        }
         
    }
}

function formulaBaskara(){}

function menor() {
    let numero = Number(prompt("digite um numero"))
    let numero02 = Number(prompt("digite um numero"))
    let numero03 = Number(prompt("digite um numero"))
    
    if (numero > numero02 && numero> numero03){
        alert(numero)
    }
    if( numero02 > numero03 && numero02 > numero) {
        alert(numero02)
    }
    if (numero03 > numero02 && numero03 >numero) {
        alert(numero03)
    }
}

function divisiveis() {
    let numero = Number(prompt("digite um numero"))
    let numero02 = Number(prompt("digite um numero"))
    let numero03 = Number(prompt("digite um numero"))

    if (numero % 2 ==0 || numero % 3 ==0) {
        alert("o primeiro numero é divisivel")
    }
    if (numero02 % 2 ==0 || numero02 % 3 ==0) {
        alert("o segundo numero é divisivel")
    }
    if (numero03 % 2 ==0 || numero03 % 3 ==0) {
        alert("o terceiro numero é divisivel")
    }
}

function imparOuPar() {
    let numero = Number(prompt("digite um numero"))

    if (numero % 2 == 0){
        alert("é par") 
    }else{
        alert("é impar")
    }
}

function faixa() {
    let numero = Number(prompt("digite um numero"))

    if (numero >= 0 && numero <= 9){
        alert("esta na faixa permitida") 
    }else{
        alert("não está na faixa permitida")
    }
}

function excluirMenoresQueTres(){
    let numero = Number(prompt("digite um nmero para ser avaliado"))

    if(numero < 3){
        alert("valor fora da faixa")
    }else{
        alert("valor dentro da faixa " + numero)
    }
}

function senhor() {
    let nome = prompt("digite seu nome")
    let sexo = prompt("digite seu seso F para feminino e M para masculino")

    if (sexo == F) {
        alert("bem-vindo senhor " + nome)
    }
    if (sexo == M){
        alert("bem-vinda senhora " + nome)
    }
}