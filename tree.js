class Tree{
    constructor(x,y){
        this.image = loadImage("tree.png");
        this.x = x;
        this.y = y;
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,0,-300,450,600);
        pop();
    }
}