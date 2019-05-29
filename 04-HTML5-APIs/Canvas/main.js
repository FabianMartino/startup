window.onload = load;

/**
 * it give the canvas a black background and draw a random geometric shape with random colors
 */
function initCanvas() {
  let context = document.getElementById("geometricCanvas").getContext("2d");
  context.fillRect(0, 0, 400, 400);
  //create a random number for the shape
  let randomShape = Math.floor((Math.random() * 3) + 1);
  //create a random number for the color of the shape
  let randomColor = 'rgb(' + (Math.floor(Math.random() * 250)+6) + ',' + (Math.floor(Math.random() * 250)+6) + ',' + (Math.floor(Math.random() * 250)+6) + ')';
  //create a random number for the color of the stroke
  let randomStroke = 'rgb(' + (Math.floor(Math.random() * 250)+6) + ',' + (Math.floor(Math.random() * 250)+6) + ',' + (Math.floor(Math.random() * 250)+6) + ')';

  //define which shape is gonna be drawn
  if (randomShape == 1) {
      context.beginPath();
      context.rect(25, 50, 200, 100);
      context.fillStyle = randomColor;
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = randomStroke;
      context.stroke();
  } else if (randomShape == 2) {
      context.beginPath();
      context.arc(200, 200, 69, 0, 2 * Math.PI, false);
      context.fillStyle = randomColor;
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = randomStroke;
      context.stroke();
  } else if (randomShape == 3) {
      context.beginPath();
      context.arc(276, 255, 70, 0, Math.PI, false);
      context.closePath();
      context.lineWidth = 5;
      context.fillStyle = randomColor;
      context.fill();
      context.strokeStyle = randomStroke;
      context.stroke();
  }
}

//-------------------------------------------------------------------------------------------------------------
/**
 * initiate the functions for both canvas
 */
function load(){
    initCanvas();
    animation();
}

let rotation = 0;

  /**
   * set the loop for the animation
   */
  function animation(){
    window.requestAnimationFrame(draw);
  }

  /**
  * Draw a rectangle and make it turn in place.
  */
  function draw() {
    var context = document.getElementById('animationCanvas').getContext('2d');
  
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0,0,400,400); // limpiar canvas
    context.translate(200,200);
    context.rotate(rotation);  
    context.fillStyle = 'rgba(0,0,0)';

    context.beginPath();
    context.rect(-100, -75, 200, 150);
    context.fillStyle = "blue";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#000";
    context.stroke();
    context.rotate(rotation);
    context.restore();
    rotation += 0.04;
    window.requestAnimationFrame(draw);
  }
