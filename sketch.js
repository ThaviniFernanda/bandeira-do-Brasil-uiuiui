function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("green");
  fill("yellow");
  quad(10,195,295,50,590,200,300,350);
  
  fill("blue");
  circle(300,200,200);
  
  fill("white");
  rect(200, 190, 200, 25);
  
  textSize(16);
  
  fill(0,0,0);
  noStroke(0);
  text('ORDEM E PROGRESSO',210,210);
  
}
