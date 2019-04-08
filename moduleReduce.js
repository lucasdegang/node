const numeros = [10, 2 , 50, 55, 80, 79, 5, 89, 123, 3, 0]

// Sintaxe .reduce
// array.reduce(function(valorDaCondicaoReduce, valorAtual, indice, array)

const menorNumero = (menorNumeroX, numeroAtual) => {
    if(numeroAtual < menorNumeroX){
        return menorNumeroX = numeroAtual
    }else{
        return menorNumeroX
    }
}
const maiorNumero = (maiorNumeroX, numeroAtual) => {
    if(numeroAtual > maiorNumeroX){
        return maiorNumeroX = numeroAtual
    }else{
        return maiorNumeroX
    }
}

console.log(numeros.reduce(menorNumero))
console.log(numeros.reduce(maiorNumero))