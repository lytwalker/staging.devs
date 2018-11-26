var canvas;
var canvasContext;
var redShapeX = 50;
var redSpeedX = 15;

window.onload = function(){
    console.log("window loaded.");
    canvas = document.getElementById('mainCanvas');
    canvasContext = canvas.getContext('2d');

    var fPS = 30;
    drawEverything();
    setInterval(function(){
        moveEverything();
        drawEverything();
    }, 1000/fPS);
}

function moveEverything(){
    redShapeX += redSpeedX;
    if(redShapeX > canvas.width || redShapeX < 0){
        redSpeedX = -redSpeedX;
    }
}

function drawEverything(){
    // background
    colorRectangle('black',0,0,canvas.width, canvas.height);
    // paddle
    colorRectangle('green',0,(canvas.height / 2) - 100,10,200);
    // ball
    colorCircle('white',redShapeX,(canvas.height / 2),25);
}

function colorRectangle(_drawColor,_leftX,_topY,_width,_height) {
    canvasContext.fillStyle = _drawColor;
    canvasContext.fillRect(_leftX,_topY,_width, _height);
}

function colorCircle(_drawColor,_centerX,_centerY,_radius){
    canvasContext.fillStyle = _drawColor;
    canvasContext.beginPath();
    canvasContext.arc(_centerX,_centerY,_radius,0,Math.PI*2,true);
    canvasContext.fill();
}