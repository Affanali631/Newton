class Rope
{
   constructor(body1, body2, offsetX, offsetY)
   {
    this.offsetX=offsetX
    this.offsetY=offsetY
    var options={
       bodyA:body1,
       bodyB:body2,
       pointB:{x:this.offsetX, y:this.offsetY}
    }
    this.rope=Constraint.create(options);
    World.add(world,this.rope);
   }
   display()
   {
      var b1=this.rope.bodyA.position;
      var b2=this.rope.bodyB.position;
      push()
      strokeWeight(3);
      line(b1.x,b1.y,b2.x+this.offsetX,b2.y+this.offsetY);
      pop();
   }
}