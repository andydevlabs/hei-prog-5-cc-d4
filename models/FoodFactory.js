const { COLS, ROWS } = require("../constants/GameConstants");
const Point = require("./Point");

class FoodFactory {
    generateFood(snake) {
        let food;
        do {
            const x = Math.floor(Math.random() * COLS);
            const y = Math.floor(Math.random() * ROWS);
            food = new Point(x, y);
        } while (snake.body.some((segment) => segment.equals(food)));
        return food;
    }
}

module.exports = FoodFactory;
