var gameNs = {};
class Game
{
  /**
  *helper funtion that constructs game setting up each of the animated sprites
  *can also set ptoperties of the sprite objects, width, height, image, its y position and fps
  */
  constructor()
  {
    console.log("game constructed");
  }
  /**
  *helper funtion that records the time when the application is loaded
  */
  initWorld() //prints out “Initialising game world”
  {
    //this.touchTest = new TouchTest();
    gameNs.sceneManager = new SceneManager();
    this.scene = new Scene('Scene');
    gameNs.menuScene = new MenuScene('Too Many Walls');
    gameNs.playScene = new PlayScene('Play');
    gameNs.optionsScene = new OptionsScene('Options');
    //this.endScene = new EndScene('End');
    //this.highScoreScene = new HighScoreScene('HighScore');

    gameNs.sceneManager.addScene(gameNs.menuScene);
    gameNs.sceneManager.addScene(gameNs.playScene);
    gameNs.sceneManager.addScene(gameNs.optionsScene);
  //  sceneManager.addScene(endScene);
  //  sceneManager.addScene(highScoreScene);
    gameNs.sceneManager.goToScene(gameNs.menuScene.title);

  //  document.addEventListener("click", this.clickHandler.bind(null, gameNs.sceneManager));
    //draw(sceneManager);
  }
  /**
  *Update function called every frame. sets the current time when the function is called
  * calls updates for each sprite object and clears the screen
  */
  update()
  {
    window.requestAnimationFrame(gameNs.game.update);
    gameNs.sceneManager.update();
  }
//  clickHandler(sceneManager)
  //{
    //gameNs.sceneManager.goToNextScene();
  //  gameNs.sceneManager.render();
//  }
  draw()
  {
    window.requestAnimationFrame(gameNs.game.draw);
    gameNs.sceneManager.render();


  }

}
