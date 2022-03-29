import { getDirection } from "./inputAndGrid.js";

const rangeElement = document.getElementById("range");
const rangeLabel = document.getElementById("rangeLabel");

export let SNAKE_SPEED = rangeElement.value;
export let snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export function update() {
  addSegments();
  let inputDirection = getDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}
export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index == 0) return false;
    return equalPosition(segment, position);
  });
}

function equalPosition(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

export function expandSnake(amount) {
  newSegments += amount;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
}

export function getSnakeHead() {
  return snakeBody[0];
}
export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}
rangeElement.addEventListener("change", (e) => {
  rangeLabel.innerHTML = e.target.value;
  SNAKE_SPEED = e.target.value;
});

export function resetSnakeBody() {
  snakeBody = [{ x: 11, y: 11 }];
}
