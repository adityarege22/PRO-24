class Dustbin{
    constructor(x,y,height,width) {
        var options = {
            isStatic = false,
            restitution= 0.3,
            friction = 0.5,
            density = 1.2

        }
        this.body = Bodies.rectangle(x,y,50,50,options)
        this.width = 50;
        this.height = 50;
        World.add(world,this.body)
    }
    display(){
    var pos = this.body.position
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height);
    }
};


