class Particle
{
  constructor(locationX, locationY)
  {
    this.location = []
    this.location.x = locationX
    this.location.y = locationY
    this.velocity = []
    this.velocity.x =(Math.random()*1)*-1
    this.velocity.y =(Math.random()*1)*-1
    this.acceleration = []
    this.acceleration.x = 0
    this.acceleration.y = -0
    this.lifespan = 1

    this.img = new Image()
    this.img.src = "img/particle.png"
  }

  run()
  {
    this.update()
    this.render()
  }

  update()
  {
    this.velocity.x += this.acceleration.x
    this.velocity.y += this.acceleration.y
    this.location.x += this.velocity.x
    this.location.y += this.velocity.y

    this.lifespan -=0.05
  }

  render()
  {
    var canvas = document.getElementById('mycanvas')
    var ctx = canvas.getContext('2d')


    ctx.globalAlpha = this.lifespan
    var image = this.img
    ctx.drawImage(image, this.location.x,this.location.y)
  }

}
