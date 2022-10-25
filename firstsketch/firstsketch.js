let x = 0;
let y = 0;
let abstand = 100;
let circlex = 0;
let circley = 0;
let radius = 75;
let cabstand = 100;
let stroker = 0;
let srokeg = 255;
let srokeb = 255;

function setup() {
createCanvas(windowWidth, windowHeight);
background(255);
}
function draw() {
  stroke(stroker, strokeg, strokeb);

  
  if (random(1.1) < 0.5){ 
    line(x, y, x + abstand, y + abstand);
    circle(circlex, circley, radius)
  } else {
    line(x, y+abstand, x+abstand, y);
    circle(circlex+cabstand, circley+cabstand, radius-40)
  }
  x = x + abstand;
  if (x > width) {
    x = 0;
    y = y + abstand;
  }
  circlex = circlex + cabstand;
  if (circlex > width) {
    circlex = 0;
    circley = circley + cabstand;
  }    
}
