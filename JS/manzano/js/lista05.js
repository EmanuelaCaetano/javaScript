function quadrado() {
    let resultado = ""
    console.log("oi")
    for(var i=15; i < 201; i++){
        resultado += i + " = " + i*i + "\n";
    }
    alert(resultado);
}

function tabuada() {
    let numero = Number(prompt("digite um numero prara realiozar a tabuada"))
    let resultado = ""
    for(var i = 1; i < 11; i++){
        resultado += numero + " X " + i + " = " + numero*i + "\n"
    } 
    alert(resultado)
}

function soma100(){
    let resultado = ""
    let soma = 0
    for(var i = 1; i < 101; i++){
        resultado += i + "+"
        soma += i
    }
    alert("a soma dos 100 primeiros é: " + resultado + soma)
}

function somatorioDe500(){
    let soma = 0
    for(var i = 1; i < 501; i++){
        soma += i
    }
    alert("a soma dos 500 primeiros é: "+ soma)
}

function impares() {
    let impares = ""
    for(var i = 0; i < 21; i++){
        if(i % 2 != 0){
            impares += i + ","
        }
    }
    alert(impares)
}

function divisiveisPor4(){
    let divisiveis = ""
    for(var i = 1; i <200; i++){
        if(i % 4 == 0){
            divisiveis += i + ","
        }
    }
    alert(divisiveis)
}

function potenciasDe3() {
    let potencias = ""
    let conta = 0
    for(var i = 0; i < 16; i++){
        console.log("olá")
        conta += i * 3;
        if(conta == 0){
            conta = 1
        }
        potencias += i + "^" + 3 + "=" + conta + "\n"
        if(conta == 1){
            conta = 0
        }
    }
    alert(potencias)

}

function caculadoraDePotencia() {
    let base = Number(prompt("digite a base"))
    let expoente = Number(prompt("digite o expoente"))
    let potencia = 1;

    for(var i = 0; i < expoente; i++){
        potencia *= base
    }
    alert(potencia)
}

function fibonacci15() {
    let sequencia = "1\n";
    let numeroAnterior = 0;
    let numeroAtual = 1;

    for (var i = 2; i <= 15; i++) {
        let proximoNumero = numeroAnterior + numeroAtual;
        sequencia += proximoNumero + "\n";
        numeroAnterior = numeroAtual;
        numeroAtual = proximoNumero;
    }

    alert(sequencia);
}


function conversaoCelsiusParaFahrenheit() {
    let conta = ""
    for (var celsius = 10; celsius <= 100; celsius += 10) {
      var fahrenheit = (celsius * 9 / 5) + 32
      conta += celsius + " graus Celsius equivalem a " + fahrenheit + " graus Fahrenheit\n"
    }
    alert(conta)
  }

function fatorialIpares() {
    let pivo = ""
    let resultado = ""

    for(var i = 1; i <= 10; i++){
        pivo = i
        let fatorial = ""
        if(pivo % 2 != 0){
            while (pivo > 0){
                fatorial += pivo + "! "
                pivo--
            }
            resultado += fatorial + "\n"
        }
        
    }
    alert(resultado)
}