canvas.addEventListener("mousedown", mouseDown, true);
canvas.addEventListener("mousemove", mouseMove, true);
$("#interface form").submit(function() { write(); return false; });

function mouseDown(e)
{
	if (!Canon.shooting)
		Canon.shoot({ "x":e.x, "y":e.y });
}

function mouseMove(e)
{
	if (!Canon.shooting)
		Canon.angle = Math.atan2(e.x - Canon.x, e.y - Canon.y) + Math.PI / 2;
}