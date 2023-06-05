function conversao() {

    let c = Number(prompt("Digite a temperatura em gº celcius: "))
    let conv = (9 * c + 160) / 5

    alert("A temperatura em gº Fahrenheit é " + conv +".")
}

function Farenheit() {

    let f = Number(prompt("Digite a temperatura em gº Farenheit: "))
    let conver = (f - 32) * (5 / 9)

    alert("A temperatura em gº Celcius é " + conver + ".")
}

function volume() {
    let a = Number(prompt("Digite a altura da lata: "))
    let r = Number(prompt("Digite o raio da lata: "))
    result = 3.1 * ((r ** 2) * a)

    alert("O volume da lata é " + result + ".")
}

function calcularLitrosCombustivel() {
    let tempo = Number(prompt("Digite o tempo gasto na viagem (em horas):"));
    let velocidade = Number(prompt("Digite a velocidade média durante a viagem (em km/h):"));
  
    let distancia = tempo * velocidade;
    let litrosUsados = distancia / 12;
 
    alert("Velocidade média: " + velocidade + " km/h\n" +
      "Tempo gasto na viagem: " + tempo + " horas\n" +
      "Distância percorrida: " + distancia + " km\n" +
      "Quantidade de litros utilizada: " + litrosUsados + " litros");
  }

function atrasoPrest() {
    let v = Number(prompt("Valor da prestação: R$ "))
    let t= Number(prompt("Taxa de Juros (%): "))
    let tempo = Number(prompt("Tempo de Atraso(dias): "))
    let prestacao = v + (v * t/100) * tempo

    alert ("O valor a ser pago é: R$" + prestacao)
}

function trocaValores() {
    let A = prompt("Digite o valor de A:");
    let B = prompt("Digite o valor de B:");

    alert("Valores iniciais:\nA: " + A + "\nB: " + B);
    let temp = A;
    A = B;
    B = temp;
    alert("Valores trocados:\nA: " + A + "\nB: " + B);
}

function propDist() {
    let A = Number(prompt("Digite o valor de A:"));
    let B = Number(prompt("Digite o valor de B:"));
    let C = Number(prompt("Digite o valor de C:"));
    let D = Number(prompt("Digite o valor de D:"));

    let resultadoSoma1 = A + B;
    let resultadoSoma2 = A + C;
    let resultadoSoma3 = A + D;
    let resultadoSoma4 = B + C;
    let resultadoSoma5 = B + D;
    let resultadoSoma6 = C + D;

    let resultadoMultiplicacao1 = A * B;
    let resultadoMultiplicacao2 = A * C;
    let resultadoMultiplicacao3 = A * D;
    let resultadoMultiplicacao4 = B * C;
    let resultadoMultiplicacao5 = B * D;
    let resultadoMultiplicacao6 = C * D;

    alert("Resultados:\n" +
        "A + B = " + resultadoSoma1 + "\n" +
        "A + C = " + resultadoSoma2 + "\n" +
        "A + D = " + resultadoSoma3 + "\n" +
        "B + C = " + resultadoSoma4 + "\n" +
        "B + D = " + resultadoSoma5 + "\n" +
        "C + D = " + resultadoSoma6 + "\n" +
        "A * B = " + resultadoMultiplicacao1 + "\n" +
        "A * C = " + resultadoMultiplicacao2 + "\n" +
        "A * D = " + resultadoMultiplicacao3 + "\n" +
        "B * C = " + resultadoMultiplicacao4 + "\n" +
        "B * D = " + resultadoMultiplicacao5 + "\n" +
        "C * D = " + resultadoMultiplicacao6);
}

function caixaRet() {
    let c = Number(prompt("Comprimento do retangulo: "))
    let l = Number(prompt("Largura do retangulo: "))
    let a = Number(prompt("Altura do retangulo: "))
    let v = c * l * a

    alert("O volume da caixa Retangular é " + v + ".")
}

function difQuadr() {
    let A = Number(prompt("Digite o valor de A:"));
    let B = Number(prompt("Digite o valor de B:"));

    let diferenca = A - B;
    let quadradoDiferenca = diferenca * diferenca;

alert("O quadrado da diferença entre " + A + " e " + B + " é: " + quadradoDiferenca);
}

function convReal() {
    let cotacaoDolar = Number(prompt("Digite a cotação do dolar: "));
    let qtdeReais = Number(prompt("Digite a quantidade de reais disponível: "));
    let valorEmDolar = cotacaoDolar * qtdeReais;
    
    alert("O valor em dolares é: U$" + valorEmDolar + ".");
}

function convDolar() {
    let cotacaoReal = Number(prompt("Digite a cotação do real: "));
    let qtdeDolar = Number(prompt("Digite a quantidade de dólares disponível: "));
    let valorEmReais = cotacaoReal * qtdeDolar;
    
    alert("O valor em reais é: R$" + valorEmReais + ".");
}

function quadrTre() {
    let valorA = Number(prompt("Digite o valor de A:"));
    let valorB = Number(prompt("Digite o valor de B:"));
    let valorC = Number(prompt("Digite o valor de C:"));
    let somaQuadrados = (valorA * valorA) + (valorB * valorB) + (valorC * valorC);

    alert("A soma dos quadrados dos três valores é: " + somaQuadrados);
}

function somaQuadr() {
    let valorA = parseFloat(prompt("Digite o valor de A:"));
    let valorB = parseFloat(prompt("Digite o valor de B:"));
    let valorC = parseFloat(prompt("Digite o valor de C:"));
    let soma = valorA + valorB + valorC;
    let quadradoDaSoma = soma * soma;

    alert("O quadrado da soma dos três valores é: " + quadradoDaSoma);
}