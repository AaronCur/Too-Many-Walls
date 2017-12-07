class HighScoreScene
{
  /**
   * Constructor function , creates a scene with parameters which are passed in on construction
   * @param {String} title - passes in a string whihc is set in the main
   */
  constructor(title)
  {
    this.title = title;
    this.highscores = {};
    this.highscorestable = {};
    var customerName = prompt("Please enter your name","Aaron");
    this.request = new XMLHttpRequest();

    var that = this;
    this.request.addEventListener("load", function requestListener(){
   //TADA! Now I have the class data.
   this.highscores = {};
   this.highscorestable = {};
    this.leaderboard = JSON.parse(this.responseText);
    this.highscores= this.leaderboard.leaderboard;
    //this.highscores.push({"score":100,"name":"steven"});
  //  console.log("Highscores :", that.highscores);
    for (var i in this.highscores) {
      this.highscorestable[i] = i;
    console.log("HighScoretable :",this.highscorestable);


}


});
this.request.open("GET", "http://192.168.1.12:8000/leaderboard.json");
this.request.send();
  }
  update()
  {

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
    document.body.style.background = "#ffffff";
    ctx.font = '50px Arial';
    ctx.fillText(this.title, 10, 50);

  }


}
