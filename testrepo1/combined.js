eqc = {};

// example invocation var circle1 = new eqc.circle("ctx");
// circle1.draw();
eqc.circle = function(canvas){
	circle: function(){
	return this;
	},
	radius: 70,
	startAngle:0,
	endAngle:360,
	clockwise: true,
	posX: 0,
	posY: 0,
	vector: null,
	color: "" || "green",
	lineColor:"" || "#003300",
	lineWidth:"" || 5,
	canvas: "",
	draw: function (param){
		this.canvas = param;
		this.canvas.beginPath();
		this.canvas.arc(this.posX, this.posY, this.radius, this.startAngle, 2 * Math.PI, this.clockwise);
		this.canvas.fillStyle = this.color;
		this.canvas.fill();
		this.canvas.lineWidth = this.lineWidth;
		this.canvas.strokeStyle = this.lineColor;
		this.canvas.stroke();
	}
};

$(document).ready(function(){

//get context
var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext('2d');

//set width and height
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

//clear the canvas ready for the next draw
function clearStuff(){
	ctx.fillStyle = 'white';
	ctx.fillRect(0,0,canvas.width,canvas.height);
}

//set the position/vector parameters for the two shapes
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var circleVector = true;

//draw the circle
function paintCircle() {
	
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	ctx.fillStyle = 'green';
	ctx.fill();
	ctx.lineWidth = 5;
	ctx.strokeStyle = '#003300';
	ctx.stroke();
}

//move circle
function moveCircle(bool){
	if(bool) centerX = centerX+2;
	else centerX = centerX-2;
	if((centerX) > canvas.width) circleVector = false;
	if((centerX) < 0) circleVector = true;
}

//draw hole
function paintHole() {
	var radius = 70;
	var startAngle = 0;
	var endAngle = 360;
	var clockwise = true;
	//set centerX 100px to the right
	var centerHX = centerX+100;
	
	ctx.beginPath();
	ctx.arc(centerHX, centerY, radius, 0, 2 * Math.PI, false);
	ctx.fillStyle = 'green';
	ctx.fill();
	ctx.lineWidth = 5;
	ctx.strokeStyle = '#003300';
	ctx.stroke();
}

});
