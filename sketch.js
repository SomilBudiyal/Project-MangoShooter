
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var boy,stone,tree,mango;
var ground;
var chain,

function preload(){}

function setup() {
  var canvas = createCanvas(2200,1000);
 
  engine = Engine.create();
  world = engine.world;

  boy = new Boy(300,750,200,200); 

  stone = new Stone(200,200,70); 

  tree = new Tree(200,200,800,800);

  chain = new Chain(stone.body,{x:200,y:100})

  ground = new Ground(1100,900,2200,100);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("green");
  
  boy.display();

  stone.display();

  tree.display();

  chain.display();

  ground.display();         
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  stone.launch();
}