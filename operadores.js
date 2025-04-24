// soma
// subtração
// multiplicação
// divisão

let num1 = Number(prompt("Digite um número"));
let num2 = Number(prompt("digite o segundo número"));

let soma = num1 + num2;
let subtração = num1 - num2;
let multiplicação = num1 * num2;
let divisão = num1 / num2;

console.log(
  `A soma é ${soma}, a subtração é ${subtração}, a multiplicação é ${multiplicação} e a divisão é ${divisão}`
);
let outraSoma = '20' + 2 // computador pensa que é concatenação
let outraSubtração = '20' - 2 //  ocorre a subtração

//operadores de atribuição (=, =+, -=, *=, /=)

let dado = 'alguma informação'

let x = 5   
console.log(x)
x= x+5
console.log(x)
x += 5
console.log(x)      

//operadores de comparação (<,>, <=, >=, ==, !=, ===, !==)
// console.log(3>6)
// console.log(10>4) //true
// console.log(10*3 >= 30/3) //true
// console.log(2=='2') //true
// console.log(2==='2') //false
// console.log(2!=='2') //true

// operadores lógicos (&&, ||, !)

console.log(10 == 1 && 20 != 5) //as duas condições Verdadeiras
console.log(20 == 20 && 3 < 10) 
console.log(10 === '10'|| 20 > 5) //true

let z = 10
let y = 20

let comparacao = z > y //false
console.log(!!comparacao)  //falsy

//truthy e falsy 

let nome = "" //falsy 

console.log(!!nome)