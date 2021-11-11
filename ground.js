class Ground 
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.image = loadImage('Tile.jpg');
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.w,this.h);

    pop();
  }
}
