const readLine = require('readline')

const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questionAsync = (text) => {
    return new Promise((resolve, _) => {
        terminal.question(`${text}\n`, resolve)
    })
}

let name = ""
let fone = ""

Promise.resolve()
    .then(() => questionAsync(`Qual é o seu nome?`))
    .then((awnserName) => {
        if (!awnserName) throw new Error(`Empty String.`)
        name = awnserName
    })
    .then(() => questionAsync(`Qual é o seu telefone?`))
    .then((awnserFone) => {
        if (!awnserFone) throw new Error(`Empty String.`)
        fone = awnserFone
    })
    .then(() => {
        console.log(`Nome: ${name}, Telefone: ${fone}.`)
    })
    .catch((err) => {
        console.log('Erro ao ler as entradas:', err.stack)
    })
    .finally(() => terminal.close())
