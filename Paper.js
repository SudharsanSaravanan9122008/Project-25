class Paper{
    constructor(x, y){
        this.x = x;
        this.y = y;
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:0.8
        };
        this.radius = 70;
        
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
        this.PaperImage = loadImage("paper.png")
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y+40);
        rotate(angle);
        imageMode(CENTER);
        image(this.PaperImage, 0, 0, this.radius, this.radius);
        pop();
    }
}