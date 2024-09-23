function setup() {
  createCanvas(400, 400);
  background(200,30,90);
}

function draw() {
  if(mouseIsPressed){
  rect(mouseX,mouseY,15,10);
  fill("purple")
  stroke("white")
  }
  }
