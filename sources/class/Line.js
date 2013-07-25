function Line(x, y, length, space, dirX, dirY, delay, id)
{
	this.x        = x;
	this.y        = y;
	this.length   = length;
	this.space    = space;
	this.dirX     = dirX;
	this.dirY     = dirY;
	this.delay    = delay;
	this.compteur = delay;
	this.progress = 0;
	this.id       = id;

	Canon.shooting = true;

	this.build = function()
	{
		this.compteur++;

		if (this.compteur >= this.delay)
		{
			var target = {
				"x" : this.x + this.progress*this.dirX*this.space,
				"y" : this.y + this.progress*this.dirY*this.space
			}
			Canon.shoot(target);
			this.progress++;
			this.compteur = 0;
			if (this.progress>=this.length)
			{
				Canon.shooting = false;
				objects[this.id] = null;
			}
		}
	}

	this.update = function()
	{
		this.build();
	}
}