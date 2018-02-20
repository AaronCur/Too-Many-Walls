class PlayScene
{
  /**
   * Constructor function , creates a scene with parameters which are passed in on construction
   * @param {String} title - passes in a string whihc is set in the main
   */
  constructor(title)
  {
    this.gameover = false;
    this.updateGoalFlag = false;
    this.gameoverscreen = new HighScoreScene();
    gameNs.winnerscreen = new Winner('Winner');
    this.timer = new Timer();
    this.level = new LevelLoader();
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

    this.player = new Player(ctx, {
    width: 78 * 0.8,
    height: 108 * 0.8,
    image: this.img
  }, 10, 100, 50);
    this.otherPlayer = new Player(ctx, {
    width: 78 * 0.8,
    height: 108 * 0.8,
    image: this.img
  }, 10, -100, -200);

  this.goal = new Goal();
  this.flag = new Flag(ctx,{
    width:101,
    height: 312,
    image: this.img1
  },10);

    this.ready = false;

    this.canvas = document.getElementById('mycanvas');
    this.ctx = canvas.getContext('2d');
    this.ctx.scale(1,1);
    //gameNs.previousTime = Date.now();	// previousTime is initially 0



    this.initWorld();

    gameNs.soundManager = new SoundManager()
    gameNs.soundManager.init()
    gameNs.soundManager.loadSoundFile("Goal", "img/audio/goal.mp3")
    gameNs.soundManager.loadSoundFile("flagPlayer", "img/audio/swoosh.mp3")
    gameNs.soundManager.loadSoundFile("playerWall", "img/audio/drop.mp3")
    gameNs.soundManager.loadSoundFile("breakWall", "img/audio/rocks.mp3")
    gameNs.soundManager.loadSoundFile("backGround", "img/audio/background.mp3")

  }
  initWorld() //prints out “Initialising game world”
  {
    console.log("Initialising game world");
      var joinButton = document.getElementById("join");
      joinButton.addEventListener("click", this.join);
      var gameOverButton = document.getElementById("GameOver");
      //gameOverButton.addEventListener("click", this.gameover);
      gameNs.ws.addEventListener('message', this.handleMessage);

  }
  handleMessage(evt)
  {
    var msg = JSON.parse(evt.data);
    if(msg.type === 'updateState')
    {
      if(msg.player !== undefined)
      {
         gameNs.playScene.otherPlayer.updateFromNet(msg.player.x,msg.player.y, msg.player.moveX, msg.player.moveY, msg.player.direction)
      }


       if (msg.maze !== undefined)
       {
          gameNs.playScene.level.updateFromNet(msg.maze.index, msg.maze.containsWall,msg.maze.breakWall,msg.mazemoveWall)
       }
       if(msg.mazeMove!== undefined)
       {
         gameNs.playScene.level.updateFromNetMove(msg.mazeMove.index1, msg.mazeMove.index2, msg.mazeMove.containsWall,msg.mazeMove.breakWall,msg.mazeMove.moveWall1,msg.mazeMove.moveWall2)
       }

       if(msg.time!== undefined)
       {
         gameNs.playScene.timer.updateFromNet(msg.time.time,msg.time.start)
       }


    }
//    else if(msg.type === "updateState")
  //  {
      if(msg.goal!== undefined)
      {
         gameNs.playScene.goal.updateFromNet(msg.goal.x,msg.goal.y)
      }
      if(msg.flag!== undefined)
      {
        gameNs.playScene.flag.updateFromNet(msg.flag.x,msg.flag.y);
      }
  //  }
    else if(msg.type === "error")
    {
      alert(msg.data)
    }
    else if(msg.type === "join")
    {
        gameNs.game.ready = true;
        var canvas = document.getElementById('mycanvas');
        var ctx = canvas.getContext('2d');
        //gameNs.game.update();
      if(msg.data >= 2)
      {
        gameNs.playScene.player.setPosition();
        gameNs.playScene.goal.respawn();
        gameNs.playScene.flag.respawn();
        gameNs.timerStart = true;
        var message = {};
        message.type = "updateState";
        gameNs.start = Date.now();
        message.time = {time:gameNs.timerStart, start: gameNs.start};
        if(gameNs.game.ws.readyState === gameNs.game.ws.OPEN)
        {
          gameNs.ws.send(JSON.stringify(message));
        }
      }

    }
    else if(msg.type === "GameOver")
    {
      alert(msg.data)
    }
  }
  join()
  {
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    var message={}
    message.type = "join"
    if(gameNs.ws.readyState === gameNs.ws.OPEN)
    {
      gameNs.ws.send(JSON.stringify(message));

    }
    console.log(message);

  }
  gameover()
  {
    var message={}
    message.type = "GameOver"
    if(gameNs.ws.readyState === gameNs.ws.OPEN)
    {
      gameNs.ws.send(JSON.stringify(message));
    }
    console.log(message);

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
    //  this.otherPlayer.breakWall(this.level);
    //  this.otherPlayer.moveWall(this.level);
    }
    this.level.update();
    this.timer.update(deltaTime);
    this.goal.update();

    if(this.player.direction === 1)
    {
      this.player.update(deltaTime, this.level);
      this.otherPlayer.update(deltaTime, this.level);
      this.flag.update(deltaTime);
    }
    else {

      this.flag.update(deltaTime);
      this.player.update(deltaTime, this.level);
      this.otherPlayer.update(deltaTime, this.level);

    }


      this.player.checkCollision(this.flag);
      this.goal.checkCollision(this.flag);

    if(this.gameover == true)
    {
      ctx.translate(0, 0);
      this.gameoverscreen.getScoreTable();
      this.gameoverscreen.render();
    }

    this.ctx.restore();

    var message = {};
    message.type = "updateState";
    message.player = {x:this.player.x, y:this.player.y, moveX:this.player.moveX, moveY:this.player.moveY, direction:this.player.direction};
    if(gameNs.game.ws.readyState === gameNs.game.ws.OPEN)
    {
      gameNs.ws.send(JSON.stringify(message));
    }
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
