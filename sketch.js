const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1000,600);
  
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(500,580,1000,40);

  a=new Ground(470,500,210,10);

  a11=new Box(380,460,30,30);
  a12=new Box(410,460,30,30);
  a13=new Box(440,460,30,30);
  a14=new Box(470,460,30,30);
  a15=new Box(500,460,30,30);
  a16=new Box(530,460,30,30);
  a17=new Box(560,460,30,30);

  a21=new Box(410,430,30,30);
  a22=new Box(440,430,30,30);
  a23=new Box(470,430,30,30);
  a24=new Box(500,430,30,30);
  a25=new Box(530,430,30,30);

  a31=new Box(440,400,30,30);
  a32=new Box(470,400,30,30);
  a33=new Box(500,400,30,30);

  a41=new Box(470,370,30,30);

  b=new Ground(720,200,150,10);

  b11=new Box(660,160,30,30);
  b12=new Box(690,160,30,30);
  b13=new Box(720,160,30,30);
  b14=new Box(750,160,30,30);
  b15=new Box(780,160,30,30);

  b21=new Box(690,130,30,30);
  b22=new Box(720,130,30,30);
  b23=new Box(750,130,30,30);

  b31=new Box(720,100,30,30);  

  ball=new Ball(200,420,20);

  sling=new SlingShot(ball.body,{x:200,y:420});

}

function draw() {
  background(255);
  Engine.update(engine);
  ground.display(); 
  
  sling.display();
  fill(255);
  ball.display();

  stroke(0);
  
  a.display();

  fill("pink");
  a11.display();
  a12.display();
  a13.display();
  a14.display();
  a15.display();
  a16.display();
  a17.display();

  fill("lightgreen");
  a21.display();
  a22.display();
  a23.display();
  a24.display();
  a25.display();

  fill("orange");
  a31.display();
  a32.display();
  a33.display();
 
  fill("lightblue");
  a41.display();
  
  b.display();

  fill("lightgreen");
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();  

  fill("orange");
  b21.display();
  b22.display();
  b23.display();

  fill("lightblue");
  b31.display();

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}