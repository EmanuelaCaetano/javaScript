function tabuada() {
    let numero = Number(prompt("Digite um número para calcular a tabuada:"));
    let tabuada = "";

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        tabuada += numero + " x " + i + " = " + resultado + "\n";
    }
    alert("Tabuada de multiplicação de " + numero + ":\n\n" + tabuada);
}

function somaCem() {
    let soma = 0;

    for (let i = 1; i <= 100; i++) {
        soma += i;
    }
    alert("O total da soma dos cem primeiros números inteiros é: " + soma);
}

function somaQuin() {
    let somatorio = 0;

    for (let i = 1; i <= 500; i++) {
        if (i % 2 === 0) {
        somatorio += i;
        }
    }
    alert("O somatório dos valores pares de 1 a 500 é: " + somatorio);
}

function imp020() {
    let impares = "";

    for (let i = 0; i <= 20; i++) {
        if (i % 2 !== 0) {
            impares += i + " ";
        }
    }
    alert("Valores ímpares encontrados: " + impares);
}

function pot3() {
    let resultados = "";

    for (let expoente = 0; expoente <= 15; expoente++) {
        let resultado = 1;

    for (let i = 0; i < expoente; i++) {
        resultado *= 3;
    }
    resultados += resultado + " ";
    }
    alert("Resultados das potências de 3: " + resultados);
}

function PotBE() {
    let base = Number(prompt("Digite o valor da base:"));
    let expoente = Number (prompt("Digite o valor do expoente:"));
    let resultado = 1;

    for (var i = 0; i < expoente; i++) {
        resultado *= base;
    }
    alert("O resultado de " + base + " elevado a " + expoente + " é: " + resultado);
}

function sFibonacci() {
    let termoAtual = 1;
    let termoAnterior = 1;
    let serie = "1, 1";

    for (let i = 3; i <= 15; i++) {
        let proximoTermo = termoAtual + termoAnterior;
        serie += ", " + proximoTermo;

        termoAnterior = termoAtual;
        termoAtual = proximoTermo;
    }
    alert("Série de Fibonacci até o décimo quinto termo:\n\n" + serie);
}

function celFahr() {
    let conversoes = "";

    for (let celsius = 10; celsius <= 100; celsius += 10) {
        let fahrenheit = (celsius * 9/5) + 32;
        conversoes += celsius + " graus Celsius é equivalente a " + fahrenheit + " graus Fahrenheit.\n";
    }
    alert(conversoes);
}


function MA5070() {
    let somatorio = 0;
    let quantidade = 0;

    for (let i = 50; i <= 70; i++) {
    if (i % 2 === 0) {
        somatorio += i;
        quantidade++;
    }
    }
    let media = somatorio / quantidade;
    alert("Somatório dos valores pares: " + somatorio + "\nMédia Aritmética dos valores pares: " + media);
}

function areaResid() {
    let areaTotal = 0;
    do {
        let nome = prompt("Digite o nome do cômodo:");
        let largura = parseFloat(prompt("Digite a largura do cômodo em metros:"));
        let comprimento = parseFloat(prompt("Digite o comprimento do cômodo em metros:"));
        let area = largura * comprimento;
        alert("Área do cômodo " + nome + ": " + area + " metros quadrados");
        areaTotal += area;
        let resposta = prompt("Deseja calcular a área de outro cômodo? (Digite SIM ou NAO)");
        resposta = resposta.toUpperCase();
        if (resposta !== "SIM") {
            break; // Encerra o loop caso a resposta não seja "SIM"
     }
    } while (true);
    alert("Área total da residência: " + areaTotal + " metros quadrados");
}

