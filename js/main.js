var canvas;
var canvasContext;
var redShapeX = 50;

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
    console.log("called moveEverything.");
    redShapeX += 1;
}

function drawEverything(){
    console.log("called drawEverything.");

    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.width, canvas.height);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(0,(canvas.height / 2) - 100,10,200);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(redShapeX,150,10,10);
}