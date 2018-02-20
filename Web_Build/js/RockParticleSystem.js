class RockParticleSystem
{
  constructor(x, y)
  {
    console.log("game constructed")
    this.createPart = false;
    gameNs.particles = []

  }


  update(x,y)
  {
    var canvas = document.getElementById('mycanvas')
    var ctx = canvas.getContext('2d')


    if(gameNs.particles.length<20)
    {
        gameNs.particles.push(new RockParticle(x-10, y+50))
    }

    for(var i =0; i < gameNs.particles.length; i++)
    {
      gameNs.particles[i].run()
      if(gameNs.particles[i].lifespan <0.15)
      {
          gameNs.particles.splice(i,1)
      }

    }


  }

}
