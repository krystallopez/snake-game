const GRID_SIZE = 21;

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
}

export function outsideGrid(position) {
  return position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE;
}

//The random grid function provides us with a random grid location each time the snake reaches the food

//The outsideGrid function 