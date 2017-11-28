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
function keyDownHandler(e)
{
	//code triggered when left arrow is pressed
	if(e.keyCode === 37)
	{
		gameNs.playScene.player.moveX = false;
    console.log("Left");
	}
  else if(e.keyCode === 39)
	{
		gameNs.playScene.player.moveX = true;
	}
  else
  {
    gameNs.playScene.player.moveX = null;
  }

//code triggered when UP arrow is pressed
	if(e.keyCode === 38)
	{
		gameNs.playScene.player.moveY = false;
	}
  else if(e.keyCode === 40)
	{
		gameNs.playScene.player.moveY = true;
	}
  else
  {
    gameNs.playScene.player.moveY = null;
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
 window.addEventListener("keydown", function(e) {
     // Space and arrow keys
     if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
         e.preventDefault();
     }
 }, false);

 /**
  * Helper function that clamps value between min and max and returns value.
  * Example: clamp(10, 1, 3) will return 3
  * @param {Integer} value integer value to be clamped.
  * @param {Integer} min lower range value.
  * @param {Integer} max upper range value.
 * @return {Integer} min if value is less than min, max if max is less than value, otherwise value.
  */
 function clamp(value,min,max)
 {
 	if(max<min) {
 		var temp = min;
 		min = max;
 		max = temp;
 	}
 	return Math.max(min, Math.min(value, max));
 }
 /**
  * Helper function that returns a string of the form 'rgb(r,g,b)' where
  * r,g and b are numeric values.
  * @param {Number} r assumed numeric value for red.
  * @param {Number} g assumed numeric value for green.
  * @param {Number} b assumed numeric value for blue.
 * @return {String} a string of the form 'rgb(r,g,b)' where r,g and b are integers clamped between 0 and 255.
  */

 function rgb(r, g, b)
 {
 	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
 }
/*
*helper function that draws background and font to screen
*/
function draw(game)
{
  game.draw();


}
