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
