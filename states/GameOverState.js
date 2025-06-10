const GameState = require("./GameState");
const MenuState = require("./MenuState");

class GameOverState extends GameState {
    constructor(finalScore) {
        super();
        this.finalScore = finalScore;
    }

    render(game) {
        console.clear();
        console.log("===== GAME OVER =====");
        console.log(`Final Score: ${this.finalScore}`);
        console.log("Press 'R' to restart");
    }

    handleInput(game, input) {
        console.log("Input received in GameOverState:", input);

        if (input.toString().toUpperCase() === "R") {
            console.log("Restarting game...");
            game.restart();
            game.changeState(new MenuState());
        }
    }
}

module.exports = GameOverState;
