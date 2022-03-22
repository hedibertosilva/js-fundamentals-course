class MemoryGame {
    constructor({ screen }) {
        this.screen = screen
        this.initHeroes = [
            { img: './contents/batman.png', name: 'batman' },
            { img: './contents/hellboy.png', name: 'hellboy' },
            { img: './contents/flash.png', name: 'flash' },
            { img: './contents/ciclope.png', name: 'ciclope' },
        ]
    }
    shuffle() {
        const copies = this.initHeroes
                        .concat(this.initHeroes)
                        .map(item => {
                            return Object.assign({}, item, {id: Math.random()/0.5})
                        })
                        .sort(() => Math.random() - 0.5)
        this.screen.render(copies)
    }
    play() {
        this.shuffle()
    }
    render() {
        this.screen.render(this.initHeroes)
        this.screen.setPlay(this.play.bind(this))
    }
}
