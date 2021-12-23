// Item 1 (Soma, Sub, Mult, Div, Mod)
console.log('-----------------Item 1-----------------')

const a = 5;
const b = 7;
const c = 15;

let soma = (a + b); 
let sub = (a - b);
let mult = (a * b);
let div = (a / b);
let mod = (a % b);

console.log('Resultados:'+
'\n Soma: ' + soma +
'\n Subtração: ' + sub +
'\n Multiplicação: ' + mult +
'\n Divisão: ' + div +
'\n Módulo: ' + mod);

// Item 2 (Retornar maior)
console.log('-----------------Item 2-----------------')

if((a > b)){
    console.log('O maior número é: '+ a );
}else{
    console.log('O maior númeor é: '+ b);
}

// Item 3 (Maior dos 3)
console.log('-----------------Item 3-----------------')

if ((a > b) && (a > c)) {
    console.log('O maior dos tres é: '+ a);
}else if ((b > a) && (b > c)){
    console.log('O maior dos tres é: '+ b);
}else{
    console.log('O maior dos tres é: '+ c);
}

// Item 4 (Positivo ou negativo)
console.log('-----------------Item 4-----------------')

const d = -50;

if ((d > 0)) {
    console.log('O número é negativo');
}else {
    console.log('O número é negativo')
}

// Item 5 (Triangulo ou nao, eis a questão)
console.log('-----------------Item 5-----------------')

const ang1 = 120;
const ang2 = 20;
const ang3 = 40;

if ((ang1 > 0) && (ang2 > 0) && (ang3 > 0)) {
    if((ang1 + ang2 + ang3) <= 180) {
        console.log('É um triângulo');
    }else {
        console.log('Não é um triângulo');
    }
}else {
    console.log('Valor negativo não é válido')
}

// Item 6 (Movimentos peças de xadrez)
console.log('-----------------Item 6-----------------')

const peão = 'Uma casa a frente';
const torre = 'Horizontal e vertical';
const bispo = 'Diagonal';
const cavalo = 'Em L e pode pular peças';
const rainha = 'Diagonais, horizontal ou vertival';
const rei = 'Uma casa nas diagonais, horizontal ou vertival';

console.log(peão);