var tower, towerImg
var ghost, ghostJumpImg
var door, doorGroup
var climber , climberImg
var InvisibleBlock , InvisibleBlockGroup
var  spookySound ,  spooky
var gameState = "play"
var var1





function preload() {

  towerImg = loadImage("tower.png");

  ghostJumpImg = loadImage("ghost-jumping.png");
  ghostStaImg = loadImage("ghost-standing.png")
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  spookySound = loadSound("spooky.wav");


  


  doorGroup = new Group();
  climberGroup = new Group();
  InvisibleBlockGroup = new Group();


}


function setup() {
  createCanvas(600, 600);
  
//   creating tower
  tower = createSprite(300, 300);
  tower.addImage(towerImg);
  tower.velocityY = 1;
//   Creating ghost
  ghost = createSprite(200,200,50,50);
  ghost.addImage( ghostStaImg);
  ghost.scale = 0.3;

  var1 = createSprite(400,400,50,50);
  var1 . visible = false;
 
  

  text ("MADE BY DHANANJAY", 200,00);

  
        //  spookySound.loop(); 
        //  spookySound.loop();



}

function draw() {
  background(220);
  
  if(gameState === "play"){
    
    
    
    
    
  

  if (tower.y > 400) {
    tower.y = 300

  }
  
  if(keyDown("left_arrow")){
    ghost.x = ghost.x - 3
     
     }
  
  if(keyDown("right_arrow")){
    ghost.x = ghost.x + 3
     
     }
  
  
  if(keyDown("space")){
    ghost.velocityY = -9

   
     
     }
     
     
     if(keyDown("up_arrow")){
       ghost.velocityY = -5
       
       
      }
      
      
  
ghost.velocityY = ghost.velocityY+0.8 ;
  
  
  if(climberGroup.isTouching (ghost)){
    
    ghost.velocityY = 0;
     
     
     }
  
  if( InvisibleBlockGroup.isTouching(ghost )|| ghost.y > 600){
    
    ghost.destroy();
    
    gameState = "end"  
    
  }

  
  
  
  
  spawndoors();
  drawSprites();
  }

  if (gameState === "end"){
    
    stroke("black");
    fill("yellow");
    textSize(30);
    text("GAME OVER!" , 230 ,250);

       
  
    
  }
  
}

function spawndoors() {

  if (frameCount % 240 === 0) {
    door = createSprite(200, -50);

    door.addImage(doorImg);
    door.x = Math.round(random(120, 400))
    door.velocityY = 1;
    door.lifetime = 800;
    doorGroup.add(door);
    
    climber = createSprite(200,10);
    climber.addImage(climberImg);
    
     InvisibleBlock =createSprite(200,15);
    InvisibleBlock.width = climber.width
    InvisibleBlock.height = 2
     
    InvisibleBlock.x = door.x
    InvisibleBlock.velocityY = 1;
    InvisibleBlock.debug = true
    InvisibleBlock.visible = false
    
      InvisibleBlockGroup.add(InvisibleBlock);
    
    climber.x = door.x
    climber.velocityY = 1;
    climberGroup.add(climber);
    climber.lifetime = 800 ;
    
    ghost.depth = door.depth;
    ghost.depth = ghost.depth+1;
    
  }


}