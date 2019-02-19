function Shape(paramX,paramY){ //Defining Shape class
    let z='this iz z property'; //private properties. encapsulation.
    this.x=paramX;
    this.y=paramY;

    this.draw=function(){
        console.log('Draw Shape!');
    }
    
    this.zz=z;
}

let shape1=new Shape(5,10);
//shape1.x=10;
console.log(shape1.zz);
//console.log(shape1);

Shape.prototype.toString=function(){ //Adding toString function to the Shape class
    //prototypical inheritance is only available where it's defined. 
    return 'this is toString method';
}
Shape.prototype.anotherProp=100;

console.log(shape1.toString());
console.log(shape1.anotherProp);

function Rectangle(paramX,paramY,paramWidth,paramHeight){
    //Rectangle class
    Shape.call(this, paramX, paramY);
    //And it's inheriting from Shape class through call method
    this.width=paramWidth;
    this.height=paramHeight;

    this.draw=function(){
        //Over riding the base class method
        return 'Draw Rectangle!'+this.width+this.height;
    }
    // Over loading methods DOESNT WORK IN JS
    //Last function actually gets the priority
    this.draw=function(newParam){
        //Over riding the base class method
        return 'Over loading'+newParam;
    }
}

let rect1=new Rectangle(5,10,100,50);
let rect2=new Rectangle(5,15,200,150);

console.log('rect1 draw',rect1.draw());
console.log('rect1 draw overloading',rect1.draw(5));

/****
 * 
 * Exercise
 * 
 * create a Circle class through function(like Rectangle). It will inherit from Shape. It will also have property called radius which you can pass through arguments. It will also over ride the draw() method from Shape and basically print out the radius.
 */


function Circle(paramX, paramY,radius){
    Shape.call(this,paramX, paramY); //inheriting from Shape class/function
    
    this.radius=radius;
    this.draw=function(){
        console.log('radius:',this.radius);
    }

    this.perimeter=function(){
        let perimeter= 2 * Math.PI * this.radius;
        console.log('PERIMETER',perimeter);
    }
}

//let circle1=new Circle(5,10,5);
let circle2=new Circle(5,10,5);
//console.log(circle1);
circle2.draw();
circle2.perimeter();
console.log(circle2.radius);