window.onload = () => {
    const btn = document.getElementById("btnCalcular")
    btn.onclick = clickou

    function obterValorInput(id) {
        const item = document.getElementById(id)
        return item.value
    }

    function clickou() {
        const tipoOperacao = obterValorInput("tipoOperacao")
        const valor1 = Number(obterValorInput("valor1"))
        const valor2 = Number(obterValorInput("valor2"))

        const resultado = Matematica[tipoOperacao](valor1, valor2)
        document.getElementById("resultado")
            .innerHTML =
                `
                    O resultado da operação ${tipoOperacao} entre
                    ${valor1} e ${valor2} é ${resultado}.
                `

    }
}