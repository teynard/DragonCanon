function Word(word, x, y, delay, space, id)
{
	this.x         = x;
	this.y         = y; 
	this.space     = space;
	this.compteur  = 0;
	this.delay     = delay;
	this.line      = 0;
	this.row       = 0;
	this.id        = id;
	this.word      = word;
	this.letterNum = 0;

	Canon.shooting = true;

	this.build = function()
	{
		this.compteur++;

		if (this.compteur >= this.delay)
		{
			var letter = constantes["text"][this.word[this.letterNum]];
			if (letter[this.line][this.row] == 1)
			{
				var target = {
					"x" : this.x + this.row*this.space,
					"y" : this.y + this.line*this.space
				}
				Canon.shoot(target);
				this.compteur = 0;
			}

			this.row++;
			if (this.row >= letter[this.line].length)
			{
				this.row = 0;
				this.line++;
			}

			if (this.line >= letter.length)
			{
				this.letterNum++;
				this.line = 0;
				this.row  = 0;

				var widthLetter = (letter[this.line].length+1)*this.space;

				if (this.x + widthLetter >= canvas.width)
				{
					this.x = x;
					this.y += (letter.length+1)*Canon.tubeHeight;
				}
				else
					this.x += widthLetter;
				
				if (this.letterNum >= this.word.length)
				{
					Canon.shooting = false;
					objects[this.id] = null;
				}
			}			
		}
	}

	this.update = function()
	{
		this.build();
	}
}