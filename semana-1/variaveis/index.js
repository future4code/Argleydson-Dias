// 1 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
// let a = 10
// let b = 10

// console.log(b) // Vai mostrar o valor da variável b, 10. 

// b = 5
// console.log(a, b) // vai mostrar o valor da variável a, 10, e b que agora vale 5 pois foi declarada novamente.

 
// 2 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
// let a = 10
// let b = 20
// c = a 
// b = c 
// a = b 

// console.log(a, b, c) // vai mostrar 10 em todas as varáveis

// 3 - Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que 
// devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com 
// números ou caracteres especiais.
// let p = prompt("Quantas horas você trabalha por dia?")
// let t = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t/p} por hora`)

// sugestão:
// let horasDia = prompt("Quantas horas você trabalha por dia?")
// let salarioDia = prompt("Quanto você recebe por dia?")
// alert("Voce recebe ${horasDia/salarioDia} por hora")

// EXERCÍCIOS DE ESCRITA DO CÓDIGO
// 1 - 

// let nome
// let idade

// // console.log (typeof nome) // vai dar undefined pq não foi dado um valor para a varável
// // console.log (typeof idade) // vai dar undefined pq não foi dado um valor para a varável

// nome = prompt("Qual seu nome?")
// idade = prompt("Qual sua idade?")

// console.log(typeof nome) // vai ser string
// console.log(typeof idade) // vai ser string

// console.log("Olá", nome + ",","você tem", idade,"anos." )

// 2 - 
// let camiseta = prompt ("Você está usando camiseta?")
// let calca = prompt ("Você está usando calça?")
// let tenis = prompt ("Você está usando tênis?")

// console.log(camiseta)
// console.log(calca)
// console.log(tenis)

//3 - 
// let a = 10
// let b = 25

// // Aqui faremos uma lógica para trocar os valores
// let c = a
// a = b
// b = c

// // Depois de trocados, teremos o seguinte resultado:
// console.log("O novo valor de a é", a) // O novo valor de a é 25
// console.log("O novo valor de b é", b) // O novo valor de b é 10


// DESAFIO
let idade = Number(prompt("Qual sua idade?"))
let numeroSorte = Number(prompt("Qual seu número da sorte?"))

let x = idade + numeroSorte
let y = idade * numeroSorte

console.log(x)
console.log(y)

