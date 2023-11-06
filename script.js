let NUM_OF_SNOWFLAKES = 2000;
let NUM_OF_RAINDROPS = 2000;
let snowflakes = [];
let raindrops = [];

function setup() {
  let canvas = createCanvas(displayWidth, displayHeight);
  canvas.parent("canvasWrapper");
  for (let i = 0; i < NUM_OF_SNOWFLAKES; i++) {
    snowflakes.push(new Snow(random(width), random(-50, height)));
  }
  for (let i = 0; i < NUM_OF_RAINDROPS; i++) {
    raindrops.push(new Raindrop(random(width), random(-50, height)));
  }

}

function draw() {
  background(50);

  for (let i = 0; i < snowflakes.length; i++) {
    snowflakes[i].update();
    snowflakes[i].display();
    if (snowflakes[i].isDead()) {
      snowflakes[i] = new Snow(random(width), -20);
    }
  }


  for (let i = 0; i < raindrops.length; i++) {
    raindrops[i].update();
    raindrops[i].display();
    if (raindrops[i].isDead()) {
      raindrops[i] = new Raindrop(random(width), -20);
    }
  }


}
// Snow 
class Snow {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.dia = random(2, 5);
    this.xSpeed = random(-0.5, 0.5); 
    this.ySpeed = random(0.5, 2); 
    this.lifespan = 200;
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.xSpeed += random(-0.05, 0.05);
    if (this.xSpeed > 1) this.xSpeed = 1;
    if (this.xSpeed < -1) this.xSpeed = -1;
    this.lifespan -= 0.5; 
  }

  display() {
    noStroke();
    fill(255, this.lifespan);
    circle(this.x, this.y, this.dia);
  }

  isDead() {
    return this.y > height || this.lifespan < 0;
  }
}

// Rain
class Raindrop {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.length = random(5, 10);
    this.ySpeed = random(4, 6); 
  }

  update() {
    this.y += this.ySpeed;
  }

  display() {
    stroke('#82EEFD'); 
    strokeWeight(2);
    line(this.x, this.y, this.x, this.y + this.length);
  }

  isDead() {
    return this.y > height;
  }
}
