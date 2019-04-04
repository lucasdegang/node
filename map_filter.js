let carros = [
    '{"marca": "VW", "modelo": "golf", "valor": 89990, "ano": 2018}',
    '{"marca": "Fiat", "modelo": "Uno", "valor": 32500, "ano": 2017}',
    '{"marca": "Mercedes", "modelo": "C180", "valor": 55990, "ano": 2014}'
]

let jsonParaObjeto = json => JSON.parse(json)

let mapFiltroAnoValor = json => json.ano >= 2017 && json.valor > 30000 //? `${json.modelo}` : null

let filterAno = json => json.ano >= 2015 
let filterValor = json => json.valor >= 30000

let filterSort = json => json.modelo



// map = carros[original] > carros[copia]
console.log(carros.map(jsonParaObjeto).map(mapFiltroAnoValor))

// filter
console.log(carros.map(jsonParaObjeto).filter(filterAno).filter(filterValor))

// sort
console.log(
    carros.map(jsonParaObjeto).map(filterSort).sort()
)