const myCanvas = document.getElementById('myCanvas');

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

const ctx= myCanvas.getContext('2d')
console.log(ctx)

ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 200, 300)

ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
ctx.fillRect(100, 100, 300, 300)

ctx.fillStyle = 'green';
ctx.fillRect(200, 200, 300, 400)