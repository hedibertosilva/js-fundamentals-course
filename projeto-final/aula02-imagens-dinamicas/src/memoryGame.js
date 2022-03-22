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
    render() {
        this.screen.render(this.initHeroes)
    }
}
