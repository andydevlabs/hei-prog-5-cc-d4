const Point = require("./Point");

class MoveStrategy {
    computeNextPosition(snake, direction) {
        const head = snake.body[0];
        return new Point(head.x + direction.x, head.y + direction.y);
    }
}

module.exports = MoveStrategy;
