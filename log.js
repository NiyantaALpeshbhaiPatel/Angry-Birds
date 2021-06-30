class Log {
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      angleMode(RADIANS);
      rotate(this.body.angle);
      rectMode(CENTER);
      fill('blue');
      rect(0,0, this.width, this.height);
      pop();
  
    }
  };