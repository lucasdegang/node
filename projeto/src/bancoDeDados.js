const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

function salvarProduto (produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto 
}

function getProduto(id){
    return produtos[id] || {} // quando nao encontrar retorna vazio
}

function getProdutos(){
    return Object.values(produtos) || {}
}

function excluirProduto (id){
    const produto = produtos[id]
    delete produtos[id]
    return `Exclusão do produto ${produto.nome} com sucesso.` || {}
}

// tornar funcoes visiveis para outros documentos
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}