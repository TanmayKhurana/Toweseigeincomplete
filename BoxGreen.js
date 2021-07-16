class BoxGreen{
    constructor(x,y,w,h){
        var r_options={
            isStatic:0
        }

        this.r = Bodies.rectangle(x,y,w,h, r_options);
        this.w = w
        this.h = h
 	    World.add(world, this.r);

    }
    display(){
        var pos = this.r.position
        rectMode(CENTER)
        fill("green");rect(pos.x, pos.y, this.w, this.h)
        
    }
}