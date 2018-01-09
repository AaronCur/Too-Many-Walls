class TouchTest
{
  /**
  *constructor Function to creat instances of TouchTest
  *
  */
  constructor()
  {
  }

  /**
  *Helper function that detects whether a touch device is present
  *
  */
  is_touch_device()
  {
    return 'ontouchstart' in window;
  }
}
