const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var boy,stone,tree,mango;
var ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var chain;

function preload(){
  boyImage = loadImage("Images/boy.png");

  treeImage = loadImage("Images/tree.png");
}

function setup() {

 createCanvas(2300,1000);
  
  tree = createSprite(1800,435,25,20);
   tree.scale = 0.7;

  boy = createSprite(340,790,10,10); 
    boy.scale = 0.1;
    
  engine = Engine.create();                                    
  world = engine.world;

  stone = new Stone(200,200,70); 

  mango1 = new Mango(2000,440,70);
  mango2 = new Mango(1900,320,70);
  mango3 = new Mango(1850,160,70);
  mango4 = new Mango(1810,400,70);
  mango5 = new Mango(1700,230,70);
  mango6 = new Mango(1650,330,70);  
  mango7 = new Mango(1500,400,70);
  mango8 = new Mango(1450,290,70);
     
  chain = new Chain(stone.body,{x:280,y:740});

  ground = new Ground(1100,930,22000,200);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("green");

  boy.addImage(boyImage);

  tree.addImage(treeImage);

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);

  stone.display();

  chain.display();

  ground.display();

  mango2.display();         
  mango3.display();         
  mango4.display();         
  mango5.display();   
  mango6.display();         
  mango7.display();         
  mango8.display();     
  
drawSprites();
}

function detectcollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance<=lmango.diameter + lstone.diameter){
    Matter.Body.setStatic(lmango.body,false);
  }
 }

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain.launch();
}
    
function keypressed() {                                                                                                                                       
  if(keyCode === 48){
    Matter.Body.setPosition(stone.body,{x:280,y:700})
    chain.attach(stone.body);
  }
}   