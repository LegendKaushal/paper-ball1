class paperClass
{

    constructor(x,y,radius)
    {
        var Options = {

            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
          
        }



     this.body = Bodies.circle(x,y,radius,Options)
     this.radius = radius
     
     World.add(world,this.body)
    }

    display()
    {
       var angle = this.body.angle
       var pos = this.body.position
     
       push()
       translate(pos.x,pos.y)

       angleMode(RADIANS)
       rotate(angle)
       

       ellipseMode(RADIUS)
       strokeWeight(4)
       stroke("white")
       fill("green")

       ellipse(0,0,this.radius)
       pop()

    }

}