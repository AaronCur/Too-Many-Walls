class Player
{
  /**
  *Constructor function that accepts key pressed events and initiates code
  moves square based on which button that's pressed
  @param {number}x assigns squares x position
  @param {number}y assigns squares y position
  @param {number}width assigns height of sqaure
  @param {number}height assigns height of square
  @param {number}colour assigns colour of square
  */
  constructor(context, imageOptions, fps, y)
  {
//  this.x=x;
  this.moveX = null;
  this.moveY = null;
  this.direction = 0;

  this.img= imageOptions.image;
  this.fps = fps;
  this.x = 0;
  this.y = y;
  this.index = 0;
  this.width = imageOptions.width;
  this.height = imageOptions.height;
  this.time = 0;
  this.ticksPerFrame = 1000/this.fps;
  }

 update(deltaTime)
 {
   if(this.moveX == false)
    {
      this.x -= 10;
      this.direction = 4;
    }
    else if (this.moveX == true)
    {
      this.x +=10;
      this.direction = 2;
    }
    else if (this.moveY == false)
    {
       this.y-=10;
       this.direction = 1;
    }
    else if (this.moveY == true)
    {
     this.y+=10;
     this.direction = 3;
    }


   if(deltaTime != null)
   {
     this.time = this.time + deltaTime;
   }

   var canvas = document.getElementById('mycanvas');
   var ctx = canvas.getContext('2d');

   var image = this.img;
   //if(moveX == true)

  if (this.moveX == false)
   {
     ctx.drawImage(image, this.index* 78 , 108,78, 108 ,this.x,this.y, this.width,this.height);
   }
   else if (this.moveX == true)
   {
     ctx.drawImage(image, this.index* 78 , 216,78, 108 ,this.x,this.y, this.width,this.height);
   }
   else if (this.moveY == true)
   {
     ctx.drawImage(image, this.index* 78, 0,78, 108 ,this.x,this.y, this.width,this.height);
   }
   else if (this.moveY == false)
   {
     ctx.drawImage(image, this.index* 78 , 324,78, 108 ,this.x,this.y, this.width,this.height);
   }

   if(this.moveX== null && this.moveY ==null)
   {
     if(this.direction == 1)
     {
       ctx.drawImage(image, 78 , 324,78, 108 ,this.x,this.y, this.width,this.height);
     }
     else if(this.direction == 2)
     {
       ctx.drawImage(image, 78 , 216,78, 108 ,this.x,this.y, this.width,this.height);
     }
     else if(this.direction == 3)
     {
       ctx.drawImage(image, 78, 0,78, 108 ,this.x,this.y, this.width,this.height);
     }
     else
     {
        ctx.drawImage(image, 78 , 108,78, 108 ,this.x,this.y, this.width,this.height);
     }

   }
   if(this.ticksPerFrame < this.time)
   {
     this.index = this.index +1;
     if(this.index > 2)
     {
       this.index = 0;
     }
       this.time =0;
   }

 }

  /**
   * function of Square which gives the r g b varialbles an
   * initial value and thrn fills the sqare  colour initially
   * @type {Integer} r -given value of 10
   * @type {Integer} b -given value of 255
   * @type {Integer} g -given value of 10
  *fills the rectanglewith this rgb value at the positon this.x, this.y
   */
   draw()
  {
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width, canvas.height);
    //var r = Math.floor(Math.random() * 255);
    //var g = Math.floor(Math.random() * 255);
    //var b = Math.floor(Math.random() * 255);
    var r = 10;
    var g = 10;
    var b = 255;

    ctx.fillStyle = rgb(r,g,b);
    // args are x,y,width,height
    ctx.fillRect(this.x, this.y, this.width, this.height);

  }

  moveLeft()
  {
    this.x -= 10;
  }

  moveRight()
  {
    this.x += 10;
  }

  moveDown()
  {
    this.y += 10;
  }
  moveUp()
  {
    this.y -= 10;
  }

  checkCollision(e)
  {
    var collides = false;

    if((this.x< e.x + e.width)&&
      (this.x+this.width>e.x)&&
      (this.y+this.height>e.y)&&
      (this.y<e.y+e.height) )
      {
        collides = true;
      }
      return collides;


  }
}
