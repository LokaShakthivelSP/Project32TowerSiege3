class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
}

class Box {
  constructor(x, y, width, height){
    var options={
        density:0.5,
        friction:0.7,
        restitution:0.5
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
  }
}

class Ball {
  constructor(x, y, radius){
    var options={
        density:0.5,
        friction:0.7,
        restitution:0.5
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image=loadImage("ball.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x, pos.y, this.radius*2, this.radius*2);
  }
}

class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("yellow");
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}