~~~Javascript
function calculaNota(ex, p1, p2) {
  let pesoEx = ex * 1;
  let pesoProva1 = p1 * 2;
  let pesoProva2 = p2 * 3;
  let media = (pesoEx+pesoProva1+pesoProva2) / 6;
  if(media >= 9){
    return "A"
  } else if(media < 9 && media >= 7.5){
    return "B"
  } else if(media < 7.5 && media >= 6){
    return "C"
  } else {
    return "D"
  }
}
~~~