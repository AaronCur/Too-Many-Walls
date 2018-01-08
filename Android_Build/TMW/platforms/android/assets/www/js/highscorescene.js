class HighScoreScene
{
  /**
   * Constructor function , creates a scene with parameters which are passed in on construction
   * @param {String} title - passes in a string whihc is set in the main
   */
  constructor(title)
  {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.img = new Image();
    this.bgimg = new Image();
    this.bgimg.src ="img/gameoverbg.png"
    this.img.src = "img/table.png";
    this.title = title;
    this.leaderboard = {};
    this.ordered= {};
    this.reverseOrdered ={};
    this.positionArray =[];
    this.position = 0;
    this.posX;
    this.posY;
    this.findPos=0;
    this.score = 0;
    this.count = 0;

 /*ordered = reverse(ordered);

/*
    this.leaderboard

    this.highscorestable = {};



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
    //for (var i, var j in this.highscores) {
      //this.highscorestable[i] = j;
    console.log("HighScoretable :",this.highscores);
 this.playername = prompt("Please enter your name","Aaron");
        this.highscores[this.playername] = 100;

console.log("HighScoretable :",this.highscores);

localStorage.setItem('Leaderboard', JSON.stringify(this.highscores));
this.highscores2 = {};
this.highscores2 = JSON.parse(localStorage.getItem('Leaderboard'));
console.log('Table 2:',this.highscores2);


});
this.request.open("GET", "http://192.168.1.12:8000/leaderboard.json");
this.request.send();
*/
  }
  getScoreTable()
  {

    //to reset the local storage


//if((localStorage.getItem('Leaderboard') == null)
//{
  //localStorage.setItem('Leaderboard', JSON.stringify(this.leaderboard));
//}
  //  localStorage.setItem('Leaderboard', JSON.stringify(this.leaderboard));
    this.leaderboard = JSON.parse(localStorage.getItem('Leaderboard'));

  //  this.playername = prompt("Please enter your name","Aaron");
  if(this.count < 1)
  {
    while(this.playername==null)
    {
      this.playername = prompt("Please enter your name","");
    }

    this.leaderboard[Math.round(gameNs.playerscore/1000)] = this.playername;
    console.log(this.leaderboard)
    this.findPos=Math.round(gameNs.playerscore/1000);




    localStorage.setItem('Leaderboard', JSON.stringify(this.leaderboard));
  //  console.log(leaderboard.reverse());
   var that = this;
    Object.keys(that.leaderboard).sort().forEach(function(key){

        that.ordered[key] = that.leaderboard[key];
        that.positionArray.push(key.toString());



    });
    this.positionArray= this.positionArray.sort();
    this.count = this.count +1;
    console.log()
  }


    var keyValue = [];
    var value = [];
    this.reverseForIn(this.leaderboard, function(key){keyValue.push(key),value.push(this[key]) });
    this.keyValue = keyValue;
    this.value = value;
    this.keyValue = keyValue.reverse();

  //  console.log(this.reverseOrdered);


  }

  update()
  {

  }
  /**
   * render function which will overwrite the one inherited by scene
   * it defines a font and its size along with the background colour
   */
  reverseForIn(obj, f) {
     var arr = [];
     for (var key in obj) {
       // add hasOwnPropertyCheck if needed
       arr.push(key);
     }
     for (var i=arr.length-1; i>=0; i--) {
       f.call(obj, arr[i]);
     }
   }

  render()
  {

    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    var imagebg = this.bgimg;
    var image = this.img;
  //  document.body.style.background = "#ffffff";
    //ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);

    ctx.drawImage(imagebg, 0 , 0,this.windowWidth, this.windowHeight ,0,0, this.windowWidth ,this.windowHeight);
    ctx.drawImage(image, 0 , 0,918, 761 ,this.windowWidth/3.7,this.windowHeight/7, 918 ,761);



    var y = 1;
    var i = 1;
    var j = 0;
    //Output for order lowest to highest



    this.position = this.keyValue.indexOf(this.findPos.toString());
      console.log(this.position);
      if(j <= 1)
      {


        this.position = this.position + 1;
      }

    //  console.log("positionText"+this.positionArray);

      for (var key in this.leaderboard) {
      // check if the property/key is defined in the object itself, not in parent

      if (this.ordered.hasOwnProperty(key) && j < 7 ) {
        var positionText = "You placed "+ this.position +" out of "+this.positionArray.length;
        var stringName = (this.ordered)[key];
        this.diff = this.duration - (((Date.now() - gameNs.start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        this.minutes = (key/ 60) | 0;
        this.seconds = (key % 60) | 0;

        this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
        var stringScore = (this.minutes+":"+this.seconds);
        var positionText = "You placed "+ this.position +" out of "+this.keyValue.length;


        i = i+1;
        ctx.fillStyle ='black';
        ctx.font = '50px Adventure Regular';
        ctx.fillText(positionText, this.windowWidth/7*2, this.windowHeight/8);
        ctx.font = '40px Adventure Regular';
        ctx.fillText(stringName, this.windowWidth/3, (51 * y) + this.windowHeight/4.8);
        ctx.fillText(stringScore, this.windowWidth/7 * 4.2, (51* y) + this.windowHeight/4.8);
        y=y+1;
        j=j+1;
      }

      ctx.fillText("Press Back to return to the menu  <-", this.windowWidth/7 * 1.7, this.windowHeight/6 * 5.8);
}
//output highest to lowest

/*
  for(var x = 0; x < this.value.length && x < 7; x++)
  {
    var positionText = "You placed "+ this.position +" out of "+this.keyValue.length;
    var stringName = this.value[x];
    this.diff = this.duration - (((Date.now() - gameNs.start) / 1000) | 0);

    // does the same job as parseInt truncates the float
    this.minutes = (this.keyValue[x] / 60) | 0;
    this.seconds = (this.keyValue[x] % 60) | 0;

    this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
    console.log("Minutes: "+ this.minutes);
    console.log("Seconds: "+ this.seconds);
    var stringScore = (this.minutes+":"+this.seconds);
    //var stringScore = (this.keyValue[x]);
    ctx.fillStyle ='black';
    ctx.font = '50px Adventure Regular';
    ctx.fillText(positionText, this.windowWidth/7*2, this.windowHeight/8);
    ctx.font = '40px Adventure Regular';
    ctx.fillText(stringName, this.windowWidth/3, (50 * y) + this.windowHeight/5);
    ctx.fillText(stringScore, this.windowWidth/7 * 3.7, (50* y) + this.windowHeight/5);
    y=y+1;

  //}
  }

*/
}

}
