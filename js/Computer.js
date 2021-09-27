class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.Clife1 = "green";
    this.Clife2 = "green";
    this.Clife3 = "green";

        World.add(world, this.body);
  }

   display() {
     push();
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();


   
    push();

    textSize(35);
fill("yellow");
stroke("red");
text("COMPUTER",1080,40);

    fill(this.Clife1);
    rect(980,70,70,30);
    
    fill(this.Clife2);
    rect(1050,70,70,30);
    
    fill(this.Clife3);
    rect(1120,70,70,30);
    
    pop();
    



  }
}
