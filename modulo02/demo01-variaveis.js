const pessoa = {}
pessoa.nome = "Hediberto"
pessoa.idade = 28
pessoa.peso = 75.5

let habilidades = ['andar', 'correr']


console.log(
    `Nome: ${pessoa.nome} \nIdade: ${pessoa.idade} \nPeso: ${pessoa.peso}`
)

console.log(habilidades)

console.log(
`Tipo da Variável "pessoa": ${typeof pessoa}
Tipo da Variável "pessoa.nome": ${typeof pessoa.nome}
Tipo da Variável "pessoa.idade": ${typeof pessoa.idade}
Tipo da Variável "pessoa.peso": ${typeof pessoa.peso}
Tipo da Variável "habilidades": ${typeof habilidades}`
)

console.log('13' + 37) // 1337
console.log('15' - 5) // 10
const sum = ['a', 'b'] + ['c', 'd']
console.log(sum) // a,bc,d
console.log(typeof sum) // string
console.log([5] - [2]) // 3

const x = 'str'
const y = 123
const z = []

console.log(x && y)
console.log(y && z)
console.log(x || y)