var canvas=document.getElementById('myCanvas');
var pen=canvas.getContext('2d');
var background
var rover

background= new Image();
background.onload=uploadBG;
background.src='mars.jpg'

function uploadBG(){
    pen.drawImage(background,0,0,canvas.width,canvas.height)
}

rover= new Image();
rover.onload=uploadRover;
rover.src='rover.png'

function uploadRover(){
    pen.drawImage(rover,0,0,50,50)
}
window.