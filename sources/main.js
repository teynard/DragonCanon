//Fonctions de synchronisation d'affichage
window.requestAnimFrame = 	(
	function(){
		return  window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
		window.oRequestAnimationFrame      ||
		window.msRequestAnimationFrame     ||
		function(callback, element){
			window.setTimeout(callback, 1000 / 5);
		};
	}
)();

window.onload = init;

function init()
{
	window.canvas  = document.getElementById("canvas");
	window.context = canvas.getContext("2d");

	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight-UIHeight;

	onWindowResize();	

	window.Canon = new Canon(canvas.width/2,canvas.height, 75, 150, 40, 90, "yellow"); 

	objects.push(new Word("FAGGOT", 100, 100, 5, 25, objects.length));
	
	gameloop();
}

function gameloop()
{
	cleanCanvas();
	Canon.update();
	updateBalls();
	updateObjects();

	if (inGame)
		requestAnimFrame(gameloop);
}

function onWindowResize()
{
	$(window).resize(function() {
		canvas.width  = window.innerWidth;
		canvas.height = window.innerHeight-UIHeight;
		Canon.x = canvas.width/2;	
		Canon.y = canvas.height;	
	});
}

function cleanCanvas()
{
	context.fillStyle = "black"; 
	context.fillRect(0,0,canvas.width,canvas.height);	
}

function updateObjects()
{
	for (i in objects)
	{
		if (objects[i] != null)
			objects[i].update();
	}
}

function write()
{
	objects = [];
	balls   = [];
	var inputWord = $("#word")[0].value.toUpperCase();
	if (inputWord.length > 0)
		objects.push(new Word(inputWord, 100, 100, 5, 25, objects.length));
}