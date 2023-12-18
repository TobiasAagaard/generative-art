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

