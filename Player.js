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
  this.enableLeft = null;
  this.enableRight = null;
  this.enableDown = null;
  this.enableUp = null;
  this.direction = 0;

  this.img= imageOptions.image;
  this.fps = fps;
  this.x = 100;
  this.xFeet = this.x + (this.width / 2);
  this.yFeet = this.y + (this.height/2);
  this.y = y;
  this.index = 0;
  this.width = imageOptions.width;
  this.height = imageOptions.height;
  this.time = 0;
  this.ticksPerFrame = 1000/this.fps;
  this.col = 0;
  this.row = 0;
  this.i = 0;
  this.squareSize = 75 * 0.8;
  this.maxRows=14
  this.maxCols=24
  this.moved =false
  gameNs.collides = false;

  this.soundManager = new SoundManager()
  this.soundManager.init()
  this.soundManager.loadSoundFile("flagPlayer", "img/audio/swoosh.mp3")
  this.soundManager.loadSoundFile("playerWall", "img/audio/drop.mp3")
  this.soundManager.loadSoundFile("breakWall", "img/audio/rocks.mp3")

  }




 update(deltaTime, level)
 { if(gameNs.playScene.gameover == false)
   {
     if(this.moveX == false && this.x> 0 /*&& this.checkCollisionMap(level.mazeSquares[this.i -1])==false*/)
      {
        this.x -= 8;
        this.direction = 4;

      }
      else if (this.moveX == true && this.x < 23 * 75 /*&& this.checkCollisionMap(level.mazeSquares[this.i +1]==false)*/)
      {
        this.x +=8;
        this.direction = 2;
      }
      else if (this.moveY == false && this.y > 10)
      {
         this.y-=8;
         this.direction = 1;
      }
      else if (this.moveY == true && this.y < 12 * 75)
      {
       this.y+=8;
       this.direction = 3;
      }

   }
   else {
     this.moveX = null;
     this.moveY = null;
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
   this.xFeet = (this.x + (this.width/2));
   this.yFeet = (this.y + 5);
   this.col = Math.floor(this.xFeet / this.squareSize) + 1 ;
   this.row = Math.floor(this.yFeet / this.squareSize) + 1 ;
   this.i = (this.row * this.maxCols)+this.col;
   this.i = this.i - 1  ;


   this.checkCollisionMap(level);
 }

  /**
   * function of Square which gives the r g b varialbles an
   * initial value and thrn fills the sqare  colour initially
   * @type {Integer} r -given value of 10
   * @type {Integer} b -given value of 255
   * @type {Integer} g -given value of 10
  *fills the rectanglewith this rgb value at the positon this.x, this.y
   */

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


    if((this.x< e.x + e.collisionWidth)&&
      (this.x+this.width>e.x)&&
      (this.y+this.height>e.y)&&
      (this.y<e.y+e.collisionHeight) )
      {
        if(gameNs.collides==false)
        {
          this.soundManager.playSound("flagPlayer",false,1)
          gameNs.collides = true;
        }

        e.x=this.x+20;
        e.y=this.y-70;

      }

  }
  checkCollisionMap(level)
  {

    if(this.direction == 2  )
    {
      if(level.mazeSquares[this.i+1].containsWall === true ||level.mazeSquares[this.i+1].moveWall === true
        || level.mazeSquares[this.i+1].breakWall === true)
      {
        if(level.mazeSquares[this.i+1].x <= this.x+this.width - 6)
        {
          this.moveX = null;
          this.moveY = null;
          if(this.moved==false)
          {
            this.soundManager.playSound("playerWall",false,1)
            this.moved=true;
          }
        }
        else
         {
           this.moved=false;
        }
      }
    }
      else if(this.direction == 4 )
      {
        if(level.mazeSquares[this.i - 1].containsWall === true || level.mazeSquares[this.i - 1].moveWall === true
          ||level.mazeSquares[this.i - 1].breakWall === true)
        {
          if(this.x <= level.mazeSquares[this.i - 1].x + (this.squareSize - 6)   )
          {
            this.moveX = null;
            this.moveY = null;
            if(this.moved==false)
            {
              this.soundManager.playSound("playerWall",false,1)
              this.moved=true;
            }
          }
          else
           {
             this.moved=false;
          }
        }

    }
    else if(this.direction == 1)
    {
      if(level.mazeSquares[this.i - this.maxCols].containsWall ===true ||level.mazeSquares[this.i - this.maxCols].moveWall ===true ||
        level.mazeSquares[this.i - this.maxCols].breakWall ===true)
      {
        if(this.y + (this.height / 2) + 5<= level.mazeSquares[this.i-this.maxCols].y + this.squareSize)
        {
          this.moveX = null;
          this.moveY = null;
          if(this.moved==false)
          {
            this.soundManager.playSound("playerWall",false,1)
            this.moved=true;
          }
          if(this.moved==false)
          {
            this.soundManager.playSound("playerWall",false,1)
            this.moved=true;
          }
        }
        else
         {
           this.moved=false;
        }
      }

  }
  else if(this.direction == 3)
  {
    if(level.mazeSquares[this.i + this.maxCols].containsWall===true || level.mazeSquares[this.i + this.maxCols].breakWall===true
        || level.mazeSquares[this.i + this.maxCols].moveWall === true)
    {
      if(this.y + this.height >= level.mazeSquares[this.i+this.maxCols].y)
      {
        this.moveX = null;
        this.moveY = null;
        if(this.moved==false)
        {
          this.soundManager.playSound("playerWall",false,1)
          this.moved=true;
        }
      }
      else
       {
         this.moved=false;
      }
    }

}




  }
  moveWall(level)
  {
    if(this.direction == 2  )
    {
      if(level.mazeSquares[this.i +1].moveWall == true &&level.mazeSquares[this.i +2].containsWall == false)
      {
        if(level.mazeSquares[this.i+1].x <= this.x+this.width - 6)
        {
          level.mazeSquares[this.i+1].moveWall = false;
          level.mazeSquares[this.i+2].moveWall = true;
          this.soundManager.playSound("playerWall",false,1)

        }

      }

    }
    else if(this.direction == 4 )
    {
      if(level.mazeSquares[this.i -1].moveWall == true&&level.mazeSquares[this.i -2].containsWall == false  )
      {
        if(this.x <= level.mazeSquares[this.i - 1].x + (this.squareSize - 6) )
        {
          level.mazeSquares[this.i-1].moveWall = false;
          level.mazeSquares[this.i-2].moveWall = true;
          this.soundManager.playSound("playerWall",false,1)

        }

      }

    }
   else if(this.direction == 1 )
    {
      if(level.mazeSquares[this.i - this.maxCols].moveWall== true&&level.mazeSquares[this.i - (this.maxCols * 2)].containsWall == false )
      {
        if(this.y + (this.height / 2) + 5<= level.mazeSquares[this.i-this.maxCols].y + this.squareSize)
        {
          level.mazeSquares[this.i - this.maxCols ].moveWall = false;
          level.mazeSquares[this.i - (this.maxCols * 2)].moveWall = true;
          this.soundManager.playSound("playerWall",false,1)

        }

      }

  }
  else if(this.direction == 3)
  {
    if(level.mazeSquares[this.i + this.maxCols].moveWall == true&&level.mazeSquares[this.i + (this.maxCols * 2)].containsWall == false)
    {
      if(this.y + this.height >= level.mazeSquares[this.i+this.maxCols].y)
      {
        level.mazeSquares[this.i + this.maxCols ].moveWall = false;
        level.mazeSquares[this.i + (this.maxCols * 2)].moveWall = true;
        this.soundManager.playSound("playerWall",false,1)
      }

    }

}



  }
  breakWall(level)
  {

    if(this.direction == 2  )
    {
      if(level.mazeSquares[this.i +1].breakWall == true )
      {
        if(level.mazeSquares[this.i+1].x <= this.x+this.width - 6)
        {
          level.mazeSquares[this.i+1].breakWall = false;
          level.mazeSquares[this.i+1].containsWall = false;
        this.soundManager.playSound("breakWall",false,1)
        }

      }

    }
    else if(this.direction == 4 )
    {
      if(level.mazeSquares[this.i -1].breakWall == true )
      {
        if(this.x <= level.mazeSquares[this.i - 1].x + (this.squareSize - 6))
        {
          level.mazeSquares[this.i-1].breakWall = false;
          level.mazeSquares[this.i-1].containsWall = false;
          this.soundManager.playSound("breakWall",false,1)
        }

      }

    }
   else if(this.direction == 1 )
    {
      if(level.mazeSquares[this.i - this.maxCols].breakWall == true )
      {
        if(this.y + (this.height / 2) + 5<= level.mazeSquares[this.i-this.maxCols].y + this.squareSize)
        {
          level.mazeSquares[this.i - this.maxCols].breakWall = false;
          level.mazeSquares[this.i - this.maxCols].containsWall = false;
          this.soundManager.playSound("breakWall",false,1)
        }

      }

  }
  else if(this.direction == 3)
  {
    if(level.mazeSquares[this.i + this.maxCols].breakWall == true )
    {
      if(this.y + this.height >= level.mazeSquares[this.i+this.maxCols].y)
      {
       level.mazeSquares[this.i  +  this.maxCols].breakWall = false;
       level.mazeSquares[this.i +  this.maxCols ].containsWall = false;
       this.soundManager.playSound("breakWall",false,1)
     }
    }

  }

  }

}
