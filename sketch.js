
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	bin1 = new Bin(1300,650,300,30)
	bin2 = new Bin(1165,585,30,100)
	bin3 = new Bin(1435,585,30,100)

	trash = new Trash(100,630,30,30)
	ground = new Ground(width/2,650,width,10)
	Slingshot = new SlingShot(trash.body,{x:200, y:100});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
   background(1000)
	bin1.display();
	bin2.display();
	bin3.display();
	trash.display();

	Slingshot.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(trash.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    Slingshot.fly()
}
