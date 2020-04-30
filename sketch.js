const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var stick1,stick2,stick3,stick4,stick5,stick6,stick7;
var triangle1,triangle2,triangle3,triangle4,triangle5,triangle6,triangle7;
function setup() {
  var canvas =createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

   
   
   
    

  stick1 = new Stick(200,200,60,300);
  stick2 = new Stick(275,150,100,350);
  stick3 = new Stick(390,200,60,300);
  stick4 = new Stick(515,130,40,370);
  stick5 = new Stick(100,130,40,370);
  stick6 = new Stick(100,500,455,50);
}

function draw() {
  background(0);  
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();

  
  
  fill("red");
  triangle(90,150, 120,100 ,150,150);
  triangle(505,150, 535,100 ,565,150);

  fill("blue");
  triangle(380,200, 415,100, 460,200);
  triangle(190,200, 230,100, 270,200);
  
  fill("yellow");
  triangle(260,190, 325,10 ,390,190);
  /*
  fill("violet");
  triangle();
  triangle();
  */
 fill("white");
 rect(300,400,50,100);
  drawSprites();
}