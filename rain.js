var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

var ctx = canvas.getContext("2d");

var y = 0;
function drow() {
    ctx.fillStyle = "#0F0";
    ctx.font = "50px serif";
    y += 50;
    ctx.fillText(randomMatrixSymbol(), 30, y);
}

setInterval(drow, 100);

function randomMatrixSymbol() {
    const chars = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";
    const randomCharIndex = getRandomInt(chars.length);
    return chars[randomCharIndex];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
