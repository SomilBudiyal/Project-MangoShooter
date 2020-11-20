class Tree {
  constructor(x,y,width,height){
           
  var option = {
    isStatic : true 
   }
        
 this.body=Bodies.rectangle(x,y,width,height,option);
 this.width = width;
 this.height = height;
 this.image = loadImage("Images/tree.png");
  World.add(world, this.body);
 } 
          
 display(){
  imageMode(CENTER);
  image(this.image, 1715, 450, this.width, this.height);
 }
}