class Tree{
    constructor(x,y){
        this.image = loadImage("tree.png");
        this.x = x;
        this.y = y;
        this.treeWidth = 450;
        this.treeHeight = 600;
        this.wallThickness = 10;
        this.bottomBody = Bodies.rectangle(this.x,this.y,this.treeWidth,this.wallThickness,{isStatic:true});
        this.leftBody = Bodies.rectangle(0,this.y-this.treeHeight/2,this.wallThickness,this.treeHeight,{isStatic:false});
        this.rightBody = Bodies.rectangle(this.x+this.treeWidth/2,this.y-this.treeHeight/2,this.wallThickness,this.treeHeight,{isStatic:false});
        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
    }
    display(){
        var pos = this.bottomBody.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,this.treeHeight/2,0,this.treeWidth,this.treeHeight);
        pop();
    }
}
