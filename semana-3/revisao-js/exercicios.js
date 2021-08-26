// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()

    //outra forma
    // let reverso = [];
    // for (let i = array.length - 1; i >= 0; i--) {
    //     reverso.push(array[i])
    // }
    // return reverso
}


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    return array

    // Outra forma
    // return array.sort((previous, current) => previous - current)

    // Outra forma
    // const resultado = []
    // const inserirEmOrdem = (arr, item) => {
    //     for (let i in arr) {
    //         if (item < arr[i]) {
    //             arr.splice(i, 0, item)
    //             return
    //         }
    //     }
    //     arr.push(item)
    // }
    // for (let item of array) inserirEmOrdem(resultado, item)
    // return resultado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let par = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            par.push(array[i])
        }
    }
    return par

    // outra forma
    // const resultado = []
    // for (const item of array) {
    //     if (item % 2 === 0) resultado.push(item)
    // }
    // return resultado

    // outra forma
    // return array.filter(n => n % 2 === 0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let parElevadoNa2 = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            parElevadoNa2.push(array[i] ** 2)
        }
    }
    return parElevadoNa2

    // outra forma
    // return retornaNumerosPares(array).map(n => n ** 2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
    }
    return maiorNumero

    // outra forma
    // const arrayEmOrdemDecrescente = retornaArrayInvertido(retornaArrayOrdenado(array))
    // return arrayEmOrdemDecrescente[0]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero;
    if (num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }
    let maiorDivisivelPorMenor = (maiorNumero % menorNumero === 0);
    let diferenca = (maiorNumero - menorNumero);
    const objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }
    return objeto

    // outra forma
    // const [menor, maior] = retornaArrayOrdenado([num1, num2])
    // return {
    //     maiorNumero: maior,
    //     maiorDivisivelPorMenor: maior % menor === 0,
    //     diferenca: maior - menor
    // }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let pares = [];
    for (let i = 0; pares.length < n; i++) {
        if (i % 2 === 0) {
            pares.push(i)
        }
    }
    return pares

    // outras forma
    // const resultado = []
    // for (let i = 0; i < n; i++) {
    //     resultado[i] = 2 * i
    // }
    // return resultado

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero";
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }

    // outra forma
    // if (ladoA === ladoB && ladoB === ladoC) return "Equilátero"
    // if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) return "Isósceles"
    // return "Escaleno"
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let ordenarArray = retornaArrayOrdenado(array);
    return [
        ordenarArray[array.length - 2],
        ordenarArray[1]
    ]

    // outra forma
    // const arrayOrdenado = retornaArrayOrdenado(array)
    // const indiceSegundoMenor = 1
    // const indiceSegundoMaior = array.length - 2

    // return [
    //    arrayOrdenado[indiceSegundoMaior],
    //    arrayOrdenado[indiceSegundoMenor]
    // ]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return { ...pessoa, nome: "ANÔNIMO" }
}

// EXERCÍCIO 13
const validarPessoa = pessoa => (
    pessoa.altura > 1.5 &&
    pessoa.idade > 14 &&
    pessoa.idade < 60
 )

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter(validarPessoa)
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter(pessoa => !validarPessoa(pessoa))
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    const somar = (num1, num2) => num1 + num2
    contas.forEach(conta => {
        const somaDosGastos = conta.compras.reduce(somar, 0)
        conta.saldoTotal -= somaDosGastos
        conta.compras = []
    })
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const compararNomesDeConsulta = (a, b) => a.nome > b.nome ? 1 : -1
    return consultas.sort(compararNomesDeConsulta)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    const gerarData = string => {
        const [dia, mes, ano] = string.split("/")  
        return new Date(`${ano}-${mes}-${dia}`)
     }  
     const compararDatasDeConsulta = (a, b) => {
        if (gerarData(a.dataDaConsulta) > gerarData(b.dataDaConsulta)) {
           return 1
        } else {
           return -1
        }
     }  
     return consultas.sort(compararDatasDeConsulta)
}