class Goal
{

  constructor()
  {
    this.x= (Math.random()*window.innerWidth)-100;
    this.y= (Math.random()*window.innerHeight)-100;
    var alive = true;
    this.alive=alive;
    this.img = new Image();
    this.img.src = "assets/goal.png";
    this.squareSize = 75;
  }

  checkCollision(e)
  {
    var collides = false;

    if((this.x< e.x + e.collisionWidth - 20)&&
      (this.x+this.squareSize>e.x)&&
      (this.y+this.squareSize>e.y)&&
      (this.y<e.y+e.collisionHeight) )
      {
        e.x= (Math.random()*window.innerWidth)-100;
        e.y = (Math.random()*window.innerHeight)-100;
        this.x= (Math.random()*window.innerWidth)-100;
        this.y = (Math.random()*window.innerHeight)-100;
        console.log("Collided");
      }
      return collides;
    }


  update()
  {
    if(this.alive === true)
    {
      var canvas = document.getElementById('mycanvas');
      var ctx = canvas.getContext('2d');

        var image = this.img;
        ctx.drawImage(image, 0 , 0,this.squareSize, this.squareSize ,this.x,this.y, this.squareSize,this.squareSize);

    }

  }

}
