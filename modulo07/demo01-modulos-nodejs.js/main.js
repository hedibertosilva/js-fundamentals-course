const Matematica = require('./matematica')
const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Digite o primeiro valor: \n", valor1 => {
    rl.question("Digite o segundo valor: \n", valor2 => {
        rl.question("Digite qual será a operação: \n", tipoOperacao => {
            let primeiroValor = Number(valor1)
            let segundoValor = Number(valor2)
            const resultado = Matematica[tipoOperacao](primeiroValor, segundoValor)
            console.log(`A operação ${tipoOperacao} entre ${valor1} e ${valor2} é ${resultado}`)
            rl.close()
        })
    })
})
