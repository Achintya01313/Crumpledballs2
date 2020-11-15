
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumpledpaper ;
var dustbinwall1 , dustbinwall2 , dustbinwall3 ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	ground = createSprite(350,650,900,20);
	dustbinwall1 = createSprite(540,575,20,130);
	dustbinwall2 = createSprite(750,575,20,130);
	dustbinwall3 = createSprite(650,630,200,20)


  
  drawSprites();
 
}



