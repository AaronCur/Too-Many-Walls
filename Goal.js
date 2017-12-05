class Goal
{

  constructor()
  {
    this.x= (Math.random()*window.innerWidth)-100;
    this.y= (Math.random()*window.innerHeight)-100;
    this.width=150;
    this.height=150;
    var alive = true;
    this.alive=alive;
  }

  draw()
  {
    if(this.alive === true)
    {
      var canvas = document.getElementById('mycanvas');
      var ctx = canvas.getContext('2d');

      ctx.strokeRect(this.x,this.y,this.width,this.height);

    }

  }

}
