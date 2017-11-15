/**
*Helper function that accepts key pressed events and initiates code
moves square based on which button that's pressed
@param {number}x assigns squares x position
@param {number}y assigns squares y position
@param {number}width assigns height of sqaure
@param {number}height assigns height of square
@param {number}colour assigns colour of square
*/

function Square(x,y,width,height,colour)
{
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
  this.colour=colour;

      this.x=200;
      this.y=100;

      this.width=200;
      this.height=200;
}



/**
*Helper function that draws things such as background and squares
*/
Square.prototype.draw=function()
{

  var canvas = document.getElementById('mycanvas');
  var ctx = canvas.getContext('2d');


    var r = 255;
  	var g =55;
  	var b =5;


    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = rgb(r,g,b);
    ctx.fillRect(this.x,this.y,this.width,this.height);



}

Square.prototype.moveLeft=function()
{
  this.x -= 10;
}

Square.prototype.moveRight=function()
{
  this.x += 10;
}

Square.prototype.moveDown=function()
{
  this.y += 10;
}
Square.prototype.moveUp=function()
{
  this.y -= 10;
}

Square.prototype.checkCollision = function(e)
{
  var collides = false;

  if((this.x< e.x + e.width)&&
    (this.x+this.width>e.x)&&
    (this.y+this.height>e.y)&&
    (this.y<e.y+e.height) )
    {
      collides = true;
    }
    return collides;
}
