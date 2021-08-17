// --- Exercícios de interpretação de código

// 1-Leia o código abaixo
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?
//      10
//      50

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//      no console não iria mostrar nada.
//      está chamando a função mas como dentro da função só tem return e não console.log, nada será mostrado.

// 2-Exercícios de interpretação de código
// let textoDoUsuario = prompt("Insira um texto");
// let textoDoUsuario = "Eu gosto de cenoura"; 
// let textoDoUsuario = "CENOURA é bom pra vista";
// let textoDoUsuario = "Cenouras crescem na terra";

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade
//      Vai pegar a frase e deixar ela toda em letras minúsculas, depois vai verificar de a palavra "cenoura" está inclusa na frase. a resposta será um true ou false

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura` // true
//      ii.  `CENOURA é bom pra vista` // true
//      iii. `Cenouras crescem na terra` // true


// --- Exercícios de escrita de código
// 1-Escreva as funções explicadas abaixo:
// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

// b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e 
// uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].



// function sobreMim (nome, idade, cidade, profissao) {
//     resultado =`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
//     return resultado
// }
// console.log(sobreMim("Caio", 23, "São Paulo","estudante"))


// let nome = "Caio"; // prompt(Qual seu nome?)
// let idade = 23; // prompt Number(Qual sua idade?)
// let cidade = "São Paulo" // prompt(Qual sua cidade?)
// let profissao = "estudante" // prompt(Qual sua profissão?)

// function sobreMim (nome, idade, cidade, profissao) {
//     let resultado =`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
//     return resultado
// }
// console.log(sobreMim(nome, idade, cidade, profissao))

// 2-
// a)
// const recebaNumeros = (primeiroNumero, segundoNumero) => {
//     soma = primeiroNumero + segundoNumero
//     return soma
// }
// console.log(recebaNumeros(1,2))

// b)
// const recebaNumeros = (primeiroNumero, segundoNumero) => {
//      return (primeiroNumero >= segundoNumero) 
// }
// console.log(recebaNumeros(1,2))

// c)
// const numeroPar = (primeiroNumero) => {
//     let par = ((primeiroNumero % 2) === 0)
//     return (par) 
// }
// console.log(numeroPar(2))

// d)
// let texto = prompt('Digite um texto.')
// const tamanhoTexto = (texto) => {
//     return (`O tamanho do texto, ${texto.toLowerCase()}, é: ${texto.length}`)
// }
// console.log(tamanhoTexto(texto))

// 3-
// const soma = (a, b) => {
//     return(a + b)
// }

// const subtracao = (a, b) => {
//     return(a - b)
// }

// const multiplicacao = (a, b) => {
//     return(a * b)
// }

// const divisao = (a, b) => {
//     return(a / b)
// }

// let primeiroNumeroInserido = 2 // prompt Number('Digite o primeiro número')
// let segundoNumeroInserido = 1 // prompt Number('Digite o segundo número')

// console.log(`
//     Números inseridos: ${primeiroNumeroInserido} e ${segundoNumeroInserido},
//     Soma: ${soma(primeiroNumeroInserido, segundoNumeroInserido)},
//     Diferença: ${subtracao(primeiroNumeroInserido, segundoNumeroInserido)},
//     Multiplicação: ${multiplicacao(primeiroNumeroInserido, segundoNumeroInserido)},
//     Divisão: ${divisao(primeiroNumeroInserido, segundoNumeroInserido)}
// `)

// --- DESAFIOS
// 1-
// const parametro = (valor) => {
//     console.log(valor)
//     return valor
// }
// // parametro(2)

// const soma = (a, b) => {
//         return(a + b)
// }

// parametro(soma(1,2))

// 2-
// const pitagoras = (a, b) => {
//     let somaQuadrado = ((a ** 2) + (b ** 2))
//     let hipotenusa = (somaQuadrado ** (1/2))
//     console.log(hipotenusa)
//     return hipotenusa
// }
// pitagoras(4,4)
