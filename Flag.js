class Flag
{
  constructor(context, imageOptions,fps)
  {

    this.img = imageOptions.image;
    this.fps = fps;
    this.x = (Math.random()*window.innerWidth)-100;
    this.y = (Math.random()*window.innerHeight)-100;
    this.index =0;
    this.time = 0;
    this.width = imageOptions.width;
    this.height = imageOptions.height;
    this.ticksPerFrame = 1000/this.fps;

  }

  respawn()
  {
    this.x = (Math.random()*window.innerWidth)-100;
    this.y = (Math.random()*window.innerHeight)-100;
  }

  update(deltaTime)
  {

    if(deltaTime != null)
    {
      this.time = this.time + deltaTime;
    }
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');

    var image = this.img;

    ctx.drawImage(image, this.index* 158 , 312 ,158, 312 ,this.x,this.y, 40,120);

    if(this.ticksPerFrame < this.time)
    {
      this.index = this.index +1;
      if(this.index > 7)
      {
        this.index = 0;
      }
        this.time =0;
    }

  }
}
