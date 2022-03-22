// function nomeDaFuncao() {
//     // bloco de comandos
// }
// function queDieEHoje() {
//     const hoje = new Date()
//     console.log(`Hoje é dia ${hoje.getDate()}.`)
// }
// queDieEHoje()

// function somaPrint(valor1, valor2) {
//     console.log(`A soma de ${valor1} + ${valor2} é ${valor1 + valor2}`)
// }
// somaPrint(5, 10)
// somaPrint(20, 5)

// function soma(valor1, valor2) {
//     return valor1 + valor2
// }

// const idade = 20
// const tamanho = 10
// const resultado = soma(idade, tamanho)
// console.log(resultado)


const funcionario1 = {
    nome: 'Hediberto',
    salarioLiquido: 0,
    salarioBruto: 3000,
    desconto: 0.1
}
const funcionario2 = {
    nome: 'Silva',
    salarioLiquido: 0,
    salarioBruto: 3000,
    desconto: 0.15
}

function calcularDesconto(salarioBruto, desconto) {
    return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido = calcularDesconto(
    funcionario1.salarioBruto,
    funcionario1.desconto
)
funcionario2.salarioLiquido = calcularDesconto(
    funcionario2.salarioBruto,
    funcionario2.desconto
)

console.log(`
    Salário ${funcionario1.nome}: ${funcionario1.salarioLiquido}
    Salário ${funcionario2.nome}: ${funcionario2.salarioLiquido}
`)
