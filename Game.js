var gameNs = {};
class Game
{
  /**
  *helper funtion that constructs game setting up each of the animated sprites
  *can also set ptoperties of the sprite objects, width, height, image, its y position and fps
  */
  constructor()
  {
    this.img=new Image();
    this.img.src = "Images/PlayerSS.png";
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    gameNs.mySpriteObject;
    gameNs.mySpriteObject = new Sprite(ctx, {
    width: 100,
    height: 222,
    image: this.img
    }, 100, 100);

  gameNs.mySpriteObject1 = new Sprite(ctx, {
    width: 100,
    height: 222,
    image: this.img
    }, 25, 300);

  }
  /**
  *helper funtion that records the time when the application is loaded
  */
  initWorld() //prints out “Initialising game world”
  {
    console.log("Initialising game world");
      gameNs.previousTime = Date.now();	// previousTime is initially 0

  }
  /**
  *Update function called every frame. sets the current time when the function is called
  * calls updates for each sprite object and clears the screen
  */
  update()
  {
    var now = Date.now();
    var deltaTime = (now - gameNs.previousTime);
    gameNs.previousTime = now;	// previousTime is initially 0
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);
    gameNs.mySpriteObject.update(deltaTime);
    gameNs.mySpriteObject1.update(deltaTime);

    window.requestAnimationFrame(gameNs.game.update);
  }

  draw()
  {

    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);

  }

}
