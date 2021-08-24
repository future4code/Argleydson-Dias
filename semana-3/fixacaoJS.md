~~~javascript 
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    const salario = 2000;
    const comissao = Math.round(100 * qtdeCarrosVendidos) + Math.round((5 / 100) * valorTotalVendas)
    return Math.round(salario + comissao)
}
~~~