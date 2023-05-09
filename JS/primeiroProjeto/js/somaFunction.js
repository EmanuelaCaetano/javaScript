function soma (a, b){
    let resultado = a + b
    document.getElementById("demo").innerHTML = resultado;
}

function somaDoisNumero(){
    let numero = parseInt(prompt("digite um numero: "))
    let numero02 = parseInt(prompt("digite outro numero: "))
    let soma = numero + numero02;
    alert("a soma dos valore é igual: "+soma)
}