const readLine = require('readline')


const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questionAsync = (text) => {
    return new Promise((resolve, reject) => {
        rl.question(`${text}\n`, (awnser) => {
            !!awnser ? resolve(awnser) : reject(new Error(`the field can not be empty.`))
        })
    })
}

const main = async () => {
    try {
        const name = await questionAsync(`Qual o seu nome?`)
        const fone = await questionAsync(`Qual o seu telefone?`)
        console.log(`Nome: ${name}, Telefone: ${fone}.`)
    } catch (error) {
        console.log(`Deu ruim:`, error.message)
    } finally {
        rl.close()
    }
}

main()
