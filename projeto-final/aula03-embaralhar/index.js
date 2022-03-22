function onLoad() {
    const dependencies = {
        screen: Screen
    }
    const memoryGame = new MemoryGame(dependencies)
    memoryGame.render()
}

window.onload = onLoad
