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
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// // a)
// for (let index of array) {
//   let valorNoIndex = index;
//   console.log(valorNoIndex);
// }

// // b)
// for (let index of array) {
//   let valorNoIndex = index;
//   console.log(valorNoIndex / 10);
// }

// // c)
// const imprimePares = (arr) => {
//   let arrayPar = [];
//   for (let index of arr) {
//     if (index % 2 === 0) {
//       arrayPar.push(index);
//     }
//   }
//   console.log(arrayPar);
// };
// imprimePares(array);

// // d)
// const imprimeString = (arr) => {
//   let arrayString = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrayString.push(`O elemento do índice ${i} é o ${arr[i]}`);
//   }
//   console.log(arrayString);
// };
// imprimeString(array);

// // e)
// const maiorEmenor = (arr) => {
//   let maior = 0;
//   let menor = Infinity;
//   for (let index of arr) {
//     if (index > maior) {
//       maior = index;
//     }
//   }

//   for (let index of arr) {
//     if (index < menor) {
//       menor = index;
//     }
//   }
//   console.log(`O maior é o ${maior} e o menor é ${menor}`);
// };
// maiorEmenor(array);

//================= Desafios =====================
// // DESAFIOS 1 e 2
// console.log("Vamos jogar!");
// const numeroEscolhido = Math.floor(Math.random() * 100) + 1;

// let acertou = false;
// let tentativas = 0;

// let numeroChutado;

// while (!acertou) {
//   numeroChutado = Number(prompt("Chute um número"));
//   tentativas++;
//   console.log(`O número chutado foi: ${numeroChutado}`);
//   if (numeroChutado === numeroEscolhido) {
//     console.log("Acertou!");
//     console.log(`O número de tentativas foi : ${tentativas}`);
//     acertou = true;
//   } else if (numeroEscolhido > numeroChutado) {
//     console.log("Errou. O número escolhido é maior");
//   } else {
//     console.log("Errou. O número escolhido é menor");
//   }
// }
