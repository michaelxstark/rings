let R;


class Rings{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.y_mod = random(1, 10);
    this.x_mod = random(1, 10);
    this.size = random(20, 100);
    this.coloR = random(255);
    this.coloG = random(255);
    this.coloB = random(255);
  }

  acc(){
    this.x += (sin(frameCount * 0.05) * 5 + this.x_mod * 0.5);
    this.y += (cos(frameCount * 0.1) * 2 + this.y_mod);

    if (this.x > width){
      this.x_mod = random(-1, -10);
      this.coloR = random(255);
      this.coloG = random(255);
      this.coloB = random(255);
    }

    else if (this.y > height){
      this.y_mod = random(-1, -10);
      this.coloR = random(255);
      this.coloG = random(255);
      this.coloB = random(255);
    }

    else if (this.x < 0){
      this.x_mod = random(1, 10);
      this.coloR = random(255);
      this.coloG = random(255);
      this.coloB = random(255);
    }

    else if (this.y < 0){
      this.y_mod = random(1, 10);
      this.coloR = random(255);
      this.coloG = random(255);
      this.coloB = random(255);
    }

  }

  show(){
    stroke(this.coloR, this.coloG, this.coloB)
    circle(this.x, this.y, this.size);
  }

}


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  stroke(255);
  noFill();
  R = [];
  for (let i = 0; i < 50; i++){
    R.push(new Rings(random(height / 4), random(width / 2)));
  }
}


function draw() {
  background(0, 10);
  for (let i = 0; i < R.length; i++){
    R[i].show();
    R[i].acc();
  }
}
