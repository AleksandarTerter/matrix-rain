let canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

let ctx = canvas.getContext("2d");
const chars = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";
const cellSizeInPx = 30;
const columnsCount = canvas.width / cellSizeInPx;
const rowsCount = canvas.height / cellSizeInPx;

const cols = [];
for (let col = 0; col < columnsCount; col += 1) {
    let randomRow = getRandomInt(rowsCount);
    cols.push(randomRow);
}

function drow() {
    blackTush();
    for (let colIndex = 0; colIndex < cols.length; colIndex += 1) {
        if (cols[colIndex] > rowsCount) {
            cols[colIndex] = 0;
        }
        cols[colIndex] += 1;
        writeASymbol(colIndex * cellSizeInPx, cols[colIndex] * cellSizeInPx);
    }
}

function blackTush() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function writeASymbol(x,y) {
    ctx.fillStyle = "#0F0";
    ctx.font = `${cellSizeInPx * 1.2}px serif`;
    ctx.fillText(randomMatrixSymbol(), x, y);
}

setInterval(drow, 200);

function randomMatrixSymbol() {
    const randomCharIndex = getRandomInt(chars.length);
    return chars[randomCharIndex];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
