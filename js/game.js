import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
  resetSnakeBody,
} from "./snake.js";
import {
  update as updateFood,
  draw as drawFood,
  resetFoodPosition,
} from "./food.js";
import { resetInput, outsideGrid } from "./inputAndGrid.js";

const gameBoard = document.getElementById("gameBoard");
const gameOverElement = document.getElementById("gameOver");
const startButton = document.getElementById("startButton");
const gameStart = document.getElementById("gameStart");
const resetButton = document.getElementById("resetButton");

let lastRender = 0;
let gameOver = false;

function main(currentTime) {
  if (gameOver) {
    gameOverElement.style.display = "flex";
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRender) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRender = currentTime;
  update();
  draw();
}
function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

startButton.addEventListener("click", () => {
  window.requestAnimationFrame(main);
  gameStart.style.display = "none";
});

resetButton.addEventListener("click", () => {
  gameOverElement.style.display = "none";
  gameOver = false;
  lastRender = 0;
  resetSnakeBody();
  resetInput();
  resetFoodPosition();
  window.requestAnimationFrame(main);
});
