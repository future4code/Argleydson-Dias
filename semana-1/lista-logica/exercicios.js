// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt("Qual a altura?"))
  let largura = Number(prompt("Qual a largura?"))
  let area = altura * largura
  
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Em que ano estamos?"))
  let anoNascimento = Number(prompt("Em que ano você nasceu?"))
  let idade = anoAtual - anoNascimento
  
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = (peso / (altura * altura))
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual seu nome?")
  let idade = Number(prompt("Qual sua idade?"))
  let email = prompt("Qual seu email?")
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Cor 1")
  let cor2 = prompt("Cor 2")
  let cor3 = prompt("Cor 3")
  let cores = []
  cores.push(cor1, cor2, cor3)
  
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return (custo / valorIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return (string1.length === string2.length)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let first = array[0]
  array[0] = array[array.length -1]
  array[array.length -1] = first
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
    return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = Number(prompt("Em que ano estamos?"))
  let anoNascimento = Number(prompt("Em que ano você nasceu?"))
  let anoIdentidade = Number(prompt("Em que ano seu RG foi emitido?"))
  let idade = (anoAtual - anoNascimento)
  let idadeRG = (anoAtual - anoIdentidade)

  if (idade <= 20) {
    console.log(idadeRG >= 5)
  } else if (idade > 20 && idade <= 50) {
    console.log(idadeRG >= 10)
  } else {
    console.log(idadeRG >= 15)
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  return ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0)))
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let idade = prompt("Você tem mais de 18 anos?")
  let escolaridade = prompt("Você possui ensino médio completo?")
  let horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  console.log("sim" == idade && "sim" == escolaridade && "sim" == horario)  
}