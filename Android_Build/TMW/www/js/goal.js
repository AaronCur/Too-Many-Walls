gameNs={}
class Goal
{

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
    this.soundManager.loadSoundFile("Goal", "img/audio/goal.mp3")
    this.respawn()
  }

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

  checkCollision(e)
  {


    if((this.x< e.x + e.collisionWidth - 20)&&
      (this.x+this.squareSize>e.x)&&
      (this.y+this.squareSize>e.y + 150)&&
      (this.y<e.y + 170) )
      {
        e.respawn()
        this.respawn()

        if(gameNs.collides===true)
        {
          this.soundManager.playSound("Goal",false,gameNs.volume)
          gameNs.collides=false
          gameNs.tutorialcount = 3;
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
          ctx.strokeStyle="black";
        ctx.fillStyle ='green';
        ctx.font = '50px Adventure Regular';
        if(gameNs.sceneManager.currentScene.title == 'Play')
        {
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
              ctx.fillText('Score: '+this.score, this.posX,this.posY);
          }


        else if (gameNs.sceneManager.currentScene.title == 'Tutorial')
        {
          if(gameNs.tutorialScene.player.x > 516 )
          {
            if(  gameNs.tutorialScene.player.x > 989 )
            {
              this.posX = 989 + 50;
            }
            else {
              this.posX = gameNs.tutorialScene.player.x  + 50;
            }

          }
          //else {
            //  ctx.fillText('Timer '+this.minutes+':'+this.seconds, 516 - 350 , 50);
        //  }
          if(gameNs.tutorialScene.player.y > 236 )
          {
              if(gameNs.tutorialScene.player.y > 572)
              {
                  //ctx.fillText('Timer '+this.minutes+':'+this.seconds,516 - 350,572 - 186);
                  this.posY = 572 - 186
              }
              else {
                this.posY = gameNs.tutorialScene.player.y - 186

              }
          }


          ctx.fillText('Score: '+this.score, this.posX,this.posY);
        }

      }

    }

  }
