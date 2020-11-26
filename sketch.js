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

function preload(){}

function setup() {
createCanvas(2200,1000);
 
  engine = Engine.create();
  world = engine.world;

  tree = new Tree(200,200,800,800);

  boy = new Boy(300,750,200,200); 

  stone = new Stone(200,200,70); 

  mango1 = new Mango(1099,870,70);
  mango2 = new Mango(1099,870,70);
  mango3 = new Mango(1099,870,70);
  mango4 = new Mango(1099,870,70);
  mango5 = new Mango(1099,870,70);
  mango6 = new Mango(1099,870,70);
  mango7 = new Mango(1099,870,70);
  mango8 = new Mango(1099,870,70);
    
  chain = new Chain(stone.body,{x:140,y:700});

  ground = new Ground(1100,900,2200,200);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("green");

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango2);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  
  boy.display();

  stone.display();

  tree.display();

  chain.display();

  ground.display();         
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain.launch();
}

function keypressed() {
  if(keyCode === "space"){
    Matter.Body.setPosition(stone.body,{x:235,y:420})
    launcher.attach(stone.body);
  }
}

function detectcollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance<-lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}