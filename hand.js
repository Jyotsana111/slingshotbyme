class hand{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.hand= Constraint.create(options);
        World.add(world, this.hand);
    }
        fly(){
            this.hand.bodyA = null
        }

      display(){
          if(this.hand.bodyA){
            var pointA = this.hand.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

          }
            
        
    }
    
}