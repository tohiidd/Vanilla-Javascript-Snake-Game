import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./inputAndGrid.js";
let food = getRandomFoodPosition();
let EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}
export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;

  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }

  return newFoodPosition;
}

export function resetFoodPosition() {
  food = getRandomFoodPosition();
}
