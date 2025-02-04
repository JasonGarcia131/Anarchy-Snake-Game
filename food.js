import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'


let food = getRandomFoodPosition();
let scoreCounter = 0;
const EXPANSION_RATE = 1

export function update() {
  if (onSnake(food)) {
    scoreCounter+=1
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
    popUp()
  }
}

let popUpMessage = document.getElementById('popUpMessage');
export function popUp(){
  switch(scoreCounter){
    case 1:
      popUpMessage.textContent = `"Hey! Stop drinking leftovers!" -Bam`;
      break;
    case 2:
      popUpMessage.textContent = `"ALAN! He's being weird again..." -Amy `;
      break;
    case 5:
      popUpMessage.textContent = `"ALAAAN!. He started a mob!!"`;
      break;
    case 7:
      popUpMessage.textContent = `"It's time to go..."`;
      break;
  }
}

export function draw(gameBoard) {
  let score = document.getElementById('score');
  let scoreId = document.getElementById('scoreId');
  scoreId.textContent = (`Score: ${scoreCounter} beers`);
  score.append(scoreId);
  const foodElement = document.createElement('img')
  foodElement.setAttribute("src","images/beer2.png")
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}

export function scoreCount() {
  return scoreCounter
}
