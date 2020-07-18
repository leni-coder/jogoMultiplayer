//Início da função renderScreen

export default function renderScreen(screen,game, requestAnimationFrame) {
    const context = screen.getContext("2d")
    context.fillStyle = 'white'
    context.clearRect(0, 0, 10, 10)

    for (const playerId in game.state.players) {
        const player = game.state.players[playerId]
        context.fillStyle = "black"
        context.fillRect(player.x, player.y, 1, 1)
    }
    for (const fruitId in game.state.fruits) {
        const fruit = game.state.fruits[fruitId]
        context.fillStyle = "green"
        context.fillRect(fruit.x, fruit.y, 1, 1)
    }
    requestAnimationFrame(() => {
    renderScreen(screen, game, requestAnimationFrame)
})
}
//Final da função renderScreen

            /* const color = "red"
const positionX = 0
const positionY = 0
const width = 250
const height = 250

context.fillStyle = color
context.fillRect(positionX, positionY, width, height) */
            /* Renderizando a tela (desenhando e apagando na tela) com canvas.
Este código é bem interessante para se aprender e praticar.
Ele vai ser bem útil na criação do jogo de fúbica */