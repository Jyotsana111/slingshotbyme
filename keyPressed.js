function keyPressed() {
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(trash.body,trash.body.position,{x:85,y:-40});
  
    }
  }