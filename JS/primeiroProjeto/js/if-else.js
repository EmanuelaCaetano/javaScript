function dez(){
    let numero = parseInt(prompt("digite um numero para verificar a faixa"))
    if (numero >= 10){
        alert("esta na faixa!")
    }else{
        alert("não esta na faixa!")
    }
}

function positivoOuNegativo(){
    let numero = parseInt(prompt("digite um numero para verificar se é positivo ou negativo"))
    if (numero >= 0){
        alert("positivo")
    }else{
        alert("negativo")
    }
}

function melancias(){
    let quantidade = parseInt(prompt("digite a quantidade de melancias que deseja comprar"))
    if(quantidade >= 12){
        alert("o valor a ser pago será: " + quantidade * 23)
    }else{
        alert("o valor a ser pago será: " + quantidade * 27)
    }
}

function media(){
    console.log("chamou")
    let nota01 = parseFloat(prompt("digite a primeira nolta"))
    let nota02 = parseFloat(prompt("digite a segunda nolta"))
    let media = (nota01 + nota02) / 2
    if (media >= 6){
        alert("aluno aprovado")
    }else{
        alert("aluno reprovado")
    }
}