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
    this.squareSize = 75;
    this.MaxRows = 12;
    this.MaxCols = 12;
    this.map = [];
     this.mazeSquares = [];
     this.request = new XMLHttpRequest();

     var that = this;
     this.request.addEventListener("load", function requestListener(){
    //TADA! Now I have the class data.
     this.levelloader = JSON.parse(this.responseText);
     this.map= this.levelloader.Map1;
     console.log("MapData :" +that.map[10] );

     for (this.row = 0; this.row < 14; this.row++)
     {
       //that.mazeSquares = [];
         for (this.col = 0; this.col < 24; this.col++)
         {
              that.mazeSquares.push(new WorldSquare(that.x, that.y));
              //that.mazeSquares[this.row][this.col] = new WorldSquare(that.x, that.y);
              that.x = that.x + that.squareSize;
         }
           that.x = 0;
         that.y = that.y + that.squareSize;

     }

    //console.log(that.map[10]);
     for (this.i = 0; this.i< 336; this.i++)
     {

         if (this.map[this.i] === 1)
         {
             that.mazeSquares[this.i].containsWall = true;
         }
         else if(this.map[this.i] === 2)
         {
           that.mazeSquares[this.i].breakWall = true;
         }
         else if(this.map[this.i] === 3)
         {
           that.mazeSquares[this.i].moveWall = true;
         }


     }

});
this.request.open("GET", "http://149.153.106.133:8000/Level.json");
this.request.send();
  }
  update()
  {

    for (this.i = 0; this.i < 336; this.i++)
    {
            this.mazeSquares[this.i].update();
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
