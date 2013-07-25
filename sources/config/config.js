var inGame = true;
var balls = [];
var objects = [];
var UIHeight = 30;

var images = [];

function loadImage(url)
{
	var img = new Image()
	img.src = url;
	return img;
}

// images.push(loadImage("./medias/lapin.jpg"));
// images.push(loadImage("./medias/kanar.jpg"));
// images.push(loadImage("./medias/poney.jpg"));

var constantes = 
{
	"text" : alphabet
}
