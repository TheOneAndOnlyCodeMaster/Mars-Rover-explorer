myCanvas = document.getElementById("myCanvas");
ctx = myCanvas.getContext("2d");

rover_width = 100;
rover_height = 90;
rover_X = 10;
rover_y = 10;

nasa_images_array = ["mars.jpg", "NASA_1.jpg", "Rocky_Road_2.jpg", "Rocky_Road.jpg"];
random_number = Math.floor(Math.random()*4);
console.log(random_number);
background_image = nasa_images_array[random_number];
rover_image = "rover.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_background_imgTag = new Image();
    rover_background_imgTag.onload = uploadRover;
    rover_background_imgTag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, myCanvas.width, myCanvas.height)
}
function uploadRover(){
    ctx.drawImage(rover_background_imgTag, rover_X, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38'){
        console.log("up");
        up();
    }
    if(keypressed == '40'){
        console.log("down");
        down();
    }
    if(keypressed == '37'){
        console.log("left");
        left();
    }
    if(keypressed == '39'){
        console.log("right");
        right();
    }
}

function up(){
    if(rover_y >= 0){
        rover_y -= 10;
        console.log("rover_y =" + rover_y, "rover_x =" + rover_X);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rover_y <= 500){
        rover_y += 10;
        console.log("rover_y =" + rover_y, "rover_x =" + rover_X);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_X >= 0){
        rover_X -= 10;
        console.log("rover_y =" + rover_y, "rover_x =" + rover_X);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_X <= 710){
        rover_X += 10;
        console.log("rover_y =" + rover_y, "rover_x =" + rover_X);
        uploadBackground();
        uploadRover();
    }
}