const textoPar = "par"
const textoImpar = "impar"

for (let i = 0; i <= 10; i++) {
    decisao = i % 2 === 0 ? textoPar : textoImpar
}

const opts = [{
    label: 'Opção 1',
    value: 1
}, {
    label: 'Opção 2',
    value: 2
}]

// for padrão

for (let j=0; j < opts.length; j++) {
    const item = opts[j]
    console.log('Opção J: ', item.label)
}

// for com index

for (const x in opts) {
    const item = opts[x]
    console.log('Opção X: ', item.label)
}

// for sem index

for (const item of opts) {
    console.log('Opção Item: ', item.label)
}