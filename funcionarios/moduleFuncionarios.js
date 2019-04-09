const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

let genero = f => f.genero == "F" 
let nacionalidade = f => f.pais == "China" 

let menorSalario = (pessoaX, pessoaAtual) => {
    return pessoaAtual.salario > pessoaX.salario ? pessoaX : pessoaAtual
}
let maiorSalario = (pessoaX, pessoaAtual) => {
    return pessoaAtual.salario < pessoaX.salario ? pessoaX : pessoaAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(genero).filter(nacionalidade).reduce(menorSalario))
})


