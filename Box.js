class Box extends BaseClass {
constructor(x,y,width,height) {
  isStatic: false,
  super(x,y,width,height);
}
display(){
  if(this.body.speed<5){
    super.display();
    var pos =this.body.position;
    rectMode(CENTER);
  fill("purple");
  rect(pos.x, pos.y,this.width, this.height);
  }
  else{
    push();
    World.remove(world,this.body);
    this.Visiblity-=5;
    tint(255,this.Visiblity)
  pop();
}
}
}