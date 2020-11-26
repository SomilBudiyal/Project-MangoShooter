class Chain{
  constructor(bodyA, pointB){

   var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length: 50
     }
      
   this.pointB = pointB
      
   this.chain = Constraint.create(options);

   World.add(world, this.chain);
  }
  launch(){
    this.chain.bodyA = null
   }
      
  display(){
   if(this.chain.bodyA){
          var bodyA = this.chain.bodyA.position;
          var pointB = this.pointB;
          strokeWeight(4);
          line(bodyA.x, bodyA.y, pointB.x, pointB.y);
  }
 }
}