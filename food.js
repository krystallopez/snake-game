import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition(); // sets the food equal to a random position
const EXPANSION_RATE = 1; //sets the expansion rate, you can change this to whatever number you like

// Updates the food, each time the snake is on the food, then the snake will expand by 1. Once the snake expands, the food will then move to a random position
export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

//appends the food to the gameboard 
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
// Every single time this function executes it is going to get us a new food position and then if that new food position is already on the snake it is going to get another new food position, and another one, and will continuously loop until it finally finds a value that is not already on the snake