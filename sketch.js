
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var circle = {
	"obj":null,
	"radius":null
};
var ground;
var wall1;
var wall2;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	circle["radius"] = 25;
	circle["obj"] = Bodies.circle(25,height/2,circle["radius"],
	{
		restitution: 0.95,
		friction: 0.01,
		density:1.2
	});
	ground = Bodies.rectangle(width/2,height-10,width,25,{
		isStatic: true,
	});
	ground = Bodies.rectangle(width/2,height-10,width,25,{
		isStatic: true,
	});
	wall1 = Bodies.rectangle(650,height-72.5,25,100,{
		isStatic: true,
	});
	wall2 = Bodies.rectangle(500,height-72.5,25,100,{
		isStatic: true,
	});


	World.add(world,circle["obj"]);
	World.add(world,ground);
	World.add(world,wall1);
	World.add(world,wall2);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill(255);

	ellipse(circle["obj"].position.x, circle["obj"].position.y, circle["radius"],circle["radius"]);
	rect(ground.position.x, ground.position.y, width,25);
	rect(wall1.position.x, wall1.position.y, 25,150);
	rect(wall2.position.x, wall2.position.y, 25,150);

 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(circle["obj"],circle["position"],createVector(90,-90));
	}
	// if(keyCode === LEFT_ARROW){
	// 	Body.applyForce(circle["obj"],circle["position"],createVector(-0.85,0));
	// }
	// if(keyCode === RIGHT_ARROW){
	// 	Body.applyForce(circle["obj"],circle["position"],createVector(0.85,0));
	// }
}

