function setup() {
  createCanvas(1800,1800);
}

function draw() {

    background("LightGreen");

  if (keyIsDown(RIGHT_ARROW)) {
    background("Pink");
  }

  if (keyIsDown(LEFT_ARROW)) {
    background("Cyan");
  }

  if (keyIsDown(UP_ARROW)) {
    background("Red");
  }

  if (keyIsDown(DOWN_ARROW)) {
    background("Yellow");
  }

}




