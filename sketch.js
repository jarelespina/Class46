var player, lemons, enemies, ground, ground1;
var obstacle, playerImg, obstacleImg, playerHP, HP1, HP2, HP3, HP4, HP5, HP6;
var groundGroup, count;

function preload(){

playerImg = loadImage("images/heart.png");
obstacleImg = loadImage("images/spikes-png.png");
HP1 = loadImage("images/healthbar1.png");
HP2 = loadImage("images/healthbar2.png");
HP3 = loadImage("images/healthbar3.png");
HP4 = loadImage("images/healthbar4.png");
HP5 = loadImage("images/healthbar5.png");
HP6 = loadImage("images/healthbar6.png");

}

function setup(){
  createCanvas(displayWidth - 30,displayHeight - 150);  
  
  groundGroup = new Group();
  player = createSprite(displayWidth/2,500,50,50)
  player.addImage(playerImg);
  player.scale = 0.1;
  count = 0

  playerHP = createSprite(displayWidth/2, displayHeight/2 - 500,100, 20);
  playerHP.addImage(HP1);

  ground = createSprite(displayWidth/2, displayHeight - 200,2000,100)
  ground.x = ground.width/2
  ground.addColor = "white";
  
  ground1 = createSprite(displayWidth/2 + 1700, displayHeight, 800,100)


  groundGroup.add(ground);
  groundGroup.add(ground1);
}

function draw(){
  background("black");
  //console.log(groundGroup.y);
  ground.velocityX = -2;


   if (keyDown("d") && player.y >460){
    player.x = player.x + 10;
    player.y = player.y -15;

  } if (keyDown("a")&& player.y >400){
    player.x = player.x - 10;
    player.y = player.y -15;
  }
 
  if(ground.x < 1000){
    ground.x = ground.width/2
  }

  if(player.isTouching(obstacle)){
    count = count + 1
  }

  ground.velocityX = -2;

  player.velocityY = player.velocityY + 0.5; 

  player.collide(ground);
  player.collide(ground1);

  obstacles();

  switch(count){
    case 1: playerHP.addImage(HP1);
    break;
    case 2: playerHP.addImage(HP2);
    break;
    case 3: playerHP.addImage(HP3);
    break;
    case 4: playerHP.addImage(HP4);
    break;
    case 5: playerHP.addImage(HP5);
    break;
    case 6: playerHP.addImage(HP6);
    break;
    default: playerHP.addImage(HP1);
    break;
  }

  drawSprites();
}

function obstacles(){
  if(frameCount%110===0){
    obstacle = createSprite(displayWidth,displayHeight/2 + 270, 50,200);
    obstacle.addImage(obstacleImg);
    obstacle.scale = 0.2;
    obstacle.velocityX = -7;
  }
}