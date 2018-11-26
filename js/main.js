var canvas;
var canvasContext;
var circleX = 50;
var circleY = 50;
const CIRCLE_RADIUS = 25;
var circleSpeedX = 15;
var circleSpeedY = 4;

var leftBarX = 50;
var leftBarY = 50;
const LEFT_BAR_HEIGHT = 200;

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

    canvas.addEventListener('mousemove', function(event){
        var mousePosition = calculateMousePosition(event);
        leftBarY = mousePosition.y - (LEFT_BAR_HEIGHT / 2);
    })
}

function calculateMousePosition(event) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	var mouseX = event.clientX - rect.left - root.scrollLeft;
	var mouseY = event.clientY - rect.top - root.scrollTop;
	return {
		x:mouseX,
		y:mouseY
	};
}

function moveEverything(){

    circleX += circleSpeedX;
    // change direction when carvas x-bourdary is hit
    if(circleX > canvas.width || circleX < 0)
        circleSpeedX = -circleSpeedX;
        
    // change direction when carvas y-bourdary is hit
    circleY += circleSpeedY;
    if(circleY > canvas.height || circleY < 0)
        circleSpeedY = -circleSpeedY;
}

function drawEverything(){
    // background
    colorRectangle('black',0,0,canvas.width, canvas.height);
    // paddle
    colorRectangle('green',0,leftBarY,10,LEFT_BAR_HEIGHT);
    // ball
    colorCircle('white',circleX,circleY,CIRCLE_RADIUS);
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