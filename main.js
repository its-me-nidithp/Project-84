// Create a reference for the canvas
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


img_width = 300;
img_height = 100;

var canvas_image="";

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = canvas_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown);


function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
		//write a code to check the type of key pressed
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed the Alphabet Key"
		console.log("alphabet key");
	}
		else{
			otherkey();
		document.getElementById("d1").innerHTML="You pressed the Other Key"
		console.log("other key");
	}
	

	if(keyPressed >=48 && keyPressed <= 57){
		numberkey();
		document.getElementById("d1").innerHTML="You pressed Number Key";
		console.log("number key");

	}
	
	if(keyPressed >= 37 && keyPressed <= 40){
		arrowkey();
		document.getElementById("d1").innerHTML="You pressed Arrow Key";
		console.log("arrow key");
	}

	if(keyPressed >= 17 && keyPressed <= 27 && keyPressed >= 18){
		specialkey();
		document.getElementById("d1").innerHTML="You pressed a Special Key";
		console.log("special key");
	}
}

function aplhabetkey()
{canvas_image="Alpkey.png";
add();
	

}
function numberkey()
{
	canvas_image="numkey.png";
add();
}
function arrowkey()
{
	canvas_image="Arrkey.png";
add();
}
function specialkey()
{
	canvas_image="spkey.png";
add();
}
function otherkey()
{
	canvas_image="otherkey.png";
	add();
}
	
