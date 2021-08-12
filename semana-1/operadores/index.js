// 1 -
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) // a. false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) // b. false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) // c. true

// console.log("d. ", typeof resultado) // d. boolean

// 2 - 
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma) // está concatenando, deveria usar Number pra somar números.

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// ESCRITA DE CÓDIGO

// 1-
// const idade = Number(prompt("Qual sua idade?"))
// const idadeAmigue = Number(prompt("Qual idade de seu melhor amigue?"))

// let diferencaIdades = Math.abs(idade - idadeAmigue) // usei Math.abs pra idade não ser negativa

// console.log("Você é mais velho que seu amigue?", idade > idadeAmigue, diferencaIdades)

// 2-
// const numeroPar = Number(prompt("Digite um número par:"))
// const restoPorDois = numeroPar % 2

// console.log(restoPorDois) // todas as repostas vão ser Zero pois são números pares divididos por 2. Se for ímpar a divisão vai ser diferente de zero.

// 3-
// const idade = Number(prompt("Qual sua idade?"))
// let meses = (idade * 12)
// let dias = (idade * 360)
// let horas = (dias * 24)

// console.log("Você já viveu:", meses,"meses, ou", dias, "dias, ou", horas, "horas")

// 4-
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
// console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)
// console.log("O primeiro numero é divisível pelo segundo?", ((primeiroNumero % segundoNumero) === 0))
// console.log("O segundo numero é divisível pelo primeiro?", ((segundoNumero % primeiroNumero) === 0))

// DESAFIO
// 1-
let grausFemK = (77 - 32)*(5/9) + 273.15
console.log(grausFemK, "K")

let grausCemF = (80)*(9/5) + 32
console.log(grausCemF, "°F")

let grausCemFtrinta = (30)*(9/5) + 32
let grausFemKtrinta = (grausCemFtrinta - 32)*(5/9) + 273.15
console.log(grausCemFtrinta, "°F", grausFemKtrinta, "K")

let valorCelsious = Number(prompt("Digite o valor em graus Celsius para converter em Kelvin e Fahrenheit"))
let grausCparaF = (valorCelsious)*(9/5) + 32
let grausFparaK = (grausCparaF - 32)*(5/9) + 273.15
console.log(grausCparaF, "°F", grausFparaK, "K")

// 2-
