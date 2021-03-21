const Constraint= Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var roof,b1,b2,b3,b4,rope1,rope2,rope3,rope4,b5,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Ground(400,100,400,20)
    b1 = new Balls (250,300,50)
	b2 = new Balls (300,300,50)
	b3 = new Balls (350,300,50)
	b4 = new Balls (400,300,50)
	b5=new Balls (450,300,50)
	rope1 = new Rope (b1.body,roof.body,-100,0)
	rope2= new Rope (b2.body,roof.body,-50,0)
	rope3= new Rope (b3.body,roof.body,0,0)
	rope4= new Rope (b4.body,roof.body,50,0)
	rope5=new Rope (b5.body,roof.body,100,0)
	Engine.run(engine);
    
}


function draw() {
	background("white");
	
  rectMode(CENTER);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-75,y:-75})
	}
}


