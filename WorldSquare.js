class WorldSquare
{
  /**
  *constructor Function to creat instances of TouchTest
  *
  */
  constructor(row,col)
  {
    this.imgWall = new Image();
    this.imgNotWall = new Image();
    this.imgBreakWall = new Image();
    this.imgMoveWall = new Image();
    this.imgWall.src = "assets/Wall.png";
    this.imgNotWall.src = "assets/NotWall.png";
    this.imgBreakWall.src = "assets/BreakWall.png";
    this.imgMoveWall.src = "assets/moveWall.png";
    this.containsWall = false;
    this.breakWall = false;
    this.moveWall = false;
    this.row = row;
    this.col = col;
    this.squareSize = 75;


  }
  initLevelLoader()
  {


  }
  update()
  {
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    if(this.containsWall == true)
    {
      var image = this.imgWall;
      ctx.drawImage(image, 0 , 0,this.squareSize, this.squareSize ,this.row,this.col, this.squareSize,this.squareSize);
    }
    else if(this.containsWall == false)
    {
      var image = this.imgNotWall;
      ctx.drawImage(image, 0 , 0,this.squareSize, this.squareSize ,this.row,this.col, this.squareSize,this.squareSize);
    }

    if(this.breakWall == true)
    {
      var image = this.imgBreakWall;
      ctx.drawImage(image, 0 , 0,this.squareSize, this.squareSize ,this.row,this.col, this.squareSize,this.squareSize);
    }
    if(this.moveWall == true)
    {
      var image = this.imgMoveWall;
      ctx.drawImage(image, 0 , 0,this.squareSize, this.squareSize ,this.row,this.col, this.squareSize,this.squareSize);

    }

  }
  draw()
  {


  }


}
