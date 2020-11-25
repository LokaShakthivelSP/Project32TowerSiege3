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
    this.body= Bodies.rectangle(x,y,width,height,options);
    this.width= width;
    this.height= height;
    this.visibility=255;
    this.image=loadImage("squareBlue.png");
    World.add(world, this.body);
  }

  score(){
    if(this.visibility<0 && this.visibility> -105){
      score++;
    }
  }

  display(){
    if(this.body.speed<5){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);
    }else{
        World.remove(world,this.body);
        push();
        this.visibility-=10;
        var pos =this.body.position;
        tint(255,this.visibility);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
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
    attach(body){
        this.sling.bodyA=body;
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
