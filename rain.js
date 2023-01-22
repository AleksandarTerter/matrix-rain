let canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

let ctx = canvas.getContext("2d");
let y = 50;
const chars = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";

function drow() {
    y += 50;
    blackTush();
    writeASymbol();
}

function blackTush() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function writeASymbol() {
    ctx.fillStyle = "#0F0";
    ctx.font = "50px serif";
    ctx.fillText(randomMatrixSymbol(), 30, y);
}

setInterval(drow, 100);

function randomMatrixSymbol() {
    const randomCharIndex = getRandomInt(chars.length);
    return chars[randomCharIndex];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
