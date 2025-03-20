let n = prompt("Qual o número");

let total = n / 2;

function verificarPar(n) {
    if (n % 2 === 0) {
        console.log("Par");
    }
    else {
        console.log("Ímpar");
    }
}

verificarPar(n);

//divisão
console.log("-------------------------------------");

let num1 = prompt("Qual o primeiro número");
let num2 = prompt("Qual o segundo número");

function calcular(num1, num2) {
    console.log(parseInt(num1) + parseInt(num2));
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
}

calcular(num1, num2);

//divisão
console.log("-------------------------------------");

let i = 10

function contagem() {
    let countdownTimer = setInterval(function() {

        console.log(i);
        i = i - 1;

        if (i <= 0) {
            clearTimeout(countdownTimer);
        }

    }, 500);
}

contagem();

//divisão
console.log("-------------------------------------");

let text = prompt("Qual a mensagem?");

function inverterTexto(text){
    console.log(text.split('').reverse().join(''));
}

inverterTexto(text);

//divisão
console.log("-------------------------------------");

let texto = prompt("Qual a string?");

function contarCaracteres(texto){
    console.log(texto.length);
}

contarCaracteres(texto);

//divisõo
console.log("-------------------------------------");

let carro = {
    marca: prompt("Qual a marca do carro?"),
    modelo: prompt("Qual a modelo do carro?"),
    ano: prompt("Qual a ano do carro?"),
    mostrar: function(){
        console.log("O modelo do carro é " + this.modelo);
    }
}

carro.mostrar();

//divisão
console.log("-------------------------------------");

let mensagem = "Olá"
let nome = prompt("Qual seu nome");

function mensagemPersonalizada(mensagem, nome){
    console.log(mensagem + ", "  + nome);
}

mensagemPersonalizada(mensagem, nome);

//divisão
console.log("-------------------------------------");

let n1 = prompt("Qual o número 1?");
let n2 = prompt("Qual o número 12?");
let n3 = prompt("Qual o número 3?");

function media(n1, n2, n3){
    console.log((parseInt(n1) + parseInt(n2) + parseInt(n3)) / 3);
}

media(n1, n2, n3);

//divisão
console.log("-------------------------------------");

let j = 1

function multiTres(j){
    for(j; j <= 20; j++)
    if (i % 3 === 0){
        console.log('Número: ', i, 'Múltiplo de 3')
    }
    else{
        console.log('Número: ', i, 'Não é múltiplo de 3')
    }
}

multiTres(j)