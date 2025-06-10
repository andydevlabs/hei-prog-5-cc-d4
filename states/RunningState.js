const GameState = require("./GameState");
const GameOverState = require("./GameOverState");
const {
    Direction,
    ROWS,
    COLS,
    EMPTY,
    SNAKE,
    FOOD,
} = require("../constants/GameConstants");

class RunningState extends GameState {
    update(game) {
        const newHead = game.snake.move();

        if (game.snake.collidesWithWall() || game.snake.collidesWithSelf()) {
            game.changeState(new GameOverState(game.score));
            return;
        }

        if (newHead.equals(game.food)) {
            game.snake.grow();
            game.food = game.foodFactory.generateFood(game.snake);
            game.score += 1;
        }
    }

    handleInput(game, input) {
        switch (input.toUpperCase()) {
            case "Z":
                if (game.snake.direction !== Direction.DOWN) {
                    game.snake.direction = Direction.UP;
                }
                break;
            case "S":
                if (game.snake.direction !== Direction.UP) {
                    game.snake.direction = Direction.DOWN;
                }
                break;
            case "Q":
                if (game.snake.direction !== Direction.RIGHT) {
                    game.snake.direction = Direction.LEFT;
                }
                break;
            case "D":
                if (game.snake.direction !== Direction.LEFT) {
                    game.snake.direction = Direction.RIGHT;
                }
                break;
        }
    }

    render(game) {
        console.clear();

        const grid = Array(ROWS)
            .fill()
            .map(() => Array(COLS).fill(EMPTY));

        game.snake.body.forEach((part, index) => {
            if (part.x >= 0 && part.x < COLS && part.y >= 0 && part.y < ROWS) {
                grid[part.y][part.x] = SNAKE;
            }
        });

        grid[game.food.y][game.food.x] = FOOD;

        console.log("Score:", game.score);
        grid.forEach((row) => {
            console.log(row.join(" "));
        });
    }
}

module.exports = RunningState;
