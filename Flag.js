class Flag
{
  /**
  *Constructor function that accepts key pressed events and initiates code
  moves square based on which button that's pressed
  @param {number}context
  @param {Image}imageOptions used for height, width and the image
  @param {number}fps frames per second
  */
  constructor(context, imageOptions,fps)
  {

    this.img = imageOptions.image;
    this.fps = fps;

    this.index =0;
    this.time = 0;
    this.width = imageOptions.width;
    this.collisionWidth = 40;
    this.collisionHeight = 60;
    this.height = imageOptions.height;
    this.ticksPerFrame = 1000/this.fps;

    this.i= (Math.floor(Math.random()*5));
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
      this.x = 154
      this.y = 310
    }
    else if(this.i === 1)
    {
      this.x = 626
      this.y = 558
    }
  else if(this.i === 2)
    {
      this.x = 982
      this.y = 310
    }
    else if(this.i === 3)
    {
      this.x = 1354
      this.y = 678
    }
    else if(this.i === 4)
    {
      this.x = 794
      this.y = 278
    }
    else if(this.i === 5)
    {
      this.x = 618
      this.y = 246
    }
  }
/**
*Update funtion that works with flags animation
@param {Time}deltaTime time variable used in the flag animation
*/
  update(deltaTime)
  {

    if(deltaTime != null)
    {
      this.time = this.time + deltaTime;
    }
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');

    var image = this.img;


    //loads flags image
    ctx.drawImage(image, this.index* 158 , 312 ,158, 312 ,this.x,this.y, 40 * 0.8,120 * 0.8);

    //flag animation
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
