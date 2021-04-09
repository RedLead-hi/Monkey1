
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.2
  ground=createSprite(400,350,900,10)
  ground.velocityX=-2
  FoodGroup=new Group()
  obstacleGroup = new Group()
}


function draw() {
background("lightBlue")
  if (ground.x<200){
    ground.x=400
  }
  if (keyDown("space")){
    monkey.velocityY=-10   
  }
  monkey.velocityY+=1
  monkey.collide(ground)
  food()
  obstacles()
  drawSprites()
  text("score="+score,500,50)
  score=score+1
  if (obstacleGroup.isTouching(monkey)){
    ground.velocityX=0
    monkey.velocityY=0
obstacleGroup.setVelocityXEach(0)
    FoodGroup.setVelocityXEach(0)
  }
}

function food(){
  if (frameCount%100===0){
    banana = createSprite(600,random(120,200),40,10) 
    banana.velocityX=-5
    banana.addImage(bananaImage)
    banana.scale=0.1
    FoodGroup.add(banana)
  }
}

function obstacles(){
   if (frameCount%100===0){
   obstacle = createSprite(800,320,10,40)
   obstacle.velocityX=-5
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.1
    obstacleGroup.add(obstacle)
}
}





