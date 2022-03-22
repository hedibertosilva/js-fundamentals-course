const fs = require('fs')

fs.readFile('./arq1.txt', (err1, data1) => {
    if (err1) {
        console.log('Deu ruim ao ler o arquivo 1:', err1.stack)
        return
    }
    fs.readFile('./arq2.txt', (err2, data2) => {
        if (err2) {
            console.log('Deu ruim ao ler o arquivo 2:', err2.stack)
            return
        }
        fs.readFile('./arq3.txt', (err3, data3) => {
            if (err3) {
                console.log('Deu ruim ao ler o arquivo 3:', err3.stack)
                return
            }
            fs.writeFile('./final.txt', `${data1}\n${data2}\n${data3}`, (errFinal, _) => {
                if (errFinal) {
                    console.log('Erro ao escrever o arquivo final:', errFinal.stack)
                    return
                }
                console.log(`Arquivo salvo com sucesso!`)
            })
        })
    })
})