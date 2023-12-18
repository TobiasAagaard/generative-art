const myCanvas = document.getElementById('myCanvas');

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

const ctx= myCanvas.getContext('2d')
console.log(ctx)

ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 200, 300)

ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
ctx.fillRect(100, 100, 300, 350)

ctx.fillStyle = 'rgb(50, 300, 60)';
ctx.fillRect(200, 200, 300, 400)



ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.ellipse(700, 400, 200, 200, Math.PI / 45, 3, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = 'pink';
ctx.beginPath();
ctx.ellipse(700, 400, 200, 200, Math.PI / 1, 3, 2 * Math.PI);
ctx.fill();


ctx.beginPath();
ctx.ellipse(800, 300, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(800, 290, 10, 10, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(600, 300, 30, 30, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(600, 310, 10, 10, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();

ctx.fillStyle = 'white'
ctx.beginPath();
ctx.arc(700, 450, 60, 0, Math.PI, false); 
ctx.fill()


ctx.fillStyle = 'green'
ctx.beginPath();
ctx.moveTo(635, 375);
ctx.lineTo(700, 400);
ctx.lineTo(700, 355);
ctx.fill();




