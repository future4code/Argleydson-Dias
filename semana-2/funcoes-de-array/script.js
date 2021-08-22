// --- Exercícios de interpretação de código
// 1.
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
// a) vai imprimir cada um dos objetos do array

// 2.
//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })

//   console.log(novoArrayB)
// a) vai imprimir só os nomes contidos em cada objeto do array

// 3.
//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })

//   console.log(novoArrayC)
// a) vai imprimir um array com os objetos que não têm o apelido "Chijo"

// --- Exercícios de escrita de código
// // 1.
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
// // a) Crie um novo array que contenha apenas o nome dos doguinhos
// const nomeDoguinhos = pets.map(
//     (item, index, array) => {
//         return item.nome
//     }
// )
// console.log(nomeDoguinhos)

// // b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)
// const racas = pets.map((item, index, array) => { return item.raca})
// console.log(racas)

// const racaSalsicha = pets.filter((item, index, array) => {return item.raca === "Salsicha"})
// console.log(racaSalsicha)

// // c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
// //    A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
// const descontoRacaPoodle = pets
//     .filter((item, index, array) => {return item.raca === "Poodle"})
//     .map((item, index, array) => {return(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)})
// console.log(descontoRacaPoodle)

// // --- outra forma de escrever a letra c)
// const descontoRacaPoodle = pets
//     .filter(item => item.raca === "Poodle")
//     .map(item => `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
// console.log(descontoRacaPoodle)

// //2.
// const produtos = [
//   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//   { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
//   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
// ];

// // a)
// const nomes = produtos.map((item, index, array) => {
//   return item.nome;
// });
// console.log(nomes);

// // b)
// const nomePrecoDesconto = produtos.map((item, index, array) => {
//   return {
//     nome: item.nome,
//     preco: item.preco - (item.preco * 5) / 100,
//   };
// });
// console.log(nomePrecoDesconto);

// --- outra forma de escrever a b)
// const nomeEPreco = produtos.map((valor, i, array) =>{
//     const nome = valor.nome
//     const preco = (valor.preco - (valor.preco *0.05)).toFixed(2)
//     return {nome, preco}
// })
// console.log(nomeEPreco)

// // c)
// const apenasBebidas = produtos.filter((item, index, array) => {
//   return item.categoria === "Bebidas";
// });
// console.log(apenasBebidas);

// // d)
// const apenasYpe = produtos.filter((item, index, array) => {
//   return item.nome.includes("Ypê");
// });
// console.log(apenasYpe);

// // e)
// const compreYpe = produtos
//   .filter((item, index, array) => {
//     return item.nome.includes("Ypê");
//   })
//   .map((item, index, array) => {
//     return `Compre ${item.nome} por ${item.preco}`;
//   });
// console.log(compreYpe);

// --- Desafios
// 1.
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

// // a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
// const newArrayPokemons = pokemons.sort(function (a, b) { // sort compara o primeiro com o próximo
//   if (a.nome > b.nome) {
//     return 1;
//   }
//   if (a.nome < b.nome) {
//     return -1;
//   }
//   // se a igual b
//   return 0;
// });
// console.log(newArrayPokemons);

// --- outra forma de fazer a a)
const nomePokemons = pokemons.map((poke) => {
  return poke.nome;
});
const pokemonsOrdenados = nomePokemons.sort((a, b) => a.localeCompare(b));
console.log("item a", pokemonsOrdenados);

// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
// function limpaValoresRepetidos(array) {
//   for (let i in array) {
//     let valorComparado = array[i].tipo;
//     let cont = 0; //contador de incidencia de repeticao, seu valor deve ser 1
//     for (let i in array) {
//       if (valorComparado === array[i].tipo) {
//         cont += 1;
//         if (cont > 1) {
//           cont--;
//           delete array[i];
//         }
//       }
//     }
//   }
//   return array;
// }
// console.log(limpaValoresRepetidos(pokemons));

// --- outra forma de fazer a b)
const tipos = pokemons.map((poke) => {
  return poke.tipo;
});
console.log(tipos);

const tiposSemRepetir = tipos.filter((tipo, index, array) => {
  return array.indexOf(tipo) === index;
});
console.log("item b", tiposSemRepetir);