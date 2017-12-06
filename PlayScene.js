class PlayScene
{
  /**
   * Constructor function , creates a scene with parameters which are passed in on construction
   * @param {String} title - passes in a string whihc is set in the main
   */
  constructor(title)
  {
    this.timer = new Timer();
    this.goal = new Goal();
    gameNs.previousTime = Date.now();	// previousTime is initially 0
    this.title = title;
    this.img=new Image();
    this.img.src = "assets/Player.png";
    this.img1 = new Image();
    this.img1.src = "assets/flag.png"
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    this.player;
    this.player = new Player(ctx, {
    width: 78,
    height: 108,
    image: this.img
      }, 10, 100);
    this.flag;
    this.flag = new Flag(ctx,{
      width:101,
      height: 312,
      image: this.img1
    },10);



    this.level = new LevelLoader();
    //gameNs.previousTime = Date.now();	// previousTime is initially 0
  }
  update()
  {
    var now = Date.now();
    var deltaTime = (now - gameNs.previousTime);
    gameNs.previousTime = now;	// previousTime is initially 0
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);
    this.level.update();
    this.goal.update();
    if(this.player.direction === 1)
    {
      this.player.update(deltaTime);
      this.flag.update(deltaTime);
    }
    else {

      this.flag.update(deltaTime);
      this.player.update(deltaTime);

    }

    this.player.checkCollision(this.flag);
    this.goal.checkCollision(this.flag);
    this.timer.update(deltaTime);



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
