var canvas;
var canvasContext;
var circleX = 50;
var circleY = 50;
const CIRCLE_RADIUS = 25;
var circleSpeedX = 15;
var circleSpeedY = 4;

var leftBarX = 50;
var leftBarY = 50;
const LEFT_BAR_WIDTH = 10;
const LEFT_BAR_HEIGHT = 200;

var rightBarX = 50;
var rightBarY = 50;
const RIGHT_BAR_WIDTH = 10;
const RIGHT_BAR_HEIGHT = 200;

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

function circleRespawn(){
  // to center of screen
  circleX = canvas.width/2;
  circleY = canvas.height/2;
  circleSpeedX = -circleSpeedX;
}

function moveEverything(){

    circleX += circleSpeedX;
    // change direction when carvas x-bourdary, and the left & right bars are hit
    // -- left bar
    if(circleX < 0){
      if (circleY > leftBarY && circleY < leftBarY + LEFT_BAR_HEIGHT) {
        circleSpeedX = -circleSpeedX;
      } else {
        circleRespawn();
      }
    }
    // -- right bar
    if(circleX > canvas.width){
      if (circleY > rightBarY && circleY < rightBarY + RIGHT_BAR_HEIGHT) {
        circleSpeedX = -circleSpeedX;
      } else {
        circleRespawn();
      }
    }

    // change direction when carvas y-bourdary is hit
    circleY += circleSpeedY;
    if(circleY > canvas.height || circleY < 0)
        circleSpeedY = -circleSpeedY;
}

function drawEverything(){
    // background
    colorRectangle('black',0,0,canvas.width, canvas.height);
    // ball
    colorCircle('white',circleX,circleY,CIRCLE_RADIUS);
    // left bar
    colorRectangle('green',0,leftBarY,LEFT_BAR_WIDTH,LEFT_BAR_HEIGHT);
    // right bar
    colorRectangle('green',canvas.width - RIGHT_BAR_WIDTH,rightBarY,RIGHT_BAR_WIDTH,RIGHT_BAR_HEIGHT);
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
