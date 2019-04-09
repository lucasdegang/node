const porta = 3033

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({status: 'OK', cod: 200}) // metodo .send converte para json automaticamente
})

app.listen(porta, () => {
    console.log(`Server executando na porta ${porta}.`)
})