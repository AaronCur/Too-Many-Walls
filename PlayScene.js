class PlayScene
{
  /**
   * Constructor function , creates a scene with parameters which are passed in on construction
   * @param {String} title - passes in a string whihc is set in the main
   */
  constructor(title)
  {
    gameNs.previousTime = Date.now();	// previousTime is initially 0
    this.title = title;
    this.img=new Image();
    this.img.src = "assets/Player.png";
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    this.player;
    this.player = new Player(ctx, {
    width: 78,
    height: 108,
    image: this.img
  }, 10, 100);

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
    this.player.update(deltaTime);


  }
  /**
   * render function which will overwrite the one inherited by scene
   * it defines a font and its size along with the background colour
   */
  render()
  {

   var canvas = document.createElement("mycanvas");
   var ctx = mycanvas.getContext("2d");
    //ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
   document.body.style.background = "#ffffff";
    ctx.font = '50px Arial';
    ctx.fillText(this.title, 10, 50);

  //  this.player.draw();

  }


}
