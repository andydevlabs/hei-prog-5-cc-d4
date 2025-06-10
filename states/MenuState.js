const GameState = require("./GameState");
const RunningState = require("./RunningState");

class MenuState extends GameState {
    render(game) {
        console.clear();
        console.log("===== SNAKE GAME =====");
        console.log("Press 'S' to start");
    }

    handleInput(game, input) {
        if (input.toUpperCase() === "S") {
            game.changeState(new RunningState());
        }
    }
}

module.exports = MenuState;
