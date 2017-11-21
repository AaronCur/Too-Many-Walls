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
    this.createDiv("Test");

  }
   createDiv(divId)
  {
    var timer;
    var Counter = 0;

    var div = document.createElement("div");
    div.id = divId;
    if(div.id === "Test")
    {
      div.innerHTML = "<img src=\'Assets/Shaq.jpg\'>";
      this.div = div;
    }
    div.addEventListener("touchstart", this.onTouchStart,{passive:false});
    document.body.appendChild(div);

  }
  onTouchStart(e)
  {
  //  gameNs.sceneManager.goToScene(gameNs.optionsScene.title);
    e.preventDefault();
    var currentElement = e.target;
  	var parentDiv = currentElement.parentNode;
    console.log("Div id = " + parentDiv.id);
    console.log("Image URL = " + currentElement.src);

    var parentDiv = currentElement.parentNode;
    var fullPath = currentElement.src;
    console.log("Current element" + fullPath);

    //if (fullPath !== undefined)
    //{
    //  console.log(gameNs.count);
    	var index = fullPath.lastIndexOf("/");
    	var filename = fullPath;
    //	if(index !== -1)
    	//{
      //  gameNs.count += 1;

    	   filename = fullPath.substring(index+1,fullPath.length);
    	   if(filename === "Shaq.jpg" && gameNs.count <2)
         {
          // gameNs.soundManager.playSound("Concentrate", false, 1);
          // gameNs.sceneManager.goToScene(this.optionsScene.title);
          console.log("clicked");

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
