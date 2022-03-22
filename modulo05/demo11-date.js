const hoje = new Date()

// const dia = hoje.getDate()
// let cincoDiasDepois = hoje.setDate(dia - 60)
// console.log(new Date(cincoDiasDepois))

console.log(`
    Dia: ${hoje.getDate()},
    Mês: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()},
    Hora: ${hoje.getHours()},
    Minutes: ${hoje.getMinutes()},
    Seconds: ${hoje.getSeconds()},
    Epoch: ${hoje.getTime()}
`)
