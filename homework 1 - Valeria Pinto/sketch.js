
var x = 0;
var y = 0;


function setup() {
  createCanvas(800, 600); // width and height in pixels
  background(0); // background color
  x = random(width);
  y = random(height);
  
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();
}

function draw() {
   
  fill(mouseX*255, random(mouseY),random(y),80);
  stroke(mouseX*255, random(mouseY),random(y),80);
  ellipse(mouseX, mouseY, y/4, mouseY/4);
 // x = x+ x*(-50,50);
  //y = y+ y*(-50,50);
  
  var dx = mouseX-x;
  var dy = mouseY-y;
  x = x + random(0, 0.2)*dx  //+ random(-10, 10);
  y = y + random(0, 0.2)*dy  //+ random(-10, 10);
  
  
  if(x>width) x = 0;
  if(y>height) y = 0;
  if(x<0) x=width;
  if(y<0) y=height;
  osc.amp(y/height);
  osc.freq(x*2);
}
  function keyPressed()
{
  background(0);
   x = random(width);
   y = random(height);
}