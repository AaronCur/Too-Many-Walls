gameNs={}
class Goal
{

  constructor()
  {
    this.x= (Math.floor(Math.random()*24)*75);
    this.y= (Math.floor(Math.random()*12)*75);
    var alive = true;
    this.alive=alive;
    this.img = new Image();
    this.img.src = "assets/goal.png";
    this.squareSize = 75;
    this.score = 0;
    this.goalScore = 200;
    this.Winner=false;
  }

  checkCollision(e)
  {
    var collides = false;

    if((this.x< e.x + e.collisionWidth - 20)&&
      (this.x+this.squareSize>e.x)&&
      (this.y+this.squareSize>e.y)&&
      (this.y<e.y+e.collisionHeight) )
      {
        e.x= ((Math.random()*24)*75);
        e.y= ((Math.random()*12)*75);
        this.x= (Math.floor(Math.random()*24)*75);
        this.y= (Math.floor(Math.random()*12)*75);
        this.score +=20;
      }
      return collides;
    }


  update()
  {
    if(this.alive === true)
    {
      var canvas = document.getElementById('mycanvas');
      var ctx = canvas.getContext('2d');

      if(this.score === this.goalScore)
      {
        gameNs.winner=true;
      }
      if(gameNs.winner===true)
      {
          gameNs.sceneManager.goToScene(gameNs.Winner.title);
          gameNs.Winner.createDiv("Quit");
          gameNs.Winner.createDiv("PlayAgain");
          var endTime = Date.now()

          gameNs.playerscore= endTime - gameNs.start


      }
        var image = this.img;
        ctx.drawImage(image, 0 , 0,this.squareSize, this.squareSize ,this.x,this.y, this.squareSize,this.squareSize);
        ctx.font = '50px Arial';
        ctx.fillText('Score: '+this.score, 1550,50);
    }

  }

}
