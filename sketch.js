var canvas,edges;
var music;
var ground1,ground2,ground3,ground4;
var ball;
function preload(){


    
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    ground1 = createSprite(350,380,40,10)
    ground1.shapeColor = "green";
    ground2 = createSprite(290,380,40,10)
    ground2.shapeColor = "pink";
    ground3 = createSprite(230,380,40,10)
    ground3.shapeColor = "orange";
    ground4 = createSprite(170,380,40,10)
    ground4.shapeColor = "blue";
ball = createSprite(random(20,750),50,20,20)
ball.velocityX = 3
ball.velocityY = 4


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = 
    createEdgeSprites();
    ball.bounceOff(edges)
    if(ball.isTouching(ground1)&&ball.bounceOff (ground1)){
        ball.shapeColor = "green"
    }
    if(ball.isTouching(ground2)){
        ball.velocityX = 0
        ball.velocityY = 0
    }
    if(ball.isTouching(ground3)&&ball.bounceOff (ground3)){
        ball.shapeColor = "green"
    }
    if(ball.isTouching(ground4)&&ball.bounceOff (ground4)){
        ball.shapeColor = "green"
    }

    drawSprites();
    //add condition to check if box touching surface and make it box
}
