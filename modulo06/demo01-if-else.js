let frutaExistenteNoMercado = false
let temCPUSuficiente = true

// obter valores do terminal
const args = process.argv
const saldo = args[args.length - 1]

// console.log('args', args)
console.log('saldo', saldo)

if (isNaN(saldo)) {
    console.log('valor não é válido!')
    return
}

let tipoClient = "premium"

if (saldo < 9) {
    tipoClient = "basic"
} 
else if (saldo >= 10 && saldo <20) {
    tipoClient = "gold"
}
else {
    tipoClient = null
}

console.log(tipoClient)

// ternário

const idade = 18
const resultado = (idade >= 18 && false) ?
                    "pode dirigir" :
                    (idade && true) ? 
                        "imaturo" : 
                        "ok"

console.log(resultado)
