const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score=0;
var bg;

function preload(){
  getBackground();
}

function setup() {
  createCanvas(1000,600);
  
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(500,580,1000,40);

  aBase=new Ground(470,500,210,10);

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

  bBase=new Ground(720,200,150,10);

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
  if(bg===255){
    background(255);
  }else if(bg===0){
    background(0);
  }


  textSize(35);
  fill("yellow");
  text("Score: "+score,width-175,40);

  Engine.update(engine);
  ground.display(); 
  
  sling.display();
  fill(255);
  ball.display();

  stroke(0);

  aBase.display();

  a11.display();
  a12.display();
  a13.display();
  a14.display();
  a15.display();
  a16.display();
  a17.display();

    a11.score();
    a12.score();
    a13.score();
    a14.score();
    a15.score();
    a16.score();
    a17.score();

  a21.display();
  a22.display();
  a23.display();
  a24.display();
  a25.display();

    a21.score();
    a22.score();
    a23.score();
    a24.score();
    a25.score();

  a31.display();
  a32.display();
  a33.display();

    a31.score();
    a32.score();
    a33.score();

  a41.display();

    a41.score();  
  
  bBase.display();

  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();  

    b11.score();
    b12.score();
    b13.score();
    b14.score();
    b15.score();

  b21.display();
  b22.display();
  b23.display();

    b21.score();
    b22.score();
    b23.score();

  b31.display();

    b31.score();

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(ball.body);
      Matter.Body.setPosition(ball.body,{x:200,y:420});
  }
}

async function getBackground(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    console.log(response);

    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    console.log(datetime);

    var hour = datetime.slice(11,13);
    console.log(hour);

    if(hour>=06 && hour<=18){
        bg = 255;
    }
    else{
        bg = 0;
    }
}
