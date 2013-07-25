function Ball(target,color)
{
	this.x      = Canon.x;
	this.y      = Canon.y;
	this.radius = Canon.tubeHeight/2;
	this.color  = color;
	this.speed  = 20;

	this.draw = function()
	{
		context.fillStyle = this.color;
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
		context.fill();
	}

	this.move = function()
	{
		this.x += (target.x - this.x) / this.speed;
		this.y += (target.y - this.y) / this.speed;
	}

	this.update = function()
	{
		this.move();
		this.draw();
	}
}

function updateBalls()
{
	for (i in balls)
	{
		if (balls[i] != null)
			balls[i].update();
	}
}