// express criação de webservices

// porta é um processo para o computador
    // pcA para pcB - quando os pcs se comunicam precisa do nome e a porta, é a porta que cuida do processo.
    // portanto a porta é unica por processo. Logo precisa do IP da máquina e a Porta

const porta = 3030
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true})) // transforma o corpo da requisicao em objeto

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, nex) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // json
})

app.put('/produtos/:id', (req, res, nex) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // json
})

app.delete('/produtos/:id', (req, res, nex) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // json
})

/*app.get('/produtos', (req, res, next) =>{
    console.log('Moddleware 1....')
    next()
})

app.get('/produtos', (req, res, next) =>{
    res.send({nome:"notebook", preco: 123.45}) // objeto sera convertido para json pelo metodo send
})
*/

// responde para todos os tipos de requisicoes
/*
app.use('/produtos', (req, res, next) =>{
    res.send({nome:"notebook", preco: 123.45}) // objeto sera convertido para json pelo metodo send
})
*/

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})