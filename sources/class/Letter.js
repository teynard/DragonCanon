function Letter(x, y, category, letter, delay, space, id)
{
	this.x        = x;
	this.y        = y; 
	this.category = category;
	this.space    = space;
	this.letter   = letter;
	this.compteur = 0;
	this.delay    = delay;
	this.line     = 0;
	this.row      = 0;
	this.id       = id;

	Canon.shooting = true;

	this.build = function()
	{
		this.compteur++;

		if (this.compteur >= this.delay)
		{
			if (constantes[this.category][this.letter][this.line][this.row] == 1)
			{
				var target = {
					"x" : this.x + this.row*this.space,
					"y" : this.y + this.line*this.space
				}
				Canon.shoot(target);
				this.compteur = 0;
			}

			this.row++;
			if (this.row >= constantes[this.category][this.letter][this.line].length)
			{
				this.row = 0;
				this.line++;
			}

			if (this.line >= constantes[this.category][this.letter].length)
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