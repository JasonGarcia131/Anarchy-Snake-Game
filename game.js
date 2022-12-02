import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood, scoreCount } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let scoreCounter = 0;
let gameOver = false
const gameBoard = document.getElementById('game-board');

let player = prompt("Enter name: ");

function main(currentTime) {
  if (gameOver) {
    scoreCounter = scoreCount();
    if (confirm(`"You're drunk, go home ${player}." -Alan
        Beers: ${scoreCounter}
        Player ID: ${Date.now()}`)) {
      window.location.href = "/Home.html"
    }
    return
  }


  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}