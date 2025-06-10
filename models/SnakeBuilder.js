const { Direction } = require("../constants/GameConstants");
const Point = require("./Point");
const Snake = require("./Snake");
const MoveStrategy = require("./MoveStrategy");

class SnakeBuilder {
    constructor() {
        this.body = [new Point(5, 5)];
        this.direction = Direction.RIGHT;
        this.moveStrategy = new MoveStrategy();
    }

    withBody(body) {
        this.body = body;
        return this;
    }

    withDirection(direction) {
        this.direction = direction;
        return this;
    }

    withMoveStrategy(moveStrategy) {
        this.moveStrategy = moveStrategy;
        return this;
    }

    build() {
        return new Snake(this.body, this.direction, this.moveStrategy);
    }
}

module.exports = SnakeBuilder;
