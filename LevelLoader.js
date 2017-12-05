class LevelLoader
{
  /**
  *constructor Function to creat instances of TouchTest
  *
  */
  constructor()
  {
    this.squareSize = 50;
    this.MaxRows = 12;
    this.MaxCols = 12;
     this.map = [[],[]];
     gameNs.mazeSquares = [[],[]];
     this.request = new XMLHttpRequest();
     this.request.addEventListener("load", function requestListener(){
    //TADA! Now I have the class data.
     this.levelloader = JSON.parse(this.responseText);
     this.map= this.levelloader.Map1;
     console.log("MapData :" +this.map );

     for (var row = 0; row < this.MaxRows; row++)
     {
         for (var col = 0; col < this.MaxCols; col++)
         {
             gameNs.mazeSquares[row][col] = new WorldSquare(x, y);
             x = x + this.squareSize;
         }
         x = 0;
         y = y + this.squareSize;

     }


     for (var col = 0; col < this.MaxCols; col++)
     {
         for (var row = 0; row < this.MaxRows; row++)
         {
             if (this.map[row][col] == 1)
             {
                 gameNs.mazeSquares[row][col].containsWall = true;
             }
         }
     }

});
this.request.open("GET", "http://127.0.0.1:8000/Level.json");
this.request.send();
  }
  initLevelLoader()
  {
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
