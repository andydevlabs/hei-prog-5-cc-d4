const readline = require("readline");
const Game = require("./Game");
const { TICK_RATE_MS } = require("./constants/GameConstants");


const GameOverState = require("./states/GameOverState");
const MenuState = require("./states/MenuState");

const game = new Game();
game.render();


readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") {
        process.exit();
    }

    console.log("Key pressed:", str || key.name);
    game.handleInput(str || key.name);
});

console.log("\nUse Z, Q, S, D keys to control the snake");
console.log("Press Ctrl+C to exit");

const gameLoop = setInterval(() => {
    game.update();
    game.render();
}, TICK_RATE_MS);
