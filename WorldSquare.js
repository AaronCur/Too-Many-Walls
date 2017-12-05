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
    this.imgWall.src = "assets/Wall.png";
    this.imgNotWall.src = "assets/NotWall.png";
    this.containsWall = false;
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
    else
    {
      var image = this.imgNotWall;
      ctx.drawImage(image, 0 , 0,this.squareSize, this.squareSize ,this.row,this.col, this.squareSize,this.squareSize);
    }

  }
  draw()
  {


  }


}
