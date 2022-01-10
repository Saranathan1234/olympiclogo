canvas = document.getElementById("myCanvas");
color = "blue";
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();


color = "black";
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 2;
ctx.arc(300, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

color = "red";
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 2;
ctx.arc(400, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "yellow";
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 2;
ctx.arc(250, 230, 40, 0, 2 * Math.PI);
ctx.stroke();

color = "green";
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 2;
ctx.arc(350, 230, 40, 0, 2 * Math.PI);
ctx.stroke();


function my_mousedown(e)
{
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x , mouse_y);


}
function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 2;
ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
ctx.stroke();

}
