let carros = [
    '{"marca": "VW", "modelo": "Golf", "valor": 89990, "ano": 2017}',
    '{"marca": "Fiat", "modelo": "Uno", "valor": 32500, "ano": 2015}',
    '{"marca": "Mercedes", "modelo": "C180", "valor": 55990, "ano": 2014}'
]

let jsonParaObjeto = json => JSON.parse(json)

// ================ MAP ================ filtros .map()
// Obs.:
// Informar qual deve ser o valor de retorno da arrow function pelo comando ? true : false
// Montar a condicional em uma unica arrow function com o conectivo E, conjuncao

let mapAnoValor = json => json.ano <= 2016 && json.valor < 100000 ? `${json.ano}` : false
let mapAno = json => json.ano <= 2016 ? `${json.ano}` : false
let mapValor= json => json.valor < 100000 ? `${json.valor}` : false

console.log("map 1 - Sem .sort() " + carros.map(jsonParaObjeto).map(mapAnoValor)) //SEM ORDENACAO
console.log("map 2 - Com .sort() " + carros.map(jsonParaObjeto).map(mapAnoValor).sort()) //ORDENA DE ACORDO COM O RESULTADO DE .map(mapAnoValor)
/*ERRO*/ console.log("map 3 - sem .sort() " + carros.map(jsonParaObjeto).map(mapAno).map(mapValor))
/*ERRO*/ console.log("map 4 - com .sort() " + carros.map(jsonParaObjeto).map(mapAno).map(mapValor).sort())

// ================ Filter ================ filtros .filter()
// Obs.: 
// .sort() nao funciona no .filter()
// Nao funciona console.log("mensagem" + comando.filter() , pois retorna [object object])

let filterAnoValor = json => json.ano <= 2016 && json.valor < 100000
let filterMarca = json => json.marca
let filterModelo = json => json.modelo 
let filterAno = json => json.ano <= 2016
let filterValor = json => json.valor < 100000

console.log(carros.map(jsonParaObjeto).filter(filterAnoValor) )
console.log(carros.map(jsonParaObjeto).filter(filterAnoValor).sort() )
console.log(carros.map(jsonParaObjeto).filter(filterAno).filter(filterValor) )
console.log(carros.map(jsonParaObjeto).filter(filterAno).filter(filterValor).sort() )