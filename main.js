let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", () => {
    createBoard(16);

    const message = document.querySelector("#message");
    message.style.color = "white";
    message.textContent = "Tap screen to draw || Tap again to stop drawing";

    const sizeButton = document.querySelector("#popup");
    sizeButton.addEventListener("click", () => {
        const size = chooseSize();
        createBoard(size);
    });

    document.querySelector("body").addEventListener("click", (e) => {
        if (e.target.tagName != "BUTTON") {
            click = !click;
            if (click) {
                message.textContent = "You can draw";
            } else {
                message.textContent = "Tap screen to draw";
            }
        }
    });

    const blackButton = document.querySelector("#blackButton");
    blackButton.addEventListener("click", () => getColor("black"));

    const randomButton = document.querySelector("#randomButton");
    randomButton.addEventListener("click", () => getColor("random"));

    const resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", () => resetBoard());
});

function createBoard(size) {
    const board = document.querySelector(".board");
    board.innerHTML = "";
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let index = 0; index < (size * size); index++) {
        const div = document.createElement("div");
        div.style.backgroundColor = "white";
        div.style.border = "1px groove black";
        div.addEventListener("mouseover", colorDiv);
        board.append(div);
    }
}

function chooseSize() {
    const pop = parseInt(prompt("Choose board size: "));
    if (pop === null) return;
    const size = parseInt(pop);
    const message = document.querySelector("#message");
    message.style.color = "white";
    if (isNaN(size)) {
        message.textContent = "Please enter a valid number!";
    } else if (size <= 0 || size > 100) {
        message.textContent = "Please choose a number between 1 and 100";
    } else {
        message.textContent = "Tap screen to draw";
        return size;
    }
}

function colorDiv() {
    if (click === true) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = "black";
        }
    }
}

function getColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    const board = document.querySelector(".board");
    const divs = board.querySelectorAll("div");

    divs.forEach(div => {
        div.style.backgroundColor = "white";
    });
}