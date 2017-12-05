class LevelLoader
{
  /**
  *constructor Function to creat instances of TouchTest
  *
  */
  constructor()
  {
    this.x =0;
    this.y = 0;
    this.col = 0;
    this.row = 0;
    this.squareSize = 50;
    this.MaxRows = 12;
    this.MaxCols = 12;
     this.map = [[],[]];
     gameNs.mazeSquares = [];
     this.request = new XMLHttpRequest();
     this.request.addEventListener("load", function requestListener(){
    //TADA! Now I have the class data.
     this.levelloader = JSON.parse(this.responseText);
     this.map= this.levelloader.Map1;
     console.log("MapData :" +this.map );

     for (this.row = 0; this.row < 12; this.row++)
     {
       gameNs.mazeSquares = [];
         for (this.col = 0; this.col < 12; this.col++)
         {
             gameNs.mazeSquares[this.row][this.col] = new WorldSquare(this.x, this.y);
              this.x = this.x + this.squareSize;
         }
           this.x = 0;
         this.y = this.y + this.squareSize;

     }


     for (this.col = 0; this.col < 12; this.col++)
     {
         for (this.row = 0; this.row < 12; this.row++)
         {
             if (this.map[this.row][this.col] === 1)
             {
                 gameNs.mazeSquares[this.row][this.col].containsWall = true;
             }
         }
     }

});
this.request.open("GET", "http://127.0.0.1:8000/Level.json");
this.request.send();
  }
  update()
  {
    for (this.row = 0; this.row < 12; this.row++)
    {
        for (this.col= 0; this.col< 12; this.col++)
        {

            gameNs.mazeSquares[this.row][this.col].update();

        }
    }
    /*
    this.request = new XMLHttpRequest();
   request.addEventListener("load", function requestListener(){
   //TADA! Now I have the class data.
    this.levelloader = JSON.parse(this.responseText);
    this.map= this.levelloader.map1;
    console.log("MapData:" +this.map );
});
request.open("GET", "http://127.0.0.1:8000/Level.json");
request.send();
 */

  }

  /**
  *Helper function that detects whether a touch device is present
  *
  */
  //is_touch_device()
  //{
    //return 'ontouchstart' in window;
  //}
}
