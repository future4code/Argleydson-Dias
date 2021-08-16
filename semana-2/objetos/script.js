// Exercícios de interpretação de código
// 1 -
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }
// // a) O que vai ser impresso no console?
// console.log(filme.elenco[0]) // "Matheus Nachtergaele"
// console.log(filme.elenco[filme.elenco.length - 1]) // "Virginia Cavendish"
// console.log(filme.transmissoesHoje[2]) // {canal: "Globo", horario: "14h"}

// 2 -
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// // a) O que vai ser impresso no console?
// console.log(cachorro) //  {	nome: "Juca", idade: 3,	raca: "SRD" }
// console.log(gato) //  {	nome: "Juba", idade: 3,	raca: "SRD" }
// console.log(tartaruga) // {	nome: "Jubo", idade: 3,	raca: "SRD" }

// // b) O que faz a sintaxe dos três pontos antes do nome de um objeto? faz uma cópia do objeto

// // 3 -
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// // a) O que vai ser impresso no console?
// console.log(minhaFuncao(pessoa, "backender")) // false 
// console.log(minhaFuncao(pessoa, "altura")) // undefined

// // b) Explique o valor impresso no console. Você sabe por que isso aconteceu? 
// // ele procura a palavra dentro do [] e retorna o valor atribuido a ela, no primeiro caso é false e no segundo a palavra não existe, por isso é undefined.

// ---- Exercícios de escrita de código
// 1.
// Exemplo de entrada
// a)
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
 
//  // Exemplo de saída
//  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

//  const nomeApelido = (target) => {
//      return (`Eu sou ${target.nome}, mas pode me chamar de: ${target.apelidos[0]}, ${target.apelidos[1]} ou ${target.apelidos[target.apelidos.length -1]}`)
//  }
//  console.log(nomeApelido(pessoa))

//  //b)
//  const novaPessoa = {
//      ...pessoa,
//      apelidos: ["Zézinho", "Zé", "Zed"]
//  }
//  console.log(nomeApelido(novaPessoa))

// 2.
// const pessoa = {
//     nome: "Leonardo",
//     idade: 35,
//     profissao: "Engenheiro"
// }

// const info =(target) => {
//     let dados = [target.nome, target.nome.length, target.idade, target.profissao, target.profissao.length]
//     return dados
// }
// console.log(info(pessoa))

// 3.
// let carrinho = [];

// const frutas = {
//     nome: "",
//     disponibilidade: true
// }

// const jaca = {
//     ...frutas,
//     nome: "Jaca"
// }

// const manga = {
//     ...frutas,
//     nome: "Manga"
// }

// const laranja = {
//     ...frutas,
//     nome: "Laranja"
// }

// const compra = (target) => {
//     target.push(jaca, manga, laranja)
//     return target
// }
// console.log(carrinho);
// console.log(frutas);
// console.log(jaca);
// console.log(manga);
// console.log(laranja);
// console.log(compra(carrinho))

// --- Desafios
// 1.
// const pessoa = {
//     nome: prompt("Qual seu nome?"),
//     idade: Number(prompt("Qual sua idade?")),
//     profissao: prompt("Qual sua profissão")
// }

// const info =(target) => {
//     let dados = [target.nome, target.nome.length, target.idade, target.profissao, target.profissao.length];
//     console.log(target);
//     return dados
// }
// console.log(info(pessoa));

// 2.
// const filmes = {
//     matrix1: {
//         nome: "Matrix",
//         anoLancamento: 1999,
//     },
//     matrix2: {
//         nome: "Matrix Reloaded",
//         anoLancamento: 2003,
//     },
//     matrix3: {
//         nome: "Matrix Revolutions",
//         anoLancamento: 2003,
//     },
//     matrix4: {
//         nome: "Matrix 4", 
//         anoLancamento: 2021,
//     }
// }

// const anoFilmes =(target) => {    
//     console.log(`O primeiro filme foi lançado antes do segundo? ${target.matrix1.anoLancamento < target.matrix2.anoLancamento}`)
//     console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${target.matrix1.anoLancamento == target.matrix2.anoLancamento} ` )   
// }
// anoFilmes(filmes);

// 3.
let carrinho = [];

const frutas = {
    nome: "",
    disponibilidade: true
}

const jaca = {
    ...frutas,
    nome: "Jaca"
}

const manga = {
    ...frutas,
    nome: "Manga"
}

const laranja = {
    ...frutas,
    nome: "Laranja"
}

const compra = (target) => {
    target.push(jaca, manga, laranja)
    return target
}
// console.log(carrinho);
// console.log(frutas);
// console.log(jaca);
// console.log(manga);
// console.log(laranja);
// console.log(compra(carrinho))

const frutaIndisponivel = (target) => {
    target = {
        ...frutas,
        nome: target,
        disponibilidade: !true
    }
    return target
}

console.log(frutaIndisponivel(laranja))