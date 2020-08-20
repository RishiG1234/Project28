
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy_image;
var stoneObject;
var treeObject;
var groundObject;
var launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var engine,world;

function preload()
{
	boy_image = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObject = new Stone(235,420,30);
	treeObject = new Tree(1000,550);
	groundObject = new Ground(width/2,600,width,20);
	launcherObject = new Launcher(stoneObject.body,{x:235,y:420});
	mango1 = new Mango(1100,70,30);
	mango2 = new Mango(1010,120,30);
	mango3 = new Mango(1040,170,30);
	mango4 = new Mango(980,140,30);
	mango5 = new Mango(1030,120,30);
	mango6 = new Mango(1120,100,30);
	mango7 = new Mango(1140,90,30);

	Engine.run(engine);
  
}


function draw() {
  background(230);
  textSize(20);
  text("Press Space to get a Second Chance to Play",50,50);
  image(boy_image,200,340,200,300);
  treeObject.display();
  stoneObject.display();
  groundObject.display();
  launcherObject.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  detectCollision(stoneObject,mango1);
  detectCollision(stoneObject,mango2);
  drawSprites();
 
}

function detectCollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance<=lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body,false);
		}
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObject.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcherObject.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObject.body,{x:235,y:420});
		launcherObject.attach(stoneObject.body);
	}
}

