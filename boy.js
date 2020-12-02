class Boy {
  constructor(x,y,width,height){
   
  var option ={
     isStatic : false, 
  }

  this.body=Bodies.rectangle(x,y,width,height,option);
  this.width = width;
  this.height = height;
  this.image = loadImage("Images/boy.png");
  World.add(world, this.body);
  } 
  display(){
    imageMode(CENTER);
    image(this.image, 200, 750, this.width, this.height);
  }
}