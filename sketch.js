var ghost_main,ghostImg
var blue_ghost, blueImg
var gameState = "play";

function preload(){
    ghostImg = loadImage("yellow.png");
    blueImg = loadImage("blue.jpg")
}

function setup(){
    createCanvas(400,400);
    
    ghost_main = createSprite(200,200)
    ghost_main.addImage("ghost",ghostImg);  
    ghost_main.scale = 0.3

    blue_ghost = createSprite(70,100);
    blue_ghost.addImage("blue",blueImg);
    blue_ghost.scale = 0.4
    blue_ghost.velocityX = 0.3
}

function draw(){
    background(0);

    if(gameState == "play"){

        if(keyDown("LEFT")){
            ghost_main.velocityX = ghost_main.velocityX - 0.5;
        }
    
        if(keyDown("RIGHT")){
            ghost_main.velocityX = ghost_main.velocityX + 0.5;
        }
    
        if(keyDown("UP")){
            ghost_main.velocityY = ghost_main.velocityY - 1.2;
        }
    
        if(keyDown("DOWN")){
            ghost_main.velocityY = ghost_main.velocityY + 1.2;
        }


        if(ghost_main.x < 0){
            ghost_main.x = 4;
        }
    
        if(ghost_main.x > 400){
            ghost_main.x = 400;
        }
    
        if(ghost_main.y > 400){
            ghost_main.y = 397;
        }
    
        if(ghost_main.y < 0){
            ghost_main.y = 4;
        }
    
        if(frameCount % 77 === 0){
            blue_ghost.x = Math.round(random(0,400));
            blue_ghost.y = Math.round(random(0,400));
        }
        
        if(ghost_main.isTouching(blue_ghost)){
            ghost_main.destroy();
            blue_ghost.destroy();
            gameState = "end";
    }


    }


    if(gameState == "end"){
        stroke("yellow");
        fill("yellow");
        textSize(30);
        text("Game Over", 200,200);

        

    }
    drawSprites();
}



    
