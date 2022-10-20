function setup(){
canvas=createCanvas(250,250)
canvas.position(110,250);
video= createCapture(VIDEO);
video.hide();

tint_color="";
}

function take_snapshot(){
save('user.jpg');
}

function draw(){
Image(video,0,0,250,250)
tint(tint_color);
}

function tint(){
tint_color=document.getElementById("col_name").value;
}