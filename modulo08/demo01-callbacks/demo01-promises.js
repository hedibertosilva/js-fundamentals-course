const fs = require('fs')

const readAsync = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            err ? reject(err) : resolve(data)
        })
    })
}
const writeAsync = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err, data) => {
            err ? reject(err) : resolve(data)
        })
    })
}

let data_arq1 = ""
let data_arq2 = ""
let data_arq3 = ""

Promise.resolve()
    .then(() => {
        return readAsync(`./arq1.txt`)
    })
    .then((content) => {
        data_arq1 = content
    })
    .then(() => {
        return readAsync(`./arq2.txt`)
    })
    .then((content) => {
        data_arq2 = content
    })
    .then(() => {
        return readAsync(`./arq3.txt`)
    })
    .then((content) => {
        data_arq3 = content
    })
    .catch((err) => {
        console.log(`Deu ruim ao ler o arquivo:`, err.stack)
    })
    .then(() => {
        return writeAsync('./final.txt', `${data_arq1}\n${data_arq2}\n${data_arq3}`)
    })
    .then(() => {
        console.log('Arquivo salvo com sucesso!')
    })
    .catch((err) => {
        console.log(`Deu ruim ao escrever o arquivo final.`, err.stack)
    })
