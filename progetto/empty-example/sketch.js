var ship;
function setup()
{
	createCanvas(600,400);
	ship = new Ship();
}

function draw()
{
	ship.show();
	background(51);

}
