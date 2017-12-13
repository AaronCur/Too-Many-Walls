gameNs={}
class Goal
{

  constructor()
  {
    this.x= (Math.floor(Math.random()*24)*60);
    this.y= (Math.floor(Math.random()*12)*60);
    var alive = true;
    this.alive=alive;
    this.img = new Image();
    this.img.src = "img/goal.png";
    this.squareSize = 60;
    this.score = 0;
    this.goalScore = 20;
    this.winner=false;

    this.soundManager = new SoundManager()
    this.soundManager.init()
    this.soundManager.loadSoundFile("Goal", "img/audio/Goal.mp3")

  }

  checkCollision(e)
  {


    if((this.x< e.x + e.collisionWidth - 20)&&
      (this.x+this.squareSize>e.x)&&
      (this.y+this.squareSize>e.y + 150)&&
      (this.y<e.y + 170) )
      {
        e.x= ((Math.random()*24)*60);
        e.y= ((Math.random()*12)*60);
        this.x= (Math.floor(Math.random()*24)*60);
        this.y= (Math.floor(Math.random()*12)*60);

        if(gameNs.collides==true)
        {
          this.soundManager.playSound("Goal",false,gameNs.volume)
          gameNs.collides=false
        }


        //console.log("Collided");
        this.score = this.score + 20;

      }

    }


  update()
  {
    if(this.alive === true)
    {
      var canvas = document.getElementById('mycanvas');
      var ctx = canvas.getContext('2d');

      if(this.score === this.goalScore)
      {
        this.winner=true;
        gameNs.playScene.gameover=true;
      }
      if(gameNs.playScene.gameover==true)
      {
          //gameNs.sceneManager.goToScene(gameNs.Winner.title);
          //gameNs.winnerscreen.createDiv("Quit");
        //  gameNs.winnerscreen.createDiv("PlayAgain");
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
