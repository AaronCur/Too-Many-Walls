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
    this.otherScore = 0;
    this.goalScore = 120;
    this.winner=false;
    this.posX = 55;
    this.posY = 50;

    this.rps = new RockParticleSystem(this.posX, this.posY)
    this.soundManager = new SoundManager()
    this.soundManager.init()
    this.soundManager.loadSoundFile("Goal", "img/audio/goal.mp3")
    this.respawn()

    this.posOtherX = 725;
    this.posOtherY = 50;

    this.x = -100;
    this.y = -100;

  }
  checkCollision(e)
{


  if((this.x< e.x + e.collisionWidth - 20)&&
    (this.x+this.squareSize>e.x)&&
    (this.y+this.squareSize>e.y + 130)&&
    (this.y<e.y + 130) )
    {
      e.respawn()
      this.respawn()

      if(gameNs.collides===true)
      {
        gameNs.soundManager.playSound("Goal",false,gameNs.volume)
        gameNs.collides=false
        gameNs.tutorialcount = 3;
      }
      //console.log("Collided");
      this.score = this.score + 20;
      var message = {};
      message.type = "updateState";
      message.score = {otherScore:this.score};

      if(gameNs.game.ws.readyState === gameNs.game.ws.OPEN)
      {
        gameNs.ws.send(JSON.stringify(message));
      }

    }

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
      (this.y+this.squareSize>e.y + 130)&&
      (this.y<e.y + 130) )
      {
        e.respawn()
        this.respawn()

        if(gameNs.collides===true)
        {
          this.soundManager.playSound("Goal",false,gameNs.volume)
          gameNs.tutorialcount = 3;
          this.rps.createPart = true
          gameNs.collides = false
        }


        //console.log("Collided");
        this.score = this.score + 20;

      }

    var message = {};
    message.type = "updateState";
    message.goal = {x:this.x, y:this.y};

    if(gameNs.game.ws.readyState === gameNs.game.ws.OPEN)
    {
      gameNs.ws.send(JSON.stringify(message));
    }

  }
  updateFromNet(x,y)
  {
    this.x = x;
    this.y = y;
  }
  updateFromNetScore(otherScore)
  {
    this.otherScore = otherScore;
  }

  update()
  {


    if(this.alive === true)
    {
      var canvas = document.getElementById('mycanvas');
      var ctx = canvas.getContext('2d');
      this.rps.update(this.posX, this.posY)
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
        ctx.fillStyle ='blue';
        ctx.font = '55px Adventure Regular';
        ctx.strokeStyle = 'black';

        if(gameNs.sceneManager.currentScene.title == 'Play')
        {
          if(gameNs.playScene.player.x > 475 )
          {
            if(  gameNs.playScene.player.x > 948 )
            {
              this.posX = 948-420;
            }
            else {
              this.posX = gameNs.playScene.player.x - 420;
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
          //  ctx.fillText(gameNs.score,this.posX,this.posY);
            //ctx.strokeText(gameNs.score,this.posX,this.posY);
            ctx.fillText(this.score+' /120', this.posX,this.posY);
            ctx.strokeText(this.score+' /120', this.posX,this.posY);

          ///////////////////////
          ctx.fillStyle ='red';
          ctx.font = '55px Adventure Regular';
          ctx.strokeStyle = 'black';
          if(gameNs.playScene.player.x > 475 )
          {
            if(  gameNs.playScene.player.x > 948 )
            {
              this.posOtherX = 948 + 250;
            }
            else {
              this.posOtherX = gameNs.playScene.player.x  + 250;
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
                  this.posOtherY = 572 - 186
              }
              else {
                this.posOtherY = gameNs.playScene.player.y - 186

              }
          }
              ctx.fillText(this.otherScore+' /120', this.posOtherX,this.posOtherY);
              ctx.strokeText(this.otherScore+' /120', this.posOtherX,this.posOtherY);
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


          ctx.fillText('Score: '+this.score+' /120', this.posX,this.posY);
          ctx.strokeText('Score: '+this.score+' /120', this.posX,this.posY);
        }

      }

    }

  }
