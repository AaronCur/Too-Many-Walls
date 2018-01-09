/**
 * @fileoverview
 * @author Jack Dalton
 */
//
gameNs={}
class Goal
{
/**
*Constructor that creates new goal
*/
  constructor()
  {
    var alive = true;
    this.alive=alive;
    this.img = new Image();
    this.img.src = "img/goal.png";
    this.squareSize = 60;
    this.score = 0;
    this.goalScore = 120;
    this.winner=false;
    this.posX = 516 + 50;
    this.posY = 50;

    this.soundManager = new SoundManager()
    this.soundManager.init()
    this.soundManager.loadSoundFile("Goal", "img/audio/Goal.mp3")
    this.respawn()
  }

  /**
  *function used to respawn the flag's position everytime the game is started
  *Or when the players brings the flag to the goal.
  */
  respawn()
  {
    this.i= (Math.floor(Math.random()*5));
    if(this.i === 0)
    {
      this.x = 1*60
      this.y = 9*60
    }
    else if(this.i === 1)
    {
      this.x = 5*60
      this.y = 12*60
    }
  else if(this.i === 2)
    {
      this.x =16*60
      this.y = 5*60
    }
    else if(this.i === 3)
    {
      this.x = 15*60
      this.y = 10*60
    }
    else if(this.i === 4)
    {
      this.x = 22*60
      this.y = 7*60
    }

  }

/**
*Function that checks for collision between the goal and the flag
*Fucntion then calls the respawn function for both the flag and goal
@param {event}e is used as a reference for the flag position.
*/
  checkCollision(e)
  {


    if((this.x< e.x + e.collisionWidth - 20)&&
      (this.x+this.squareSize>e.x)&&
      (this.y+this.squareSize>e.y + 150)&&
      (this.y<e.y + 170) )
      {
        e.respawn()
        this.respawn()

        if(gameNs.collides==true)
        {
          this.soundManager.playSound("Goal",false,gameNs.volume)
          gameNs.collides=false
        }


        //console.log("Collided");
        this.score = this.score + 20;

      }

    }

/**
*update function loads image used for goal and checks for gameOver
*/
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
        ctx.font = '50px Adventure Regular';
        if(gameNs.playScene.player.x > 516 )
        {
          if(  gameNs.playScene.player.x > 989 )
          {
            this.posX = 989 + 50;
          }
          else {
            this.posX = gameNs.playScene.player.x  + 50;
          }

        }
        //else {
          //  ctx.fillText('Timer '+this.minutes+':'+this.seconds, 516 - 350 , 50);
      //  }
        if(gameNs.playScene.player.y > 236 )
        {
            if(gameNs.playScene.player.y > 572)
            {
                //ctx.fillText('Timer '+this.minutes+':'+this.seconds,516 - 350,572 - 186);
                this.posY = 572 - 186
            }
            else {
              this.posY = gameNs.playScene.player.y - 186

            }
        }

        }
        ctx.fillText('Score: '+this.score, this.posX,this.posY);
    }

  }
