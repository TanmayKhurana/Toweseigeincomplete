const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;

function setup(){
    createCanvas(800, 500)
    rectMode(CENTER);
    
    

    engine = Engine.create();
    world = engine.world;
    
    groundshwn = createSprite(350, 470, 1000, 20)
    groundshwn.shapeColor = "grey"

    base1shwn = createSprite(470, 370, 200 ,10)
    base1shwn.shapeColor = "red"

    base2shwn = createSprite(700, 150, 125, 10)
    base2shwn.shapeColor = "red"

    ground = new Bodies.rectangle(350, 480, 1000,20,{isStatic:true})
    World.add(world, ground)

    base1 = new Bodies.rectangle(470, 370, 200, 10,{isStatic:true})
    World.add(world, base1)

    base2 = new Bodies.rectangle(700, 150, 125, 10,{isStatic:true})
    World.add(world, base2)

    polygon = new Hegxagon(100, 200, 1)
    chain = new Chain(polygon.body,{x:100, y:200})
    
    base1botombox1 = new BoxPink(390, 200, 20, 45)
    base1botombox2 = new BoxPink(410, 100, 20, 45)
    base1botombox3 = new BoxPink(430, 200, 20, 45)
    base1botombox4 = new BoxPink(450, 100, 20, 45)
    base1botombox5 = new BoxPink(470, 200, 20, 45)
    base1botombox6 = new BoxPink(490, 100, 20, 45)
    base1botombox7 = new BoxPink(510, 200, 20, 45)
    base1botombox8 = new BoxPink(530, 100, 20, 45)
    base1botombox9 = new BoxPink(550, 200, 20, 45)
    

    base1upperbottombox1 = new BoxYellow(410, -10, 20, 45)
    base1upperbottombox2 = new BoxYellow(430, -20, 20, 45)
    base1upperbottombox3 = new BoxYellow(450, -10, 20, 45)
    base1upperbottombox4 = new BoxYellow(470, -20, 20, 45)
    base1upperbottombox5 = new BoxYellow(490, -10, 20, 45)
    base1upperbottombox6 = new BoxYellow(510, -20, 20, 45)
    base1upperbottombox7 = new BoxYellow(530, -10, 20, 45)


    base1middlebox1 = new BoxOrange(430, -50, 20, 45)
    base1middlebox2 = new BoxOrange(450, -60, 20, 45)
    base1middlebox3 = new BoxOrange(470, -50, 20, 45)
    base1middlebox4 = new BoxOrange(490, -60, 20, 45)
    base1middlebox5 = new BoxOrange(510, -50, 20, 45)

    base1uppermiddlebox1 = new BoxGreen(450, -100, 20, 45)
    base1uppermiddlebox2 = new BoxGreen(470, -120, 20, 45)
    base1uppermiddlebox3 = new BoxGreen(490, -100, 20, 45)

    base1topbox1 = new BoxBlue(470, -150, 20, 45)

    base2bottom1 = new BoxPink(660, 100, 20, 45)
    base2bottom2 = new BoxPink(680, 100, 20, 45)
    base2bottom3 = new BoxPink(700, 100, 20, 45)
    base2bottom4 = new BoxPink(720, 100, 20, 45)
    base2bottom5 = new BoxPink(740, 100, 20, 45)

    base2middle1 = new BoxYellow(680, -50, 20, 45)
    base2middle2 = new BoxYellow(700, -50, 20, 45)
    base2middle3 = new BoxYellow(720, -50, 20, 45)

    base2top1 = new BoxOrange(700, -100, 20, 45)

   

    Engine.run(engine)

}

function draw(){
    rectMode(CENTER);
    background("purple");

    base1botombox1.display()
    base1botombox2.display()
    base1botombox3.display()
    base1botombox4.display()
    base1botombox5.display()
    base1botombox6.display()
    base1botombox7.display()
    base1botombox8.display()
    base1botombox9.display()


    base1upperbottombox1.display()
    base1upperbottombox2.display()
    base1upperbottombox3.display()
    base1upperbottombox4.display()
    base1upperbottombox5.display()
    base1upperbottombox6.display()
    base1upperbottombox7.display()


    base1middlebox1.display()
    base1middlebox2.display()
    base1middlebox3.display()
    base1middlebox4.display()
    base1middlebox5.display()

    base1uppermiddlebox1.display()
    base1uppermiddlebox2.display()
    base1uppermiddlebox3.display()

    base1topbox1.display()

    base2bottom1.display()
    base2bottom2.display()
    base2bottom3.display()
    base2bottom4.display()
    base2bottom5.display()

    base2middle1.display()
    base2middle2.display()
    base2middle3.display()

    base2top1.display()

    chain.display()

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    chain1.fly()
}
