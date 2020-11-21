class Stone{
  constructor(x,y,diameter){
     var option = {
       'restitution' : 0,
       'density' : 8,
       }
   
       this.body = Bodies.circle(x,y,diameter/2,option);
       this.diameter = diameter;
       this.image = loadImage("Images/stone.png");
       
       World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;   
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      fill("white");
      imageMode(CENTER); 
      image(this.image,0,0,this.diameter,this.diameter);
      pop();
    }               
 }