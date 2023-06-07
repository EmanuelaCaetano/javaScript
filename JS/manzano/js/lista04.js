function quadr15200() {
    let resultado = "";

    for (let i = 15; i <= 200; i++) {
        let quadrado = i * i;
        resultado += quadrado + " ";
    }
    alert("Quadrados dos números inteiros de 15 a 200:\n" + resultado);
}
function soma1500() {
    let soma = 0;

    for (let i = 1; i <= 500; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }
    alert("Somatório dos valores pares de 1 até 500: " + soma);
}

function div4200() {
    let contador = 4;
    let numerosDivisiveis = '';
      
      while (contador < 200) {
        if (contador % 4 === 0) {
          numerosDivisiveis += contador + ', ';
        }
        contador++;
      }
      alert("Números divisíveis por 4 menores que 200:\n" + numerosDivisiveis);
    }
    
function somGraos() {
let numQuadros = 64;
let somaGraos = 0;
let graosQuadroAtual = 1;

for (let i = 1; i <= numQuadros; i++) {
    somaGraos += graosQuadroAtual;
    graosQuadroAtual *= 2;
}
alert("O somatório total de grãos de trigo é: " + somaGraos);
}

function som15Int() {
let somatorioFatorial = 0;

for (let i = 1; i <= 15; i++) {
    let valor = Number(prompt("Digite o valor #" + i));
    let fatorial = 1;
    for (let j = 1; j <= valor; j++) {
    fatorial *= j;
    }
    somatorioFatorial += fatorial;
}
alert("O somatório das fatoriais é: " + somatorioFatorial);
}

function valNum() {
let somatorio = 0;
let media = 0;
let totalValores = 0;

while (true) {
    let valor = Number(prompt("Digite um valor (negativo para sair):"));
    if (valor < 0) {
    break;
    }
    somatorio += valor;
    totalValores++;
}
if (totalValores > 0) {
    media = somatorio / totalValores;
}
alert("Total do somatório: " + somatorio +
        "\nMédia aritmética: " + media +
        "\nTotal de valores lidos: " + totalValores);
}

function fatImp() {
function calcularFatorial() {
    let fatorial = 1;
    let numero = Number(prompt("digite um numero"))

    for (let i = 1; i <= numero; i++) {
    fatorial *= i;
    }
    return fatorial;
}
let somatorioFatorial = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) { // Verifica se o número é ímpar
    let fatorial = calcularFatorial(i);
    somatorioFatorial += fatorial;
    }
}
alert("O somatório dos fatoriais dos valores ímpares de 1 a 10 é: " + somatorioFatorial);

}

function totAreaR() {
let areaTotal = 0;
let continuar = true;

while (continuar) {
    let nome = prompt("Digite o nome do cômodo:");
    let largura = parseFloat(prompt("Digite a largura do cômodo (em metros):"));
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo (em metros):"));
    let area = largura * comprimento;
    areaTotal += area;
    alert("Área do cômodo " + nome + ": " + area + " metros quadrados");
    let resposta = prompt("Deseja calcular a área de mais um cômodo? (SIM/NAO)").toUpperCase();
    if (resposta === "NAO") {
    continuar = false;
    }
}
alert("Área total da residência: " + areaTotal + " metros quadrados");
}


function div2Num() {
let dividendo = Number(prompt("Digite o dividendo:"));
let divisor = Number(prompt("Digite o divisor:"));
let quociente = 0;

while (dividendo >= divisor) {
    dividendo -= divisor;
    quociente++;
}
alert("O resultado inteiro da divisão é: " + quociente);
}