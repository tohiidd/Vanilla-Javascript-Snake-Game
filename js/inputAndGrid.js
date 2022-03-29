export let inputDirection = { x: 0, y: 0 };
export let lastInput = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInput.y !== 0) break;
      inputDirection = { x: 0, y: -1 };

      break;
    case "ArrowDown":
      if (lastInput.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInput.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInput.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getDirection() {
  lastInput = inputDirection;
  return inputDirection;
}
export function resetInput() {
  inputDirection = { x: 0, y: 0 };
  lastInput = { x: 0, y: 0 };
}
const GRID_SIZE = 21;
export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
}

export function outsideGrid(snakeHead) {
  return (
    snakeHead.x < 0 ||
    snakeHead.x > GRID_SIZE ||
    snakeHead.y < 0 ||
    snakeHead.y > GRID_SIZE
  );
}
