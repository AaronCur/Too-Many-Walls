/**
 * MenuScene class inherits Scene
 *
 */
class MenuScene
{
  /**
   * Constructor function , creates a scene with parameters which are passed in on construction
   * @param {String} title - passes in a string whihc is set in the main
   */
  constructor(title)
  {
    this.title = title;
    this.createDiv("Play");
    this.createDiv("Options");
    this.createDiv("Exit");

  }
   createDiv(divId)
  {
    var timer;
    var Counter = 0;

    var div = document.createElement("div");
    div.id = divId;
    if(div.id === "Play")
    {
      div.innerHTML = "<img src=\'Assets/Button.jpg\'>";
      this.div = div;
      //var d = document.getElementById('yourDivId');
      div.style.position = "absolute";
      div.style.left = 100 +'px';
      div.style.top = 20 +'px';
    }
    else if(div.id === "Options")
    {
      div.innerHTML = "<img src=\'Assets/Button.jpg\'>";
      this.div = div;
    }
    else if(div.id === "Exit")
    {
      div.innerHTML = "<img src=\'Assets/Button.jpg\'>";
      this.div = div;
    }
    div.addEventListener("touchstart", this.onTouchStart,{passive:false});
    document.body.appendChild(div);

  }
  onTouchStart(e)
  {

    gameNs.sceneManager.goToScene(gameNs.optionsScene.title);
    var el = document.getElementById( 'Play' );
    el.parentNode.removeChild( el );
    var el = document.getElementById( 'Options' );
    el.parentNode.removeChild( el );
    var el = document.getElementById( 'Exit' );
    el.parentNode.removeChild( el );

    e.preventDefault();
    var currentElement = e.target;
    var parentDiv = currentElement.parentNode;
    console.log("Div id = " + parentDiv.id);
    console.log("Image URL = " + currentElement.src);

    var parentDiv = currentElement.parentNode;
    var fullPath = currentElement.src;
    console.log("Current element" + fullPath);

    if (fullPath !== undefined)
    {
      console.log(gameNs.count);
      var index = fullPath.lastIndexOf("/");
      var filename = fullPath;
      if(index !== -1)
      {
        gameNs.count += 1;

         filename = fullPath.substring(index+1,fullPath.length);
         if(filename === "Concentr.jpg" && gameNs.count <2)
         {
           gameNs.soundManager.playSound("Concentrate", false, 1);
           gameNs.sceneManager.goToScene(gameNs.optionsScene.title);


         }
         else if (filename === "Concentrate.jpg" && gameNs.count == 2)
         {
           gameNs.soundManager.playSound("Concentrate", true, 0.2);
           gameNs.sceneManager.goToScene(gameNs.optionsScene.title);

           div.style.background = "Red";
         }
         else if (filename === "Concentrate.jpg" && gameNs.count == 3)
         {
           div.style.background = "Teal";
           gameNs.soundManager.Stop();
           gameNs.count = 0;
           gameNs.sceneManager.goToScene(gameNs.optionsScene.title);

         }

        // var el = document.getElementById( 'Play' );
      //   el.parentNode.removeChild( el );
        // var el = document.getElementById( 'Options' );
        // el.parentNode.removeChild( el );
        /// var el = document.getElementById( 'Exit' );
        //el.parentNode.removeChild( el );
      }
    }
 }

  render()
  {

    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    document.body.style.background = "#ff0000";
    ctx.font = '55px Bell MT';
    ctx.fillText(this.title, 10, 50);

  }
}
