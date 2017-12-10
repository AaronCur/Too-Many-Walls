class PlayScene
{
  /**
   * Constructor function , creates a scene with parameters which are passed in on construction
   * @param {String} title - passes in a string whihc is set in the main
   */
  constructor(title)
  {
    this.gameover = true;
    this.gameoverscreen = new HighScoreScene();
    this.timer = new Timer();
    this.goal = new Goal();
    gameNs.previousTime = Date.now();	// previousTime is initially 0
    this.title = title;
    this.img=new Image();
    this.img.src = "img/player.png";
    this.img1 = new Image();
    this.img1.src = "img/flag.png"
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    this.player;
    this.player = new Player(ctx, {
    width: 78 * 0.8,
    height: 108 * 0.8,
    image: this.img
      }, 10, 100);
    this.flag;
    this.flag = new Flag(ctx,{
      width:101,
      height: 312,
      image: this.img1
    },10);



    this.level = new LevelLoader();
    this.canvas = document.getElementById('mycanvas');
    this.ctx = canvas.getContext('2d');
    this.ctx.scale(1,1);
    //gameNs.previousTime = Date.now();	// previousTime is initially 0
  }
  update()
  {

    var now = Date.now();
    var deltaTime = (now - gameNs.previousTime);
    gameNs.previousTime = now;	// previousTime is initially 0

  //  var canvas = document.getElementById('mycanvas');
    //var ctx = canvas.getContext('2d');
    //ctx.scale(0.5,0.5);
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.save();
    console.log("Canvas",canvas.width / 2);
    console.log("Pos",this.player.x);
    if(this.player.x > (canvas.width / 2 ))
    {
      if(this.player.x  > (24*60)- (canvas.width / 2))
      {
        ctx.translate(-((24*60)- (canvas.width )), 0);
      }
      else {
        ctx.translate(-this.player.x + (canvas.width / 2), 0);
      }
    }
     if (this.player.y + 25 > (canvas.height / 2) )
    {
      if(this.player.y +25 > (14 * 60) - (canvas.height / 2))
      {
        ctx.translate(0, -((14*60)- (canvas.height)));
      }
      else {
          ctx.translate(0, -(this.player.y + 25) + (canvas.height / 2));
      }

    }
  //  if( this.player.y > canvas.height/2 &&this.player.y < (14 * 60) - canvas.height/ 2)

    this.level.update();
    this.goal.update();
    this.player.breakWall(this.level);
    this.player.moveWall(this.level);
    if(this.player.direction === 1)
    {
      this.player.update(deltaTime, this.level);
      this.flag.update(deltaTime);
    }
    else {

      this.flag.update(deltaTime);
      this.player.update(deltaTime, this.level);

    }

    this.player.checkCollision(this.flag);
    this.goal.checkCollision(this.flag);


    if(this.gameover == true)
    {
      this.gameoverscreen.getScoreTable();
      this.gameoverscreen.render();

    }

    this.timer.update(deltaTime);



    this.ctx.restore();

  }
  /**
   * render function which will overwrite the one inherited by scene
   * it defines a font and its size along with the background colour
   */
  render()
  {

   var canvas = document.createElement("mycanvas");
   var ctx = mycanvas.getContext("2d");
   document.body.style.background = "#ffffff";

    ctx.fillText(this.title, 10, 50);



  }


}
