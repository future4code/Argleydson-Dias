~~~Javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let count = 0;
  for(let i = 0; i < arrayDeNumeros.length; i++){
    if(numeroEscolhido === arrayDeNumeros[i]){
      count += 1      
    } 
  }  
  
  if(count === 0){    
    return ("Número não encontrado")
  } else {
    return (`O número ${numeroEscolhido} aparece ${count}x`)
  }  
}
~~~