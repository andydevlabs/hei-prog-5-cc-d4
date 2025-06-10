const { ROWS, COLS } = require("../constants/GameConstants");
const MoveStrategy = require("./MoveStrategy");

class Snake {
    constructor(body, direction, moveStrategy) {
        this.body = body;
        this.direction = direction;
        this.moveStrategy = moveStrategy || new MoveStrategy();
        this.growing = false;
    }

    move() {
        const newHead = this.moveStrategy.computeNextPosition(
            this,
            this.direction
        );
        this.body.unshift(newHead);
        if (!this.growing) {
            this.body.pop();
        } else {
            this.growing = false;
        }
        return newHead;
    }

    grow() {
        this.growing = true;
    }

    collidesWithSelf() {
        const head = this.body[0];
        return this.body.slice(1).some((segment) => segment.equals(head));
    }

    collidesWithWall() {
        const head = this.body[0];
        return head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS;
    }
}

module.exports = Snake;
