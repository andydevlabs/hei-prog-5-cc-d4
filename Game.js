const Point = require("./models/Point");
const SnakeBuilder = require("./models/SnakeBuilder");
const FoodFactory = require("./models/FoodFactory");
const MenuState = require("./states/MenuState");
const { Direction } = require("./constants/GameConstants");

class Game {
    constructor() {
        this.restart();
        this.currentState = new MenuState();
    }

    restart() {
        const snakeBuilder = new SnakeBuilder();
        this.snake = snakeBuilder
            .withBody([new Point(5, 5), new Point(4, 5), new Point(3, 5)])
            .withDirection(Direction.RIGHT)
            .build();

        this.foodFactory = new FoodFactory();
        this.food = this.foodFactory.generateFood(this.snake);
        this.score = 0;
    }

    changeState(newState) {
        this.currentState = newState;
    }

    update() {
        this.currentState.update(this);
    }

    handleInput(input) {
        this.currentState.handleInput(this, input);
    }

    render() {
        this.currentState.render(this);
    }
}

module.exports = Game;
