gameNs = {}
class Timer
{

  constructor()
  {
    gameNs.start;
    this.minutes;
    this.seconds;
    this.duration=60;
    gameNs.timerStart = false;
    gameNs.score = "";
    this.posX=516-350;
    this.posY=236 - 186;
  }

    timer()
    {

        // get the number of seconds that have elapsed since
        // startTimer() was called
        this.diff = this.duration - (((Date.now() - gameNs.start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        this.minutes = (this.diff / 60) | 0;
        this.seconds = (this.diff % 60) | 0;

        this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

        gameNs.score = (this.minutes+":"+this.seconds);

        if (this.diff <= 0)
        {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            gameNs.start = Date.now() + 1000;

          }
            setInterval(this.timer, 1000);

      }



    update(deltaTime)
        {
          var canvas = document.createElement("mycanvas");
          var ctx = mycanvas.getContext("2d");
          ctx.fillStyle ='blue';
          ctx.font = '50px Adventure Regular';
          if(gameNs.timerStart==true)
          {
              this.timer();
          }
          console.log("Playerposx "+gameNs.playScene.player.x)
          /*
          if(this.player.x > (canvas.width / 2 ))
          {
            if(this.player.x  > (24*60)- (canvas.width / 2))
            {
              ctx.translate(-((24*60)- (canvas.width )), 0);
            }
            else {
              ctx.translate(-this.player.x + (canvas.width / 2), 0);
            }
          }
           if (this.player.y + 25 > (canvas.height / 2) )
          {
            if(this.player.y +25 > (14 * 60) - (canvas.height / 2))
            {
              ctx.translate(0, -((14*60)- (canvas.height)));
            }
            else {
                ctx.translate(0, -(this.player.y + 25) + (canvas.height / 2));
            }

          }
          */

        //ctx.fillText('Timer '+this.minutes+':'+this.seconds, gameNs.playScene.player.x  , gameNs.playScene.player.y);
        if(gameNs.playScene.player.x > 516 )
        {
          if(  gameNs.playScene.player.x > 989 )
          {
            this.posX = 989-350;
          }
          else {
            this.posX = gameNs.playScene.player.x - 350;
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
          ctx.fillText('Timer '+gameNs.score,this.posX,this.posY);

        }
  }
