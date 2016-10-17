var myFont;
var phrase = 'Hello, its me I was wondering if after all these years youd like to meet to go over everything They say that times supposed to heal ya but I aint done much healing Hello, can you hear me? Im in California dreaming about who we used to be When we were younger and free';
var phrasearray = phrase.split(' ');
var fsize = 9;
function preload(){
  myFont = loadFont('Montserrat/Montserrat-Regular.ttf');
}

function setup() {
  createCanvas(800,600);
  background(255,100,109,90);
  noStroke();
  fill(0,0,0);
  
  textFont(myFont,36);
}

function draw() {
  background(255,100,109,90);
  var margin = 20;
  var x = margin;
  var y = 90;
  
  for(i in phrasearray)
  {
    if((phrasearray[i])=='Hello')
    {
      textSize(90);
    }
    else
    {
      textSize(36);
    }
    fill(random(255),random(255),random(255));
    var tw = textWidth(phrasearray[i]+' ');
    if (x+tw>width-margin)
    {
      x=margin;
      y+=26
    }
    text(phrasearray[i],x,y);
    x+=tw;
    }
  for (i in phrasearray)
  {
    //background(255,100,109,90);
    fill(random(255),random(255),random(255));
    text(phrasearray[i],mouseX,mouseY);
    //textSize(16);
    // fsize++;
    // textSize(fsize);
    // if(fsize>125) fsize=0;
  }
  }
// function draw() {
//   background(255,100,109,90);
//   fill(random(255),0, random(255));
//   text('Hello its me',mouseX,mouseY);
//   fsize++;
//   textSize(fsize);
//   if(fsize>125) fsize=0;
// }
    
  