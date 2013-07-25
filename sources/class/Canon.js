function Canon(x, y, radius, tubeWidth, tubeHeight, angle, color)
{
	this.x          = x;
	this.y          = y;
	this.radius     = radius;
	this.tubeWidth  = tubeWidth;
	this.tubeHeight = tubeHeight;
	this.angle      = Math.atan2(0, 0 - this.y) + Math.PI / 2;
	this.color      = color;
	this.shooting   = false;

	this.shoot = function(target)
	{
		if ((target.x > this.x+this.tubeWidth) ||
			(target.x < this.x+this.tubeWidth && target.y < this.y-this.tubeWidth) ||
			(target.x < this.x-this.tubeWidth))
		{
			this.angle = Math.atan2(target.x - this.x, target.y - this.y) + Math.PI / 2;
			balls.push(new Ball(target, "red"));
		}
	}

	this.draw = function()
	{
		context.fillStyle = this.color;

		//draw the base
		context.beginPath();
		context.arc(this.x, this.y, this.radius, Math.PI, Math.PI*2);
		context.fill();

		//draw the canon
		context.save();
		context.translate(this.x, this.y);
		context.rotate(-this.angle+Math.PI);
		context.fillRect(0, -this.tubeHeight/2, this.tubeWidth, this.tubeHeight);
		context.restore();
	}

	this.update = function()
	{
		this.draw();
	}
}