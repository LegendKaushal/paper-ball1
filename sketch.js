
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var box1,box2,box3
var ball1


function preload()
{
	
}

function setup() {
	createCanvas(850, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,35);
	groundSprite.shapeColor=color(255)

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
	World.add(world, ground);

   box1 = new boxClass(700,635,200,20)
   box3 = new boxClass(600,595,20,100)
   box2 = new boxClass(800,595,20,100)

   ball1 = new paperClass(200,600,25)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundSprite.display()
 
  box1.display()
  box3.display()
  box2.display()

  ball1.display()
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
	}
}



