class Winner
{
  constructor(title)
  {
    this.title = title;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  update()
 {
   var canvas = document.getElementById('mycanvas');
   var ctx = canvas.getContext('2d');
 }

 createDiv(divId)
 {
   var div = document.createElement("div");
   div.id = divId;
   if(div.id ==="PlayAgain")
   {
     div.innerHTML = "<img src=\'Assets/Mute.png\'>";
     this.div = div;
     //var d = document.getElementById('yourDivId');
     div.style.visibility = "visible";
     div.style.position = "absolute";
     div.style.left = (this.width/ 2) - 100 +"px";
     div.style.top = (this.height/ 8) + 80 +'px';
   }

   if(div.id ==="Quit")
   {
     div.innerHTML = "<img src=\'Assets/Mute.png\'>";
     this.div = div;
     //var d = document.getElementById('yourDivId');
     div.style.visibility = "visible";
     div.style.position = "absolute";
     div.style.left = (this.width/ 2) - 100 +"px";
     div.style.top = (this.height/ 8) + 80 +'px';
   }

    div.addEventListener("touchstart", this.onTouchStart,{passive:false});
    document.body.appendChild(div);
 }

 onTouchStart(e)
 {

   e.preventDefault();
   gameNs.counter = 0;

   var currentElement = e.target;
   var parentDiv = currentElement.parentNode;
   var parentDiv = currentElement.parentNode;
   var fullPath = currentElement.src;

   if (fullPath !== undefined)
   {

     var index = fullPath.lastIndexOf("/");
     var filename = fullPath;
     if(index !== -1)
     {
       //this.count+=1;


        filename = fullPath.substring(index+1,fullPath.length);
        console.log(filename);
        if(filename === "PlayAgain.png")
        {
              var div = document.getElementById("PlayAgain");
              div.innerHTML = "<img src=\'Assets/Muted.png\'>";
              gameNs.sceneManager.goToScene(gameNs.playScene.title);
              var el = document.getElementById( 'PlayAgain' );
              el.parentNode.removeChild( el );
              var el = document.getElementById( 'Quit' );
              el.parentNode.removeChild( el );
          }
          if(filename === "Quit.png")
          {
            var div = document.getElementById("Quit");
            div.innerHTML = "<img src=\'Assets/Mute.png\'>";
            gameNs.sceneManager.goToScene(gameNs.menuScene.title);
            var el = document.getElementById( 'PlayAgain' );
            el.parentNode.removeChild( el );
            var el = document.getElementById( 'Quit' );
            el.parentNode.removeChild( el );
          }
        }
      }
    }



}
