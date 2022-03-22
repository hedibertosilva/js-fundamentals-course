const pessoa = {
    _nome: 'Hediberto',
    _idade: 28,
    get nome() {
        return this._nome
    },
    set nome(value) {
        _nomeEmMaiusculo = value.toUpperCase()
        this._nome = _nomeEmMaiusculo
    },
    get podeDirigir() {
        return this._idade > 18
    }
}

console.log(pessoa.nome)
console.log(pessoa.podeDirigir)