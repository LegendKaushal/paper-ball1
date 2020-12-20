class boxClass
{

    constructor(x,y,width,height)
    {
        var box_Options = {

            isStatic:true,
            restitution:0.8,
            friction:0.3,
            density:1.5
          
        }



     this.body = Bodies.rectangle(x,y,width,height,box_Options)
     this.width = width
     this.height = height
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
       

       rectMode(CENTER)
       strokeWeight(4)
       stroke("white")
       fill("red")

       rect(0,0,this.width,this.height)
       pop()

    }

}
