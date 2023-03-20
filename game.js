// create a game loop
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  console.log("Render");
  lastRenderTime = currentTime;
  // sets last render time to current render time, keep tracks of how long everything takes to render

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
}

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
}

//This pay holds the functions updating the snake's position, drawing the snake's position, and rendering the game board 