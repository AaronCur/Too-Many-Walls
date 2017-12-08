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
    this.posiiton = 0;
    this.score = 0;

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
    //localStorage.setItem('Leaderboard', JSON.stringify(this.leaderboard));
    this.leaderboard = JSON.parse(localStorage.getItem('Leaderboard'));
    console.log(this.leaderboard)
  //  this.playername = prompt("Please enter your name","Aaron");


    if(typeof this.playername === 'string' || this.playername instanceof String)
    {
      //this.score = prompt("Please enter your score","0");
    //  this.leaderboard[this.score] = this.playername;
    }
    else {
      //this.playername = prompt("Please enter your name","Aaron");
    }

    localStorage.setItem('Leaderboard', JSON.stringify(this.leaderboard));
  //  console.log(leaderboard.reverse());
  //var that = this;
    //Object.keys(that.leaderboard).sort().forEach(function(key){
    //  tha.ordered[key] = that.leaderboard[key];
    //});


    var keyValue = [];
    var value = [];
    this.reverseForIn(this.leaderboard, function(key){keyValue.push(key),value.push(this[key]) });
    this.keyValue = keyValue;
    this.value = value;

    console.log(this.reverseOrdered);


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
    ctx.drawImage(imagebg, 0 , 0,1920, 1080 ,0,0, 1920 ,1080);
    ctx.drawImage(image, 0 , 0,918, 761 ,this.windowWidth/3.7,this.windowHeight/7, 918 ,761);


    var y = 1;
    var i = 1;
    var j = 0;
    //Output for order lowest to highest
    /*
    for(var j = 0; j < 7; j++)
    {
      for (var key in this.reverseOrdered) {
      // check if the property/key is defined in the object itself, not in parent

      if (this.reverseOrdered.hasOwnProperty(key) && j < Object.keys(this.reverseOrdered).length ) {
        var stringName = i + ":" +" " + key;
        var stringScore = (this.reverseOrdered)[key];
        i = i+1;
        ctx.fillText(stringName, 30, 50 * y);
        ctx.fillText(stringScore, 400, 50*y);
        y=y+1;
        j=j+1;
      }
    }
}*/
//output highest to lowest
  this.position = this.keyValue.indexOf(this.score);
  this.position = this.position + 1;
  for(var x = 0; x < this.value.length && x < 7; x++)
  {
    var positionText = "You placed "+ this.position +" out of "+this.keyValue.length;
    var stringName = this.value[x];
    var stringScore = this.keyValue[x];
    ctx.font = '75px Adventure Regular';
    ctx.fillText(positionText, this.windowWidth/7*2.2, this.windowHeight/8);
    ctx.font = '60px Adventure Regular';
    ctx.fillText(stringName, this.windowWidth/2.9, (96 * y) + this.windowHeight/5);
    ctx.fillText(stringScore, this.windowWidth/7 * 4.4, (96 * y) + this.windowHeight/5);
    y=y+1;

  }
  }




}
