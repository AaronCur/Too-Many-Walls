class TutorialScene
{
  /**
   * Constructor function , creates a scene with parameters which are passed in on construction
   * @param {String} title - passes in a string whihc is set in the main
   */
  constructor(title)
  {
    this.start;
    this.tutorialtext = "";
    gameNs.swipe = false;
    this.flagCapture = false;
    this.goalTut = false;
    this.breakwalltut = false;
    this.movewalltut = false;
    this.tutorialover = false;
    this.gameover = false;
    this.gameoverscreen = new HighScoreScene();
    gameNs.winnerscreen = new Winner('Winner');
    this.timer = new Timer();
    this.goal = new Goal();
    this.posX = 0;
    this.posY = 0;
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


    gameNs.tutorialcount = 0;

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
    console.log("Pos",this.player.y);
    if(this.gameover == false)
    {
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
      this.player.breakWall(this.level);
      this.player.moveWall(this.level);
    }
    this.level.update();
    this.timer.update(deltaTime);
    this.goal.update();

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

    if(gameNs.tutorialScene.player.x > 516 )
    {
      if(  gameNs.tutorialScene.player.x > 989 )
      {
        this.posX = 989-350;
      }
      else {
        this.posX = gameNs.tutorialScene.player.x - 350;
      }

    }
    //else {
      //  ctx.fillText('Timer '+this.minutes+':'+this.seconds, 516 - 350 , 50);
  //  }
    if(gameNs.tutorialScene.player.y > 236 )
    {
        if(gameNs.tutorialScene.player.y > 572)
        {
            //ctx.fillText('Timer '+this.minutes+':'+this.seconds,516 - 350,572 - 186);
            this.posY = 572 - 186
        }
        else {
          this.posY = gameNs.tutorialScene.player.y - 186

        }
    }

    switch (gameNs.tutorialcount) {
    case 0:
    if(gameNs.swipe == false)
    {
      this.tutorialtext = "Swipe/Arrows to move";
    }
    else {
      gameNs.tutorialcount = 1;
    }
        break;
    case 1:
//if(this.)
        if(gameNs.swipe == true && this.flagCapture == false)
        {
          this.tutorialtext = "Find the flag!";
        }

        break;
    case 2:

        if(this.goalTut == false && gameNs.swipe == true)
        {
          this.flagCapture = true;
          this.tutorialtext = "Bring flag to goal";
        }
        break;
    case 3:
        if(this.breakwalltut == false&& this.flagCapture == true)
        {
          this.goalTut = true;
          this.tutorialtext = "Walk through weak walls";
        }
        break;
    case 4:

        if(this.movewalltut == false && this.goalTut==true)
        {

          this.breakwalltut = true;
          this.tutorialtext = "Crates can be moved"
        }
        break;
    case 5:
        if(this.breakwalltut == true & this.tutorialover == false)
        {
          this.movewalltut = true;
          this.tutorialtext = "Press back to return to menu"
        }
    }
    ctx.strokeStyle="	#000000";
    ctx.fillStyle ='yellow';
    ctx.font = '50px Adventure Regular';
    ctx.fillText(this.tutorialtext, gameNs.tutorialScene.player.x - 60, gameNs.tutorialScene.player.y - 30);



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





  }


}
