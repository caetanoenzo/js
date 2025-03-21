//ex1
console.log("----------------ex1-------------------");

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

//ex2
console.log("------------------ex2------------------");

let num1 = prompt("Qual o primeiro número");
let num2 = prompt("Qual o segundo número");

function calcular(num1, num2) {
    console.log(parseInt(num1) + parseInt(num2));
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
}

calcular(num1, num2);

//ex3
console.log("-----------------ex3-------------------");

let o = 10

function contagem() {
    let countdownTimer = setInterval(function() {

        console.log(o);
        o = o - 1;

        if (o <= 0) {
            clearTimeout(countdownTimer);
        }

    }, 500);
}

contagem();

//ex4
console.log("-----------------ex4-------------------");

let text = prompt("Qual a mensagem?");

function inverterTexto(text){
    console.log(text.split('').reverse().join(''));
}

inverterTexto(text);

//ex5
console.log("-----------------ex5-------------------");

let texto = prompt("Qual a string?");

function contarCaracteres(texto){
    console.log(texto.length);
}

contarCaracteres(texto);

//ex6
console.log("-----------------ex6-------------------");

let carro = {
    marca: prompt("Qual a marca do carro?"),
    modelo: prompt("Qual a modelo do carro?"),
    ano: prompt("Qual a ano do carro?"),
    mostrar: function(){
        console.log("O modelo do carro é " + this.modelo);
    }
}

carro.mostrar();

//ex7
console.log("------------------ex7------------------");

let mensagem = "Olá"
let nome = prompt("Qual seu nome");

function mensagemPersonalizada(mensagem, nome){
    console.log(mensagem + ", "  + nome);
}

mensagemPersonalizada(mensagem, nome);

//ex8
console.log("-----------------ex8-------------------");

let n1 = prompt("Qual o número 1?");
let n2 = prompt("Qual o número 12?");
let n3 = prompt("Qual o número 3?");

function media(n1, n2, n3){
    console.log((parseInt(n1) + parseInt(n2) + parseInt(n3)) / 3);
}

media(n1, n2, n3);

//ex9
console.log("------------------ex9------------------");

let j = 1

function multiTres(j){
    for(j; j <= 20; j++)
    if (j % 3 === 0){
        console.log('Número: ', j, 'Múltiplo de 3')
    }
    else{
        console.log('Número: ', j, 'Não é múltiplo de 3')
    }
}

multiTres(j)

//ex10
console.log("------------------ex10------------------");

function verificarPalindromo(){
    let palavra = prompt("Qual a palavra?");
    let inversa = palavra.split('').reverse().join('');
    if (inversa == palavra){
        console.log('A palavra', palavra, 'ao inverso fica', inversa, 'logo, ela é palíndroma');
    }
    else{
        console.log('A palavra', palavra, 'ao inverso fica', inversa, 'logo, ela não é palíndroma');
    }
}

verificarPalindromo();

//ex11
console.log("-----------------ex11-------------------");

let nu = prompt("Qual o number?");

function verificarSinal(){
    if (nu > 0){
        console.log('O numero é positivo');
    }
    else if (nu < 0){
        console.log('O numero é Negativo');
    }
    else {
        console.log('O numero é zero');
    }
    }

verificarSinal(nu);

//ex12
console.log("------------------ex12------------------");

let tempC = prompt("Qual a temperatura em Celsius?");

function converterTemperatura(){
    let tempF = (tempC * 1.8) + 32
    console.log('A temperatura em fareinrrait é', tempF)
}

converterTemperatura()

//ex13
console.log("-----------------ex13-------------------");

i = 1;
let som = 0;

while (i <= 100) {
  som = i + som;
  i++;
}

console.log(som);



//ex14
console.log("----------------ex14--------------------");

let text2 = prompt("Digite uma palavra");


function contarCaracteres(str) {
    return str.length;
  }
  
  console.log(text2 + " - " + contarCaracteres(text2) + " caracteres");



//ex15
console.log("-----------------ex15-------------------");

let str = prompt("Digite uma palavra");


function verificarTamanho (str) {
  
    if(str.length > 10) {
      console.log("Tem mais de 10 caracteres aí");
    }
    else{
      console.log("Tem menos de 10 caracteres aí");
    }
  }

  verificarTamanho (str);



//ex16
console.log("------------------ex16------------------");

const fruta = ["maça", "banana", "fruta do dragão", "abacate", "morango"];

  console.log(fruta[2]);



//ex17
console.log("-----------------ex17-------------------");

nome = prompt("Digite seu nome");



function saudacao (nome, saudacao = "bem vindo(a)") {
    console.log(saudacao, nome);
  }

  saudacao(nome);



//ex18
console.log("------------------ex18------------------");

let nos = prompt("Digite sua nota final");


function verificarAprovacao (nos) {
    if(nos >= 6){
      console.log("aprovado(a)");
    }
    else{
      console.log("reprovado(a)");
    }
  }
  
  verificarAprovacao (nos);



//ex19
console.log("-----------------ex19-------------------");

let par = [];
let cont = 0;


for (let num = 0; num <= 30; num++) {
  if(num % 2 == 0) {
    par[cont] = num;
    cont++;
  }
}

console.log("n°s pares: ", par);

//ex20
console.log("------------------ex20------------------");

function contarVogais() {
    let palavra = prompt("Qual palavra deseja saber a quantidade de vogais?");
    letras = palavra.split('');
    let numVoga = 0;
    for (i = 0; i <= palavra.length; i++) {
        if ((letras[i] == 'a') || (letras[i] == 'e') || (letras[i] == 'i') || (letras[i] == 'o') || (letras[i] == 'u')) {
            numVoga++;
        }
    }
    console.log("O número de vogais da palavra é: " + numVoga);
}

contarVogais();

//ex21
console.log("-----------------ex21-------------------");

let array = [1, 2, 3];

function somarArray(){
    console.log(array.reduce((partialSum, a) => partialSum + a, 0));
}

somarArray(array);

//ex22
console.log("----------------ex22--------------------");

let numero = prompt("Qual o número?");

function dobrarNumero(){
    console.log(numero * 2);
}

dobrarNumero(numero);

//ex23
console.log("------------------ex23------------------");

let x = 1;

function pares(x){
    while (x <= 20){
        x++;
        if (x % 2 == 0){
            console.log(x);
        }
    }
}

pares(x);

//ex24
console.log("------------------ex24------------------");

let minPalavra = prompt("Qual a palavra em letras minúsculas?");

function capitalizar(){
    console.log(String(minPalavra[0]).toUpperCase() + String(minPalavra).slice(1));
}

capitalizar(minPalavra);

//ex25
console.log("-----------------ex25-------------------");

let ano =prompt("Qual o ano?");

function anoBissexto() {
    if (ano % 4 == 0 && ano % 100 != 0){
        console.log('O ano', ano, 'é bissexto');
    }
    else{
        console.log('O ano', ano, 'não é bissexto');

    }
}

anoBissexto(ano);