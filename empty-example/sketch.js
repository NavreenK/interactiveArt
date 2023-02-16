function setup() {
  //createCanvas(3000, 1000);
  createCanvas(1000, 1000);
  c1 = color(204,0,102);
  c2 = color(255,104,0);
  setGradient(c1, c2);
}

function draw() {
  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;  // Inverse X
  let iy = height - mouseY; // Inverse Y
  //background(255,182,193);
  background(255,204,153);
  //fill(204,0,102);
  fill(247,113,11);
  ellipse(x, height/2, y, y);
  //fill(204,0,115);
  fill(247,82,11);
  ellipse(x+50, height/4, y+50, y+50);
  //
  //fill(255,102,178);
  fill(201,50,27);
  ellipse(ix, height/2, iy, iy);
  //ring
  stroke(0);
  beginShape();
  //fill(204,0,115);
  vertex(ix-(iy/2), height/2); // first point
  bezierVertex((ix-(iy/2))-500, (height/2)+60, (ix+(iy/2))+500, (height/2)+60, ix+(iy/2), height/2);
  endShape();
  //ellipse(mouseX, mouseY, 80, 80);
}

function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}
