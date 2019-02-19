//This is e6 or later version have all the class concepts
//It has class, extends, contructor, getter/setters
class Shape{ //Defining Shape class
    constructor(paramX,paramY){
        this.x=paramX;
        this.y=paramY;
        let z='this iz z property';
    }
    draw(){
        console.log('Draw Shape!');
    }
    //This is called getter method
    get getX(){
        return this.x;
        //console.log(z);
        //return `x: ${this.x} y: ${this.y}`;
    }
    set setX(_x){
        this.x=_x;
    }
}

let shape1=new Shape(5,10);
console.log(shape1);
console.log(shape1.getX); //getter method is considered as property
shape1.setX=9;
console.log(shape1.getX);


Shape.prototype.toString=function(){
    return 'this is toString method';
}
console.log(shape1.toString());

class Rectangle extends Shape{
    //Rectangle class
    constructor(paramX,paramY,paramWidth,paramHeight){
        super(paramX,paramY); //super lets you call the constructor of your parent class
        this.width=paramWidth;
        this.height=paramHeight;
    }

    draw(){
        console.log(`Rectangle width:${this.width} height: ${this.width}`);
    }
    //Lets write getter and setter method for width / this.width property
    get getWidth(){
        return this.width;
    }
    set setWidth(width){
        this.width=width;
    }
    static myName(){
        return 'My name is Rectangle';
    }
}



let rect1=new Rectangle(5,10,100,50);
let rect2=new Rectangle(5,15,200,150);
rect1.draw();
rect1.setWidth=99;
console.log(rect1.getWidth); //you call the getter as property not as method
console.log(Rectangle.myName()); // class name. Notice no instance. 

/****
 * 
 * Exercise
 * 
 * create a Circle class through function(like Rectangle). It will inherit from Shape. It will also have property called radius which you can pass through arguments. It will also over ride the draw() method from Shape and basically print out the radius.
 */


class Circle extends Shape{
    constructor(paramX, paramY,radius){
        super(paramX,paramY);
        this.radius=radius;
    }
    
    draw(){
        console.log('circle radius',this.radius);
    }
    
    perimeter(){
        let perimeter= 2 * Math.PI * this.radius;
        console.log('circle perimeter',perimeter);
    }
}

//let circle1=new Circle(5,10,5);
let circle2=new Circle(5,10,5);
//console.log(circle1);
circle2.draw();
circle2.perimeter();