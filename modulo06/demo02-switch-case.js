const readLine = require('readline')

const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const textoMenu = `
Olá, seja bem vindo a sistema de media.
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o menu de Guerreiros
Digite 0 para acessar sair
`

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    },
}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)

function menuInicial(msg) {
    const resposta = Number(msg.toString())
    if (isNaN(resposta)) {
        throw new Error("Entrada Inválida!", resposta)
    }
    switch(resposta) {
        case 1:
            console.log(`[Menu Inicial]`)
            break
        case 2:
            console.log(`[Menu de Heróis]`)
            break
        case 3:
            console.log(`[Menu de Guerreiros]`)
            break
        case 0:
            console.log(`Saindo...`)
            process.exit()
            break
        default:
            console.log(`Opção Inválida!`)
            break
    }
}