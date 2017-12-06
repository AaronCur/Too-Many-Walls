class Timer
{

  constructor()
  {
    this.start = Date.now();
    this.diff;
    this.minutes;
    this.seconds;
    this.duration=60;

  }

    timer()
    {
        // get the number of seconds that have elapsed since
        // startTimer() was called
        this.diff = this.duration - (((Date.now() - this.start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        this.minutes = (this.diff / 60) | 0;
        this.seconds = (this.diff % 60) | 0;

        this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;


        if (this.diff <= 0)
        {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            this.start = Date.now() + 1000;

          }
            setInterval(this.timer, 1000);

      }



    update(deltaTime)
        {
          var canvas = document.createElement("mycanvas");
          var ctx = mycanvas.getContext("2d");
          this.timer();
          ctx.fillStyle ='white';
          ctx.font = '50px Arial';
          ctx.fillText('Timer '+this.minutes+':'+this.seconds, 500,50);
        }
  }
