const fs = require('fs')

const readAsync = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            err ? reject(new Error(`Read Error.`)) : resolve(data)
        })
    })
}
const writeAsync = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err, data) => {
            err ? reject(new Error(`Write Error.`)) : resolve(data)
        })
    })
}

const main = async () => {
    try {
        const data_arq1 = await readAsync(`./arq1.txt`)
        const data_arq2 = await readAsync(`./arq2.txt`)
        const data_arq3 = await readAsync(`./arq3.txt`)
        const pathFinal = './final.txt'
        const contentFinal = `${data_arq1}\n${data_arq2}\n${data_arq3}`
        writeAsync(pathFinal, contentFinal)
        console.log(`Arquivo salvo com sucesso!`)
    } catch (error) {
        console.log(`Deu ruim: ${error.message}`)
    }
}

main()
