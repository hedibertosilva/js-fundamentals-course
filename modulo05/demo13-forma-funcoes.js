function minhaFuncao1() {
    return `aeee`
}

const minhaFuncao2 = function(param1) {
    return `aeeee ${param1}`
}

const minhaFuncao3 = (param1) => {
    return `aeeee ${param1}`
}

const minhaFuncao4 = (param1) => `aeeee ${param1}`

const obj = {
    minhaFuncao: (param1) => {
        return `aeeee ${param1}`
    },
    minhaFuncao2: function(param1) {
        return `aeeee ${param1}`
    }
}
console.log(obj.minhaFuncao('Hediberto'))

const obj2 = {
    minhaFuncao(param1) {
        return `aeeee ${param1}`
    }
}
console.log(obj2.minhaFuncao('Silva'))
