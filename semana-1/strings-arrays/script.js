// // --- Exercícios de interpretação de código
// // 1 -
// let array
// console.log('a. ', array) // undefined

// array = null
// console.log('b. ', array) // null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // 11 

// let i = 0
// console.log('d. ', array[i]) // 3

// array[i+1] = 19
// console.log('e. ', array) // substitui o array de índice 1, [0+1], por 19, ou seja, [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor) // 9

// // 2 -
// // const frase = prompt("Digite uma frase")
// const frase = "Subi num ônibus em Marrocos"
// // se a frase for: "Subi num ônibus em Marrocos"
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27



// --- Exercícios de escrita de código
// 1-
// const nome = prompt('Qual seu nome?')
// const email = prompt('Qual seu email?')
// console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem vinda(o), ${nome}!`)

// // 2-
// // a)
// let comida = ['churrasco', 'lasanha', 'sushi', 'hamburguer', 'pastel']
// console.log('a)', comida)
// // b)
// console.log('b)', 'Essas são as minhas comidas preferidas: ',comida[0],',', comida[1], ',', comida[2], ',', comida[3], ',', comida[4])

// // c)
// let comidaUsr = prompt('Qual sua comida favorita?')
// comida[1] = comidaUsr
// console.log('2-c:', comida)

// // 3-
// // a)
// let listaDeTarefas = []
// let tarefaUm = 'lavar' // prompt('Tarefa um')
// let tarefaDois = 'passar' // prompt('Tarefa dois')
// let tarefaTres = 'cozinhar' // prompt('Tarefa três')

// listaDeTarefas.push(tarefaUm, tarefaDois, tarefaTres)
// console.log('c)', listaDeTarefas)

// let tarefaRealizada = 1 // prompt number('Qual tarefa você já realizou, 0, 1 ou 2?')
// listaDeTarefas.splice(tarefaRealizada, 1)
// console.log(listaDeTarefas)


// // ---- DESAFIOS
// // 1-
// let frase = 'Olha eu aqui'
// let arrayFrase = frase.split('')

// console.log(arrayFrase)

// // 2-
// let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// console.log(`índice: ${frutas.indexOf("Abacaxi")}, tamanho do array: ${frutas.length}`)