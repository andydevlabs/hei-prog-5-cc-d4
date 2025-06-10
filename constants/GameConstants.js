const ROWS = 10;
const COLS = 10;
const EMPTY = ".";
const SNAKE = "*";
const FOOD = "@";
const TICK_RATE_MS = 500;

const Direction = {
    UP: { x: 0, y: -1 },
    DOWN: { x: 0, y: 1 },
    LEFT: { x: -1, y: 0 },
    RIGHT: { x: 1, y: 0 },
};

module.exports = {
    ROWS,
    COLS,
    EMPTY,
    SNAKE,
    FOOD,
    TICK_RATE_MS,
    Direction,
};
