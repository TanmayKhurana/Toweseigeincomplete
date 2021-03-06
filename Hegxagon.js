class Hegxagon {

    constructor(x, y, r) {
        var options={
            isStatic:false,
            restitution:0, 
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(0, 0, this.r,this.r);
        pop();
      }
}