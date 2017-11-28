/**
 * @fileoverview
 * @author Aaron Curry
 */
//

var gameNs = {};

function main()
{
  initCanvas();
  var game = new Game();
  gameNs.game = game;
  game.initWorld();
  game.update();
  game.draw();

  //document.addEventListener("click", clickHandler.bind(null, sceneManager));

}

onTouchStart(e)
{

  //gameNs.sceneManager.goToScene(gameNs.optionsScene.title);

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
       console.log(filename);
       if(filename === "PlayButton.png")
       {
        // gameNs.soundManager.playSound("Concentrate", false, 1);
         gameNs.sceneManager.goToScene(gameNs.playScene.title);


       }
       else if (filename === "OptionsButton.png" )
       {
        // gameNs.soundManager.playSound("Concentrate", true, 0.2);
         gameNs.sceneManager.goToScene(gameNs.optionsScene.title);
       }
       else if (filename === "ExitButton.png" )
       {
         //throw new Error("Something went badly wrong!");
        // div.style.background = "Teal";
         //gameNs.soundManager.Stop();
         //gameNs.count = 0;
    //   gameNs.sceneManager.goToScene(gameNs.optionsScene.title);

       }

       var el = document.getElementById( 'Play' );
       el.parentNode.removeChild( el );
       var el = document.getElementById( 'Options' );
       el.parentNode.removeChild( el );
       var el = document.getElementById( 'Exit' );
       el.parentNode.removeChild( el );
    }
  }
}

/**
 * Initialises the canvas - the drawing surface. The canvas
 * is added to the document. When a HTML document is loaded into a
 * browser, it becomes a document object. This document object is
 * the root node of the HTML document and is considered the 'owner' of all other
 * nodes such as forms, buttons, the canvas etc.
 */
 function initCanvas()
 {
   document.addEventListener("keydown", this.keyDownHandler, true);
 	//Use the document object to create a new element canvas.
 	var canvas = document.createElement("canvas");
 	//Assign the canvas an id so we can reference it elsewhere.
 	canvas.id = 'mycanvas';
 	canvas.width = window.innerWidth;
 	canvas.height = window.innerHeight;
 	//We want this to be a 2D canvas.
 	var ctx = canvas.getContext("2D");
 	//Adds the canvas element to the document.
 	document.body.appendChild(canvas);
 }
function draw(game)
{
  game.draw();


}
