// --- Exercícios de interpretação de código
// 1.
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// valor vai ser 10. vai fazer um loop de 0 até um i menor que 5 e vai retornar o valor.
// valor está somando valor + i.

// 2. 
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero);
// 	}
// }
// a) vai ser impresso 19, 21, 23, 25, 27, 30,
// b) numero é o indice de cada elemento, chamando uma variavel de valor = numero e imprimindo valor.

// 3.
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// o resultado vão ser 4 linhas, linha1 com *, linha2 com **, linha3 com *** e linha 4 com 4*

// --- Exercícios de interpretação de código
// 1. 
// let quantidadeBichinhos = Number(prompt("Quantos bichinhos você tem?"));

// if(quantidadeBichinhos == 0) {
//     console.log("Que pena! Você pode adotar um pet!");
// }

// if(quantidadeBichinhos > 0){
//     for(let i = 0; i < quantidadeBichinhos; i++){
//         let nomePet = "";
//         nomePet = prompt("Qual o nome dele?").toLowerCase()
//         console.log(`Nome do pet: ${nomePet}`);
//     }
// }

// 2.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a)
for(let index of array) {
    let valorNoIndex = index;
    console.log(valorNoIndex);
}

// b)
for(let index of array) {
    let valorNoIndex = index;
    console.log(valorNoIndex/10);
}

// c)
let arrayPar = [];
for(let index of array) {
    if(index % 2 == 0) {       
        arrayPar.push(index);
    }    
}
console.log(arrayPar);

// d)
let arrayString = [];
for(let i = 0; i < array.length; i++) {
    arrayString.push(`O elemento do índice ${i} é o ${array[i]}`)
}
console.log(arrayString);

// e)
let maior = 0;
for(let index of array) {
    if(index > maior){
        maior = index 
    }     
}
// console.log(maior);

let menor = 200;
for(let index of array) {
    if (index < menor) {
        menor = index     
    }
} 
// console.log(menor)
console.log(`O maior é o ${maior} e o menor é ${menor}`)

// --- Desafios