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
    this.sceneManager = new SceneManager();
    this.scene = new Scene('Scene');
    this.menuScene = new MenuScene('Menu');
    this.playScene = new PlayScene('Play');
    this.optionsScene = new OptionsScene('Options');
    //this.endScene = new EndScene('End');
    //this.highScoreScene = new HighScoreScene('HighScore');

    this.sceneManager.addScene(this.menuScene);
    this.sceneManager.addScene(this.playScene);
    this.sceneManager.addScene(this.optionsScene);
  //  sceneManager.addScene(endScene);
  //  sceneManager.addScene(highScoreScene);
    this.sceneManager.goToScene(this.menuScene.title);

    document.addEventListener("click", this.clickHandler.bind(null, this.sceneManager));
    //draw(sceneManager);
  }
  /**
  *Update function called every frame. sets the current time when the function is called
  * calls updates for each sprite object and clears the screen
  */
  update()
  {

  }
  clickHandler(sceneManager)
  {
    sceneManager.goToNextScene();
    sceneManager.render();
  }
  draw()
  {
    this.sceneManager.render();

  }

}
