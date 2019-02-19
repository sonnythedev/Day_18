let myCanvas=document.getElementById('myCanvas');
//myCanvas.setAttribute('width',window.innerWidth);
//myCanvas.setAttribute('height',window.innerHeight);
//myCanvas.style.width=window.innerWidth+'px'; //window inner width gives you width of browser
//myCanvas.style.height=window.innerHeight+'px';
//window inner height gives you height of browser


let ctx=myCanvas.getContext('2d');

////Below we will fill a triangle
ctx.beginPath();
ctx.moveTo(50,10); //moves to x and y coordinate
//ctx.moveTo(10,50);
ctx.lineTo(10,70); //draws a line 
ctx.lineTo(90,70);
ctx.closePath(); //from where you were previously to new x and y coordinate
//ctx.strokeStyle='#00ff00';
//ctx.stroke();
ctx.fillStyle='#ff0000';
ctx.fill();

//Below we will draw a Rectangle
ctx.beginPath();
ctx.strokeStyle='#ff0000';
ctx.rect(50,50,50,50);
ctx.closePath();
ctx.stroke();

//Below we will fill a Rectangle with color
ctx.beginPath();
//ctx.globalCompositeOperation='destination-over';
ctx.fillStyle='#0000ff';
ctx.fillStyle='rgba(0,0,255,.5)';
ctx.fillRect(100,100,150,50);
ctx.closePath();
ctx.fill();

//Below we will fill a circle
ctx.beginPath();
ctx.arc(200,200,25,0,2*Math.PI,false);
ctx.fillStyle='#0000ff';
//ctx.fill();
//ctx.stroke();

/////THE RAINBOW EXERCISE!
let radius=100;
let colorArr=['red','orange','yellow','green','blue','indigo','violet','white'];
for(let i=0; i<=7; i++){
    radius -=10;
    ctx.beginPath();
    ctx.arc(200,200,radius,0,Math.PI,true);
    ctx.fillStyle=colorArr[i];
    ctx.fill();
}

//Draw/Fill 10 circle radomly in the canvas. And they should be inside 500 x 500 area. Also make sure the circle has 50 as radius. And for bonus points, you should have 10 different color circles.
radius=50;
colorArr=['red','orange','yellow','green','blue','indigo','violet','white','magenta','gray'];

for(let i=0; i<10; i++){
    ctx.beginPath();
    let x=Math.floor(Math.random()*500);
    let y=Math.floor(Math.random()*500);
    ctx.arc(x,y,radius,0,2*Math.PI,true);
    ctx.fillStyle=colorArr[i];
    ctx.fill();
}






