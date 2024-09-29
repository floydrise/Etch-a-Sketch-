document.addEventListener("DOMContentLoaded", () => {
    createBoard(32);
});

function createBoard(size) {
    const board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let index = 0; index < (size * size); index++) {
        const div = document.createElement("div");
        div.style.border = "1px dashed black";
        board.append(div);
    }
}