~~~javascript
function calculaPrecoTotal(quantidade) {
  let precoMaca;
    if(quantidade < 12){
        precoMaca = 1.30;
    } else {
        precoMaca = 1.00
    }
    return precoMaca * quantidade
}
~~~