class Heroi {
    atacar() {
        console.log(`Atacou!`)
    }
    defender() {
        console.log(`Defendeu!`)
    }
}

const heroi = new Heroi()
heroi.atacar()
heroi.defender()

// Usando constructor

class Heroi2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    atacar() {
        console.log(`O ${this.nome} Atacou!`)
    }
    static horaDoAtaque() {
        console.log(`Ele atacou na hora ${(new Date).toISOString()}`)
    }
}

const heroi2 = new Heroi2(
    'Flash', 20
)
heroi2['atacar']()
Heroi2['horaDoAtaque']()