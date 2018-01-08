class Scene
{
  /**
   * Constructor function , creates a scene with parameters which are passed in on construction
   * @param {String} title -passes in the string which is defined in the main
   */
  constructor(title)
  {
    this.title = title;
  }

  start()
  {

  }

  stop()
  {

  }
  /**
   * render function which will be inherited by the MenuScreen object.
   * it defines a font and its size along with the background colour
   */
  render()
  {
    var canvas = document.createElement("mycanvas");
    var ctx = mycanvas.getContext("2d");
    document.body.style.background = "#00ff00 ";
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    ctx.font = '48px serif';
    ctx.fillText(this.title, 10, 50);

  }
}
