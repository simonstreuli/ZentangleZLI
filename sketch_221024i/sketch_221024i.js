let x = 10;
let y = 0;
let spacing = 100;
function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
}
function draw() {
  stroke(255);
  if (random(1) < 0.5){ 
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y+spacing, x+spacing, y);
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}
