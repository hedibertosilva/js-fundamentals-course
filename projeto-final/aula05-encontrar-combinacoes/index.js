function onLoad() {
    const dependencies = {
        screen: Screen
    }
    const memoryGame = new MemoryGame(dependencies)
    memoryGame.initializer()
}

window.onload = onLoad
