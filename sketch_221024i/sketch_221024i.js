let x = 0;
let y = 0;
let abstand = 100;
function setup() {
createCanvas(windowWidth, windowHeight);
background(255);
}
function draw() {
  stroke(0, 255, 255);
  if (random(1) < 0.5){ 
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y+abstand, x+abstand, y);
  }
  x = x + abstand;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}
