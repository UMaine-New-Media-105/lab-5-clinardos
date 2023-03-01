// Linardos, Caitlin
// Lab 5, Example 1

// This is where I defined my variables
let x1;
let speedX;
let y1;
let speedY;

function setup() {
  createCanvas(400, 400);

  // This is where I initiated my variables
  x1 = random(1, 3);
  speedX = random(1, 3);
  y1 = random(1, 3);
  speedY = random(1, 3);
}

function draw() {
  background(220);
  // setting the speed
  x1 = x1 + speedX;
  y1 = y1 + speedY;

  // adding the sprite
  addCreepySmileyFace(x1, y1, 1);

  // Controlling the sprite hitting the  edges
  if (x1 >= 300 || x1 <= 0) {
    speedX = speedX * -1;
  }
  if (y1 >= 300 || y1 <= 0) {
    speedY = speedY * -1;
  }
}

// This is the sprite function that I made in a previous lab
function addCreepySmileyFace(x, y, size) {
  translate(x, y);
  scale(size);
  // These are the if-else statements responsible for the color changes
  if (mouseX < 50) {
    fill("#DA00FF");
  } else if (mouseX >= 50 && mouseX < 150) {
    fill("rgb(120,255,120)");
  } else if (mouseX >= 150 && mouseX < 300) {
    fill("rgb(88,192,255)");
  } else {
    fill("pink");
  }

  // This is the code used to create the actual smiley face

  ellipse(55, 55, 100);

  fill("black");
  ellipse(70, 40, 13, 40);
  ellipse(40, 40, 13, 40);

  // push () pop() is used to allow only this section of code to have a strokeWeight of 5
  push();
  noFill();
  strokeWeight(5);
  arc(57, 57, 80, 80, 0, 16);
  pop();
}
