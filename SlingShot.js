class SlingShot{
    constructor(bodyA,pointB){
        var options ={
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.05,
        length: 10
        }
    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
    }
    //functions
    fly(){
    this.sling.bodyA = null;

    }

    attach(body){
        this.sling.bodyA = body
    }

    display(){ 
    image(this.sling1, 200, 70, 35, 150);
    image(this.sling2, 175, 70, 35, 85);
    if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB  = this.pointB;
    stroke(48,22,8);
    strokeWeight(4);
    if(pointA.x<220){
    line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
    line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
    image(this.sling3, pointA.x-30, pointA.y-10, 10, 20);
    }
    else{
    line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
    line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
    image(this.sling3, pointA.x+25, pointA.y-10, 10, 20);
    }

    }  

}
}