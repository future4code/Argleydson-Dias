// --- Exercícios de interpretação de código
// 1.
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// Verifica se o número possui resto 0 qndo dividido por 2 e imprime no console a msg, caso não tenha resto zero ele imprime outra msg.
// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// para números pares, diviseis por 2 com resto zero
// c) Para que tipos de números a mensagem é "Não passou no teste"? 
// todos os outros 

// 2.
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     // breaPêrak; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima? // verificar o preço de cada fruta
// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"? O preço da fruta, Maçã, é, R$ 2.25
// c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos 
//    o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")? ele vai imprimir a msg do default

// 3.
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo? se o número for maior que 0 vai imprimir a msg: ("Esse número passou no teste")

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? 
// 10 = ("Esse número passou no teste"), -10 vai dizer a mensagem não foi declarada pois está dentro de um condicional para numero amior que zero e não para menor.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// mensagem está dentro de um scopo e sendo solicitada fora dele, por isso não pode ser lida

// --- Exercícios de escrita de código
// 1.
// let idade = Number(prompt("Qual sua idade?"));

// if (idade > 18) {
//     console.log("Você pode dirigir.")
// } else {
//     console.log("Você não pode dirigir.")
// }

// 2.
// let turno = prompt("Em qual turno você trabalha? digite M (matutino), V (Vespertino) ou N (Noturno)").toUpperCase()


// if(turno === "M") {
//     console.log( "Bom Dia!")
// } else if(turno === "V") {
//     console.log("Boa Tarde!")
// } else if(turno === "N") {
//     console.log("Boa Noite!")
// } else {
//     console.log("Você não digitou um turno válido, tente novamente!")
// }

// 3.
// let turno = prompt("Em qual turno você trabalha? digite M (matutino), V (Vespertino) ou N (Noturno)").toUpperCase()

// switch (turno) {
//     case "M":
//         console.log("Bom Dia!")
//         break
//     case "V":
//         console.log("Boa Tarde!")
//         break
//     case "N":
//         console.log("Boa Noite!")
//         break 
//     default:
//         console.log("Você não digitou um turno válido, tente novamente!")
//         break
// }

// 4.
// let generoFilme = prompt("Qual o gênero do filme?").toLowerCase()
// let valorIngresso = Number(prompt("Qual o preço do ingresso em R$?"))
//  if (generoFilme === "fantasia" && valorIngresso <= 15) {
//      console.log("Bom filme!")
//  } else {
//      console.log("Escolha outro filme :(")
//  }

// --- Desafios
// 1.
// let generoFilme = prompt("Qual o gênero do filme?").toLowerCase()
// let valorIngresso = Number(prompt("Qual o preço do ingresso em R$?"))
//  if (generoFilme === "fantasia" && valorIngresso <= 15) {
//      let lanche = prompt("Qual lanchinho você vai querer?")
//      console.log(`
//         Bom filme! 
//         Aproveite seu ${lanche}.
//     `)
//  } else {
//      console.log("Escolha outro filme :(")
//  }

// 2.
let nomeCompleto = prompt("Qual seu nome?");
let tipoJogo = prompt("Qual o tipo de jogo? IN indica internacional; e DO indica doméstico; ").toUpperCase();
let etapaJogo = prompt("Qual etapa? SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toUpperCase();
let categoria = Number(prompt("Qual categoria de 1 à 4?"));
let quantidaIngressos = Number(prompt("Quantos ingressos?"));

// ingressos DO
let ingressoCategoriaSf = [1320, 880, 550, 220];
let ingressoCategoriaDt = [660, 440, 330, 170];
let ingressoCategoriaFi = [1980, 1320, 880, 330];

// converter ingressos DO para IN
let conversao = 4.10;

if(tipoJogo === "DO" && etapaJogo === "SF") {
    let valorTotal = (ingressoCategoriaSf[(categoria - 1)] * quantidaIngressos);
    console.log(`
        ---Dados da compra---
        Nome do cliente: ${nomeCompleto}
        Tipo do jogo: Nacional
        Etapa do jogo: Semi final
        Categoria: ${categoria}
        Quantidade de Ingressos: ${quantidaIngressos}
        ---Valores---
        Valor do ingresso: R$ ${ingressoCategoriaSf[(categoria - 1)]}
        Valor total: ${valorTotal}
    `)
} else if(tipoJogo === "DO" && etapaJogo === "DT") {
    let valorTotal = (ingressoCategoriaDt[(categoria - 1)] * quantidaIngressos);
    console.log(`
        ---Dados da compra---
        Nome do cliente: ${nomeCompleto}
        Tipo do jogo: Nacional
        Etapa do jogo: Decisão do 3º lugar}
        Categoria: ${categoria}
        Quantidade de Ingressos: ${quantidaIngressos}
        ---Valores---
        Valor do ingresso: R$ ${ingressoCategoriaDt[(categoria - 1)]}
        Valor total: ${valorTotal}
    `)
} else if(tipoJogo === "DO" && etapaJogo === "FI") {
    let valorTotal = (ingressoCategoriaFi[(categoria - 1)] * quantidaIngressos);
    console.log(`
        ---Dados da compra---
        Nome do cliente: ${nomeCompleto}
        Tipo do jogo: Nacional
        Etapa do jogo: Final
        Categoria: ${categoria}
        Quantidade de Ingressos: ${quantidaIngressos}
        ---Valores---
        Valor do ingresso: R$ ${ingressoCategoriaFi[(categoria - 1)]}
        Valor total: ${valorTotal}
    `)
} else if(tipoJogo === "IN" && etapaJogo === "SF") {
    let valorTotal =((ingressoCategoriaSf[(categoria - 1)] * quantidaIngressos)) /  conversao;
    console.log(`
        ---Dados da compra---
        Nome do cliente: ${nomeCompleto}
        Tipo do jogo: Internacional
        Etapa do jogo: Semi final
        Categoria: ${categoria}
        Quantidade de Ingressos: ${quantidaIngressos}
        ---Valores---
        Valor do ingresso: R$ ${ingressoCategoriaSf[(categoria - 1)] / conversao}
        Valor total: ${valorTotal}
    `)
} else if(tipoJogo === "IN" && etapaJogo === "DT") {
    let valorTotal = ((ingressoCategoriaDt[(categoria - 1)] * quantidaIngressos)) / conversao;
    console.log(`
        ---Dados da compra---
        Nome do cliente: ${nomeCompleto}
        Tipo do jogo: Internacional
        Etapa do jogo: Decisão do 3º lugar}
        Categoria: ${categoria}
        Quantidade de Ingressos: ${quantidaIngressos}
        ---Valores---
        Valor do ingresso: R$ ${ingressoCategoriaDt[(categoria - 1)] / conversao}
        Valor total: ${valorTotal}
    `)
} else if(tipoJogo === "IN" && etapaJogo === "FI") {
    let valorTotal = ((ingressoCategoriaFi[(categoria - 1)] * quantidaIngressos)) / conversao;
    console.log(`
        ---Dados da compra---
        Nome do cliente: ${nomeCompleto}
        Tipo do jogo: Internacional
        Etapa do jogo: Final
        Categoria: ${categoria}
        Quantidade de Ingressos: ${quantidaIngressos}
        ---Valores---
        Valor do ingresso: R$ ${ingressoCategoriaFi[(categoria - 1)] / conversao}
        Valor total: ${valorTotal}
    `)
} else {
    console.log("Você digitou algo errado!")
}