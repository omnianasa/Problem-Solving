const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("scoreVal");
const overlay = document.getElementById("overlay");
const statusTitle = document.getElementById("statusTitle");
const actionBtn = document.getElementById("actionBtn");

const box = 20;
let score, snake, d, gameLoop;

function init() {
    score = 0;
    scoreElement.innerHTML = score;
    d = "RIGHT";
    snake = [
        { x: 10 * box, y: 10 * box },
        { x: 9 * box, y: 10 * box },
        { x: 8 * box, y: 10 * box }
    ];
    food = {
        x: Math.floor(Math.random() * 19 + 1) * box,
        y: Math.floor(Math.random() * 19 + 1) * box
    };
}

function startGame() {
    init();
    overlay.classList.add("hidden");
    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(draw, 120);
}

function gameOver() {
    clearInterval(gameLoop);
    statusTitle.innerHTML = "Game Over!";
    actionBtn.innerHTML = "Play Again";
    overlay.classList.remove("hidden");
}

document.addEventListener("keydown", e => {
    if (e.keyCode == 37 && d != "RIGHT") d = "LEFT";
    else if (e.keyCode == 38 && d != "DOWN") d = "UP";
    else if (e.keyCode == 39 && d != "LEFT") d = "RIGHT";
    else if (e.keyCode == 40 && d != "UP") d = "DOWN";
});

function draw() {
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //food
    ctx.fillStyle = "#cb0000";
    ctx.beginPath();
    ctx.roundRect(food.x + 2, food.y + 2, box - 4, box - 4, 6);
    ctx.fill();

    //snake
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? "#240596" : "#2c10b9";
        ctx.beginPath();
        ctx.roundRect(snake[i].x + 1, snake[i].y + 1, box - 2, box - 2, 4);
        ctx.fill();
    }

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (d == "LEFT") snakeX -= box;
    if (d == "UP") snakeY -= box;
    if (d == "RIGHT") snakeX += box;
    if (d == "DOWN") snakeY += box;

    if (snakeX == food.x && snakeY == food.y) {
        score++;
        scoreElement.innerHTML = score;
        food = {
            x: Math.floor(Math.random() * 19 + 1) * box,
            y: Math.floor(Math.random() * 19 + 1) * box
        };
    } else {
        snake.pop();
    }

    let newHead = { x: snakeX, y: snakeY };

    //collision logic
    if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height ||
        snake.some((seg, index) => index !== 0 && seg.x === newHead.x && seg.y === newHead.y)) {
        gameOver();
        return;
    }

    snake.unshift(newHead);
}

actionBtn.addEventListener("click", startGame);

//initial screen
ctx.fillStyle = "#f8fafc";
ctx.fillRect(0, 0, canvas.width, canvas.height);