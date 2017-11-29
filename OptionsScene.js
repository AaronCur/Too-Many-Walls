class OptionsScene
{
  /**
   * Constructor function , creates a scene with parameters which are passed in on construction
   * @param {String} title - passes in a string whihc is set in the main
   */
  constructor(title)
  {
    this.title = title;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    var div1 =this.createDiv("Mute");
    this.createDiv("VolumeDown");
    this.createDiv("VolumeUp");
    this.createDiv("Back")

  }
  update()
 {

 }

  createDiv(divId)
 {

   var timer;
   var Counter = 0;

   var div1 = document.createElement("div");
   div.id = divId;
   if(div.id ==="Mute")
   {
     console.log("Mute button created");
     div1.innerHTML = "<img src=\'Assets/Mute.png\'>";
     this.div = div;
     //var d = document.getElementById('yourDivId');
     div1.style.visibility = "hidden";
     div1.style.position = "absolute";
     div1.style.left = (this.width/ 2) - 100 +"px";
     div1.style.top = (this.height/ 8) + 80 +'px';
   }
   else if(div.id ==="VolumeDown")
   {
     console.log("VolumeDown button created");
     div.innerHTML = "<img src=\'Assets/VolumeDown.png\'>";
     this.div = div;

     div.style.position = "absolute";
     div.style.left = (this.width/ 2) - 300 +"px";
     div.style.top = (this.height/ 8) * 3.5 + 80 +'px';
   }
   else if(div.id ==="VolumeUp")
   {
     console.log("VolumeUp button created");
     div.innerHTML = "<img src=\'Assets/VolumeUp.png\'>";
     this.div = div;

     div.style.position = "absolute";
     div.style.left = (this.width/ 2) + 300 +"px";
     div.style.top = (this.height/8) * 3 + 80 +'px';
   }
   else if(div.id==="Back")
   {
     console.log("Back button created");
     div.innerHTML = "<img src=\'Assets/Back.png\'>";
     this.div = div;

     div.style.position = "absolute";
     div.style.left = (this.width/ 2) - 500 +"px";
     div.style.top = (this.height/8) - 200 +'px';
   }

   div.addEventListener("touchstart", this.onTouchStart,{passive:false});
   document.body.appendChild(div);

 }

 onTouchStart(e)
 {

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
        if(filename === "Mute.png")
        {
         // gameNs.soundManager.playSound("Concentrate", false, 1);
        //  gameNs.sceneManager.goToScene(gameNs.playScene.title);


        }
        else if (filename === "VolumeDown.png" )
        {
         // gameNs.soundManager.playSound("Concentrate", true, 0.2);
          //gameNs.sceneManager.goToScene(gameNs.optionsScene.title);
        }
        else if (filename === "VolumeUp.png" )
        {
          //throw new Error("Something went badly wrong!");
         // div.style.background = "Teal";
          //gameNs.soundManager.Stop();
          //gameNs.count = 0;
     //   gameNs.sceneManager.goToScene(gameNs.optionsScene.title);

        }

        else if (filename === "Back.png" )
        {
         // gameNs.soundManager.playSound("Concentrate", true, 0.2);
          gameNs.sceneManager.goToScene(gameNs.menuScene.title);
          var el = document.getElementById( 'Back' );
          el.parentNode.removeChild( el );
        }


     }
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
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    document.body.style.background = "#FFFACD";
    ctx.font = '55px Adventure Regular';
    ctx.fillText(this.title, this.width/2 - 170, 70);

  }


}
