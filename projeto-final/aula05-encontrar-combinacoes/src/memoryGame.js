class MemoryGame {
    constructor({ screen }) {
        this.screen = screen
        this.initHeroes = [
            { img: './contents/batman.png', name: 'batman' },
            { img: './contents/hellboy.png', name: 'hellboy' },
            { img: './contents/flash.png', name: 'flash' },
            { img: './contents/ciclope.png', name: 'ciclope' },
        ]
        this.defaultIcon = "./contents/default.png"
        this.hiddenHeroes = []
        this.selectedHeroes = []
    }
    play() {
        this.shuffle()
    }
    shuffle() {
        const copies = this.initHeroes
                        .concat(this.initHeroes)
                        .map(item => {
                            return Object.assign({}, item, {id: Math.random()/0.1})
                        })
                        .sort(() => Math.random() - 0.5)
        this.screen.render(copies)
        setTimeout(() => this.hideHeroes(copies), 1000)
    }
    hideHeroes(heroes) {
        const hiddenHeroes = heroes
                                .map(({name, id}) => ({
                                        id,
                                        name,
                                        img: this.defaultIcon
                                    }))
        this.screen.render(hiddenHeroes)
        this.hiddenHeroes = hiddenHeroes
    }
    validateSelection(id, name) {
        const item = {id, name}
        const selectedHeroes = this.selectedHeroes.length

        switch(selectedHeroes) {
            case 0:
                this.selectedHeroes.push(item)
                break
            case 1:
                const [ firstSelection ] = this.selectedHeroes
                this.selectedHeroes = []
                if (firstSelection.name === item.name &&
                    firstSelection.id !== item.id
                    ) {
                        alert(`Perfect! Congratulations! You got the hero ${item.name}.`)
                        return
                    }
                alert(`You wrong! Try again!`)
                break
        }

    }
    initializer() {
        this.screen.render(this.initHeroes)
        this.screen.setPlay(this.play.bind(this))
        this.screen.setValidateSelection(this.validateSelection.bind(this))
    }
}
