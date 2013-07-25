var moving = false;
var loading = true;
var compteur = 0;
var tab = [];
var canvas, ctx;
var canvas_width = window.innerWidth-25;
var canvas_height = window.innerHeight-25;

window.onload = function()
{
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = canvas_width;
    canvas.height = canvas_height;

    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

    var img = new Image();
    img.src = "dragon.jpg";
    img.onload = function(){compteur++}

    for (var i = 0; i < 32; i++)
    {
        for (var j = 0; j < 32; j++)
        {
            var speedX = getRandom();
            var speedY = getRandom();
            var newPart = new partDragon(img, i, j, speedX, speedY);
            tab.push(newPart);
        }
    }

    canvas.addEventListener("click", onclick, false);
    loop();
}

function onclick(event)
{
    var mouseX = event.pageX - canvas.offsetLeft;
    var mouseY = event.pageY - canvas.offsetTop;

    if (mouseX > canvas_width/2-250 && mouseX < canvas_width/2+250 && mouseY > canvas_height/2-250 && mouseY < canvas_height/2+250)
    	moving=true;
}

function getRandom()
{
    var num = Math.random()-0.5;
    if (num < 0.05 && num > -0.05)
        getRandom();
    else
        return num;
}

function loop()
{
    if (compteur >=1)
    {
        if (loading)
            loading = false;        
    }
    ctx.fillStyle = "white";
    ctx.fillRect(0,0, canvas_width, canvas_height)

    for (var i = 0; i < 1024; i++)
            tab[i].draw();

    if (moving)
    {
        for (var i = 0; i < 1024; i++)
            tab[i].move();
    }
    else
    {
        ctx.font = "35px arial";
        ctx.fillStyle = "black";
        ctx.fillText("LES DRAGONS C'EST COOL !", 35, 35);
        ctx.fillText("CLIQUE-MOI !", canvas_width/2-170, canvas_height/2+250)    
    }


    if (loading)
    {
        ctx.fillStyle = "black";
        ctx.fillRect(0,0, canvas_width, canvas_height);
        ctx.font = "50px arial";
        ctx.fillStyle = "lightblue";
        ctx.fillText("Loading ...", canvas_width/2-120, canvas_height/2-200);

        ctx.strokeStyle = "white";
        ctx.strokeRect(canvas_width/2-128, canvas_height/2-100, 256, 50);
        ctx.fillStyle = "blue";
        ctx.fillRect(canvas_width/2-128, canvas_height/2-100, compteur/4, 50);
    }

    requestAnimFrame(loop);
}

function partDragon(img, i, j, speedX, speedY)
{
    this.x = j;
    this.y = i;
    this.draw = function()
    {
        ctx.drawImage(img, j*15, i*14, 15, 14, canvas_width/2-250+this.x*15, canvas_height/2-225+this.y*14, 15, 14);
    }

    this.move = function()
    {
        this.x += speedX;
        this.y += speedY;
    }
}