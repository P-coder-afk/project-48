var mario;
var lotus;
var int1,int2,int3,int4,int5;
var b1,b2,b3,b4,b5,b6,b7;
var s1;
var brige;
var story,instructions;
var bee;
var score=0;
var mask=0;
var bird;
var shoot;
var city;
var virus;
var platformGroup,obstacleGroup,shootGroup,virusGroup;
var marioAnimation1,mariostandAnimation,obstacleAnimation,wallAnimation,groundAnimation,beeAnimation,t1Animation,t2Animation,t3Animation,t4Animation,
manh1Animation,manh2Animation,manh3Animation,manh4Animation,
manh5Animation,manAnimation,birdAnimation,s1Animation,
cityAnimation,lightpostAnimation,busAnimation,
bus2Animation,car3Animation,vk1Animation,vk2Animation,vk3Animation,vk4Animation,vk5Animation,maskAnimation,mask2Animation,shootAnimation,
shootingAnimation,vAnimation,antivirusAnimation,lotusAnimation,bAnimation,rainAnimation,storyAnimation,instructionsAnimation;
var man,manh1,manh2,manh3,manh4,manh5,saveSound,pageSound,enterSound;
var BEGIN=0; 
var PLAY=1;
var REPLAY=2;

var gameState=BEGIN;
var vk1,vk2,vk3,vk4,vk5,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13;
var r1,r2,r3;
var bus,bus2,car3;
var mask1,mask2,mask3,mask4,mask5,mask6,mask7;
var antivirus;
function preload()
{


  //loading player animation.
  marioAnimation1=loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png","run7.png","run8.png");
  beeAnimation=loadAnimation("bee1.png","bee2.png");
  obstacleAnimation=loadAnimation("flight.png");
  groundAnimation=loadAnimation("road.png.jpg");  
 //loading building animations.
  b1Animation=loadAnimation("building1.png.png");
  b2Animation=loadAnimation("building2.png.png");
  b3Animation=loadAnimation("building3.png.png");
  b4Animation=loadAnimation("building4.png.png");
  b5Animation=loadAnimation("building5.png.png");
  b6Animation=loadAnimation("building6.png");
  b7Animation=loadAnimation("building7.png");
 //loading tree animations.
  t1Animation=loadAnimation("tree1.png.png");
  t2Animation=loadAnimation("tree2.png.png");
  t3Animation=loadAnimation("tree3.png.png");
  t4Animation=loadAnimation("tree4.png.png");
  bAnimation=loadAnimation("bush.png.png");
  //loading characters animation.
  manh1Animation=loadAnimation("manh1.png");
  manh2Animation=loadAnimation("manh2.png");
  manh3Animation=loadAnimation("manh3.png");
  manh4Animation=loadAnimation("manh4.png");
  manh5Animation=loadAnimation("manh5.png");
  manAnimation=loadAnimation("man.png");
  birdAnimation=loadAnimation("crow.png");
  s1Animation=loadAnimation("sign1.png");
  cityAnimation=loadAnimation("city.png");
  lightpostAnimation=loadAnimation("lightpost.png"); 
//loading transport animation.
  busAnimation=loadAnimation("bus.png");
bus2Animation=loadAnimation("bus2.png");
car3Animation=loadAnimation("car3.png");
//loading virus king animation.
vk1Animation=loadAnimation("vk1.png");
vk2Animation=loadAnimation("vk2.png");
vk3Animation=loadAnimation("vk3.png");
vk4Animation=loadAnimation("vk4.png");
vk5Animation=loadAnimation("vk5.png");
//loading game objects.
maskAnimation=loadAnimation("mask.png");
shootAnimation=loadAnimation("shot1.png.png","shot2.png.png");
shootingAnimationr=loadAnimation("shooting.png");
mariostandAnimation=loadAnimation("run1.png");
brigeAnimation=loadAnimation("brige.png");
vAnimation=loadAnimation("virus.png");
antivirusAnimation=loadAnimation("antivirus.png.png");
lotusAnimation=loadAnimation("lotus.png");
rainAnimation=loadAnimation("rain.png");
storyAnimation=loadAnimation("story.png");
instructionsAnimation=loadAnimation("instructions.png");
//loading sounds.
saveSound=loadSound("mixkit-fairy-bell-bless-864.wav");
pointsSound=loadSound("mixkit-melodic-game-over-956.wav");
gameOverSound=loadSound("mixkit-wrong-answer-fail-notification-946.wav");
shootSound=loadSound("mixkit-short-laser-gun-shot-1670.wav");
pageSound=loadSound("mixkit-ominous-drums-appear-228.wav");
enterSound=loadSound("mixkit-quick-win-video-game-notification-269.wav");
}

function setup() {
  //Creating canvas equal to width and height of display.
  createCanvas(displayWidth,668);
  var countDistanceX = 0;
  var platform;
  
 


  
 
 //creating a group.
 shootGroup= createGroup();
platformGroup= createGroup();
obstacleGroup=createGroup();
//adding platforms to stand for mario.
for (var i=0;i<200;i++)
 {
   frameRate(30);
    platform = new Platform(countDistanceX);
    platformGroup.add(platform.spt);//Adding each new platform to platformGroup.
    countDistanceX = countDistanceX + platform.spt.width ; //counting x location of next platform to be build.
    //adding wall to the game.
    if(i%3===0)
    {
    
    platformGroup.add(platform.spt);
    
    }
    //adding obstacles to the game
    if(i%25==0)
    {
    obstacle=new Obstacle(countDistanceX);
     //adding obstacles to the game.
 obstacleGroup.add(obstacle.spt);
 
    }
  

    
     
  }

//backgrounds.
  
  for (i =300; i<45000; i=i+500){
    city=createSprite(i,480);
    city.addAnimation("city",cityAnimation);
    city.scale=1;
  }










//buildings.

  b1=createSprite(1003,430);
  b1.addAnimation("b1",b1Animation);
  b1.scale=1;

  b2=createSprite(3003,423);
  b2.addAnimation("b2",b2Animation);
  b2.scale=0.9;

  b3=createSprite(5003,500);
  b3.addAnimation("b3",b3Animation);
  b3.scale=0.9;

  b4=createSprite(7003,500);
  b4.addAnimation("b4",b4Animation);
  b4.scale=0.9;

  b5=createSprite(9003,500);
  b5.addAnimation("b5",b5Animation);
  b5.scale=0.9;

  b6=createSprite(10003,420);
  b6.addAnimation("b6",b6Animation);
  b6.scale=0.9;

  b7=createSprite(18003,450);
  b7.addAnimation("b7",b7Animation);
  b7.scale=0.9;

//characters.

  man=createSprite(10000,550);
  man.addAnimation("man",manAnimation);
  man.scale=0.5;

  manh1=createSprite(20500,570);
  manh1.addAnimation("manh1",manh1Animation);
  manh1.scale=0.3;

  manh2=createSprite(20900,570);
  manh2.addAnimation("manh2",manh2Animation);
  manh2.scale=0.3;

  manh3=createSprite(30000,570);
  manh3.addAnimation("manh3",manh3Animation);
  manh3.scale=0.3;

  manh4=createSprite(40000,570);
  manh4.addAnimation("manh4",manh4Animation);
  manh4.scale=0.3;

  manh5=createSprite(42000,570);
  manh5.addAnimation("manh5",manh5Animation);
  manh5.scale=0.3;

  //lightposts.

  for (var i =300; i<45000; i=i+500){
    lightpost=createSprite(i,480);
    lightpost.addAnimation("lightpost",lightpostAnimation);
    lightpost.scale=2.5;
  }

  //vechiles.
  
bus=createSprite(300,540);
bus.addAnimation("bus",busAnimation);
bus.scale=3.5;
bus.velocityX=27.5;
   
bus2=createSprite(10000,540);
bus2.addAnimation("bus2",bus2Animation);
bus2.scale=3.5;
bus2.velocityX=-27.5;

car3=createSprite(20000,560);
car3.addAnimation("car3",car3Animation);
car3.scale=0.7;
car3.velocityX=-30;

//adding new player.
  
  mario = new Player();

  story=createSprite(100,980);
  story.addAnimation("story",storyAnimation);
  story.scale=1;

  instructions=createSprite(100,980);
  instructions.addAnimation("instructions",instructionsAnimation);
  instructions.scale=1;

  

  brige=createSprite(38000,560);
  brige.addAnimation("brige",brigeAnimation);
  brige.scale=1;
  brige.setCollider("circle",0,50,200);

  //king covid.
 
  vk5=createSprite(7003,490);
  vk5.addAnimation("vk5",vk5Animation);
  vk5.scale=0.4;
  vk5.visible=false;

  vk4=createSprite(10003,500);
  vk4.addAnimation("vk4",vk4Animation);
  vk4.scale=0.4;
  vk4.visible=false;

  vk3=createSprite(38000,500);
  vk3.addAnimation("vk3",vk3Animation);
  vk3.scale=0.4;
  vk3.visible=false;

  vk2=createSprite(39000,500);
  vk2.addAnimation("vk2",vk2Animation);
  vk2.scale=0.4;
  

  vk1=createSprite(49000,500);
  vk1.addAnimation("vk1",vk1Animation);
  vk1.scale=0.6;

//warrior covid.

  v1=createSprite(3003,500);
  v1.addAnimation("v1",vAnimation);
  v1.scale=0.09;
  v1.visible=false;
  
  v2=createSprite(3003,580);
  v2.addAnimation("v2",vAnimation);
  v2.scale=0.09;
  v2.visible=false;

  
  v3=createSprite(5003,500);
  v3.addAnimation("v3",vAnimation);
  v3.scale=0.09;
  v3.visible=false;

  v4=createSprite(5003,580);
  v4.addAnimation("v4",vAnimation);
  v4.scale=0.09;
  v4.visible=false;

  v5=createSprite(5003,540);
  v5.addAnimation("v5",vAnimation);
  v5.scale=0.09;
  v5.visible=false;

  v6=createSprite(7003,540);
  v6.addAnimation("v6",vAnimation);
  v6.scale=0.09;
  v6.visible=false;

  v7=createSprite(7003,590);
  v7.addAnimation("v7",vAnimation);
  v7.scale=0.09;
  v7.visible=false;

  v8=createSprite(7003,500);
  v8.addAnimation("v8",vAnimation);
  v8.scale=0.09;
  v8.visible=false;

  v9=createSprite(7003,490);
  v9.addAnimation("v9",vAnimation);
  v9.scale=0.09;
  v9.visible=false;

  v10=createSprite(7003,550);
  v10.addAnimation("v10",vAnimation);
  v10.scale=0.09;
  v10.visible=false;

  v11=createSprite(10003,540);
  v11.addAnimation("v11",vAnimation);
  v11.scale=0.09;
  v11.visible=false;

  v12=createSprite(10003,580);
  v12.addAnimation("v12",vAnimation);
  v12.scale=0.09;
  v12.visible=false;

  v13=createSprite(10003,500);
  v13.addAnimation("v13",vAnimation);
  v13.scale=0.09;
  v13.visible=false;

  //masks.

mask1=createSprite(1003,490);
mask1.addAnimation("mask1",maskAnimation);
mask1.scale=1.5;
mask1.visible=false;

mask2=createSprite(3003,430);
mask2.addAnimation("mask2",maskAnimation);
mask2.scale=1.5;
mask2.visible=false;

mask3=createSprite(3003,400);
mask3.addAnimation("mask3",maskAnimation);
mask3.scale=1.5;
mask3.visible=false;

mask4=createSprite(5003,400);
mask4.addAnimation("mask4",maskAnimation);
mask4.scale=1.5;
mask4.visible=false;

mask5=createSprite(5003,420);
mask5.addAnimation("mask5",maskAnimation);
mask5.scale=1.5;
mask5.visible=false;

mask6=createSprite(7003,500);
mask6.addAnimation("mask6",maskAnimation);
mask6.scale=1.5;
mask6.visible=false;

mask7=createSprite(7003,520);
mask7.addAnimation("mask7",maskAnimation);
mask7.scale=1.5;
mask7.visible=false;

//players helper.

antivirus=createSprite(105,450);
antivirus.addAnimation("antivirus",antivirusAnimation);
antivirus.scale=0.3;


//group of covid warriors.

virusGroup=new Group();


//strongest thing.

lotus=createSprite(45500,450);
lotus.addAnimation("lotus",lotusAnimation);
lotus.scale=0.5;






  


  }







function draw() {
  background('cyan');
  //code to move the camera.
  translate(  -mario.spt.x + width/2 , 0);

  if(gameState==BEGIN)//Beginning state.
  {
    

mario.spt.pause();

    virusGroup.visible=false;
    platformGroup.visible=false;
obstacleGroup.visible=false;
antivirus.visible=false;
lotus.visible=false;
b1.visible=false;
b2.visible=false;
b3.visible=false;
b4.visible=false;
b5.visible=false;
b6.visible=false;
b7.visible=false;
man.visible=false;
manh1.visible=false;
manh2.visible=false;
manh3.visible=false;
manh4.visible=false;
manh5.visible=false;
v1.visible=false;
v2.visible=false;
v3.visible=false;
v4.visible=false;
v6.visible=false;
v7.visible=false;
v8.visible=false;
v9.visible=false;
v10.visible=false;
v11.visible=false;
v12.visible=false;
v13.visible=false;
virusGroup.visible=false;
mask1.visible=false;
mask2.visible=false;
mask3.visible=false;
mask4.visible=false;
mask5.visible=false;
mask6.visible=false;
mask7.visible=false;

stroke('red');
textSize('20');
textFont("Algerian");
fill('purple');
text("HIT 'S' TO KNOW WHO IS THE BOY AND WHAT IS ON THE GAME",100,300);


stroke('red');
textSize('20');
textFont("Algerian");
fill('purple');
text("HIT 'ENTER' TO PLAY",100,250);

stroke('red');
textFont("Algerian");
textSize('20');
fill('purple');
text("HIT ' I ' TO KNOW GOALS AND WARNINGS AND ALSO HOW TO CONTROL IT",100,200);

if(keyDown("s")){
  story.velocityY=-1.5;
  pageSound.play();
}

if(keyDown("i")){
  instructions.velocityY=-2;
  pageSound.play();
}

if(keyDown("enter")){
  enterSound.play();
  b1.addAnimation("b1",b1Animation);
  b2.addAnimation("b2",b2Animation);
  b3.addAnimation("b3",b3Animation);
  b4.addAnimation("b4",b4Animation);
  b5.addAnimation("b5",b5Animation);
  b6.addAnimation("b6",b6Animation);
  b7.addAnimation("b7",b7Animation);
  gameState=PLAY;
}



  }
 
  

   else if(gameState==PLAY)//Play state.
  {  



mario.spt.play();   

    virusGroup.visible=true;
    platformGroup.visible=true;   
obstacleGroup.visible=true;
antivirus.visible=true;
lotus.visible=true;
b1.visible=true;
b2.visible=true;
b3.visible=true;
b4.visible=true;
b5.visible=true;
b6.visible=true;
b7.visible=true;
man.visible=true;
manh1.visible=true;
manh2.visible=true;
manh3.visible=true;
manh4.visible=true;
manh5.visible=true;



    
    
    

    stroke('yellow');
    textSize(20);
    fill('red');
    textFont("Algerian");
    text("Your Score = " + score , mario.spt.x,50);

    stroke('yellow');
    textSize(20);
    fill('red');
    textFont("Algerian");
    text("Mask Collected = " + mask , mario.spt.x,100);

    stroke('green');
    textSize(15);
    fill('yellow');
    textFont("Algerian");
    text("I will be very helpful,if anyone can give me 1 mask by pressing 'g' ",man.x,150);
    
    spawnCovid();

if(antivirus.isTouching(vk4)){
  antivirus.destroy();
}



    //code after touching lotus.

if(mario.spt.isTouching(lotus)){
saveSound.play();
lotus.destroy();
virusGroup.destroyEach();
vk1.velocityX=-160;
score=score+100;
stroke('red');
fill('purple');
textFont("Algerian");
text("Hurrah!!! you killed all the viruses and saved the earth",mario.spt.x,200);
reset();
}

if(mario.spt.isTouching(b1)){
  b1.destroy();
  mask1.visible=true;
  b1=createSprite(1003,450);
  b1.addAnimation("b1",t2Animation);
  b1.scale=0.9;
}



if(mario.spt.isTouching(b2)){
  b2.destroy();
 mask3.visible=true;
v1.visible=true;
v2.visible=true;
v1.velocityX=-5;
v2.velocityX=-3;
b2=createSprite(3003,450);
  b2.addAnimation("b2",t2Animation);
  b2.scale=0.9;
}

if(mario.spt.isTouching(b3)){
  b3.destroy();
  mask4.visible=true;
  mask5.visible=true;
v3.visible=true;
v4.visible=true;
v5.visible=true;
v3.velocityX=-3;
v4.velocityX=-4;
v5.velocityX=-5;
b3=createSprite(5003,450);
  b3.addAnimation("b3",t3Animation);
  b3.scale=0.9;
}
if(mario.spt.isTouching(b4)){
  b4.destroy();
  mask5.visible=true;
  mask6.visible=true;
  v6.visible=true;
  v7.visible=true;
  v8.visible=true;
  v9.visible=true;
  v10.visible=true;
  vk5.visible=true;
  v6.velocityX=-5;
  v7.velocityX=-4;
  v8.velocityX=-5;
  v9.velocityX=-3;
  v10.velocityX=-5;
  vk5.velocityX=-5;
  b4=createSprite(7003,465);
  b4.addAnimation("b4",t1Animation);
  b4.scale=0.9;
  }

  if(mario.spt.isTouching(b6)){
    b6.destroy();
    v11.visible=true;
      v12.visible=true;
      v13.visible=true;
      v11.velocityX=-5;
      v12.velocityX=-6;
      v13.velocityX=-5;
      vk4.visible=true;
      vk4.velocityX=-6;
     
  }

if(mario.spt.isTouching(mask1)){
  pointsSound.play();
  mask1.destroy();
  mask=mask+1;
  score=score+5;
  
}

if(mario.spt.isTouching(mask2)){
  pointsSound.play();
  mask2.destroy();
mask=mask+1;
score=score+5;

}

if(mario.spt.isTouching(mask3)){
  pointsSound.play();
  mask3.destroy();
mask=mask+1;
score=score+5;
pointsSound.play();
}

if(mario.spt.isTouching(mask4)){
  pointsSound.play();
  mask4.destroy();
  mask=mask+1;
  score=score+5;
  pointsSound.play();
}

if(mario.spt.isTouching(mask5)){
  pointsSound.play();
  mask5.destroy();
  mask=mask+1;
  score=score+5;
}

if(mario.spt.isTouching(mask6)){
  pointsSound.play();
  mask6.destroy();
  mask=mask+1;
score=score+5;
}

//code after killing king covids.

if(shootGroup.isTouching(vk5)){
  pointsSound.play();
  vk5.destroy();
  score=score*2;
}

if(shootGroup.isTouching(vk4)){
  pointsSound.play();
  vk4.destroy();
  score=score*8;
}

if(shootGroup.isTouching(vk3)){
  pointsSound.play();
  vk3.destroy();
  score=score*9;
}

if(shootGroup.isTouching(vk2)){
  pointsSound.play();
  vk2.destroy();
  score=score*10;
}

if(shootGroup.isTouching(vk1)){
  vk1.destroy();
  pointsSound.play();
  score=score*20;
}

//code after killing warrior covids.

if(shootGroup.isTouching(v1)){
  pointsSound.play();
  v1.destroy();
  score=score+5;
  vk2.velocityX=-80;
}

if(shootGroup.isTouching(v2)){
  pointsSound.play();
  v2.destroy();
  score=score+5;
}

if(shootGroup.isTouching(v3)){
  pointsSound.play();
  v3.destroy();
  score=score+5;
}

if(shootGroup.isTouching(v4)){
  pointsSound.play();
  v4.destroy();
  score=score+5;
}

if(shootGroup.isTouching(v5)){
  pointsSound.play();
  v5.destroy();
  score=score+5;
}

if(shootGroup.isTouching(v6)){
  pointsSound.play();
  v6.destroy();
  score=score+5;
}

if(shootGroup.isTouching(v7)){
  pointsSound.play();
  v7.destroy();
  score=score+5;
}

if(shootGroup.isTouching(v8)){
  pointsSound.play();
  v8.destroy();
  score=score+5;
}


if(shootGroup.isTouching(v9)){
  pointsSound.play();
  v9.destroy();
  score=score+5;
}


if(shootGroup.isTouching(v10)){
  pointsSound.play();
  v10.destroy();
  score=score+10;
}

if(shootGroup.isTouching(v11)){
  pointsSound.play();
  v11.destroy();
  score=score+5;
}

if(shootGroup.isTouching(v12)){
  pointsSound.play();
  v12.destroy();
  score=score+5;
}

if(shootGroup.isTouching(v13)){
  pointsSound.play();
  v13.destroy();
  score=score+5;
}

//code after shooting brige;

if(shootGroup.isTouching(brige)){
  pointsSound.play();
  brige.destroy();
  vk3.visible=true;
  vk3.velocityX=-8;

}

if(antivirus.isTouching(v1)){
  pointsSound.play();
  v8.destroy();
  score=score+5;
  vk2.velocityX=-95;
}

if(antivirus.isTouching(v2)){
  pointsSound.play();
  v2.destroy();
  score=score+5;
}

if(antivirus.isTouching(v3)){
  pointsSound.play();
  v3.destroy();
  score=score+5;
}

if(antivirus.isTouching(v4)){
  pointsSound.play();
  v4.destroy();
  score=score+5;
}

if(antivirus.isTouching(v5)){
  pointsSound.play();
  v5.destroy();
  score=score+5;
}

if(antivirus.isTouching(v6)){
  pointsSound.play();
  v6.destroy();
  score=score+5;
}

if(antivirus.isTouching(v7)){
  pointsSound.play();
  v7.destroy();
  score=score+5;
}

if(antivirus.isTouching(v8)){
  pointsSound.play();
  v8.destroy();
  score=score+5;
}

if(antivirus.isTouching(v9)){
  pointsSound.play();
  v9.destroy();
  score=score+5;
}

if(antivirus.isTouching(v10)){ 
  pointsSound.play();
  v10.destroy();
  score=score+5;
}

if(antivirus.isTouching(v11)){
  pointsSound.play();
  v11.destroy();
  score=score+5;
}

if(antivirus.isTouching(v12)){
  pointsSound.play();
  v12.destroy();
  score=score+5;
}

if(antivirus.isTouching(v13)){
  pointsSound.play();
  v13.destroy();
  score=score+5;
}

if(antivirus.isTouching(vk5)){
  pointsSound.play();
  vk5.destroy();
  score=score*2;
}

if(shootGroup.isTouching(vk4)){
  pointsSound.play();
  vk4.destroy();
  score=score*8;
}







if(keyDown("space")){
  createBullet();
}



//code after the scene of touching king virus.
if(mario.spt.isTouching(vk5)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score/4;
  gameState=REPLAY;
}

if(mario.spt.isTouching(vk4)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score/8;
  gameState=REPLAY;
}


if(mario.spt.isTouching(vk3)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score/8;
  gameState=REPLAY;
}


if(mario.spt.isTouching(vk2)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score/10;
  gameState=REPLAY;
}


if(mario.spt.isTouching(vk1)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score/20;
  gameState=REPLAY;
}


//code after touching warrior viruses.

if(mario.spt.isTouching(v1)){
  gameOverSound.play();
  mario.spt.destroy();
score=score-5;
gameState=REPLAY;
}

if(mario.spt.isTouching(v2)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}

if(mario.spt.isTouching(v3)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}

if(mario.spt.isTouching(v4)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}

if(mario.spt.isTouching(v5)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}
if(mario.spt.isTouching(v6)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}
if(mario.spt.isTouching(v6)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-6;
  gameState=REPLAY;
}
if(mario.spt.isTouching(v7)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-6;
  gameState=REPLAY;
}
if(mario.spt.isTouching(v8)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}
if(mario.spt.isTouching(v9)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}

if(mario.spt.isTouching(v10)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}

if(mario.spt.isTouching(v11)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}

if(mario.spt.isTouching(v12)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}

if(mario.spt.isTouching(v13)){
  gameOverSound.play();
  mario.spt.destroy();
  score=score-5;
  gameState=REPLAY;
}

if(mario.spt.y>1200){
  gameOverSound.play();
  mario.spt.destroy();
  gameState=REPLAY;
}




if(keyDown("g")&& (mario.spt.x = man.x)){
  mask=mask-1;
score=score*2;
pointsSound.play();
}




    if(bus.isTouching(b5)){
      bus.velocityX=0;
      
    }
    if(mario.spt.isTouching(b5)){
      bus.velocityX=20;
    }
          //apply gravity to mario and set colliding with platforms.
          mario.applyGravity();
        mario.spt.collide(platformGroup);
        mario.spt.collide(brige);
        
       //Calling various function to control mario.
         if (keyDown("left"))  
                { 
                mario.moveLeft();
             }
       if (keyDown("right")) 
             { 
             mario.moveRight();
              }
        if (keyDown("up") && mario.spt.velocityY===0) 
                {
              mario.jump();
                 }

if(keyDown("r")){
  antivirus.x=antivirus.x+30;
  
}
  if(keyDown("l")){
    antivirus.x=antivirus.x-30;
  }    
  
  }

  else if(gameState==REPLAY)//replay state
  {
stroke('red');
textSize('28');
textFont("Algerian");
fill('purple');
text("GAME OVER!!! HIT 'B' TO BEGIN/REPLAY",mario.spt.x,200);



if(keyDown("b")){
  reset();
}


  }



 


   
     
 
    

   

 
  

   drawSprites();

}


  function createBullet() {
     shoot= createSprite(mario.spt.x,mario.spt.y);
    shoot.addAnimation("shoot",shootAnimation);
  shoot.velocityX = 30;
  shoot.lifetime=20;
    shoot.scale = 0.5;
    shootGroup.add(shoot); 
    mario.spt.addAnimation("mario",shootingAnimationr);
    shootSound.play();
  }
  
  

  function spawnCovid(){
    if(frameCount % 10 === 0){
    virus=createSprite(47000,height-random([250]));
virus.addAnimation("virus",vAnimation);
virus.scale=0.09;
virus.velocityX=-(40 + 3*score/100);
virusGroup.add(virus);

    }

    if(virusGroup.isTouching(mario.spt)){
      gameOverSound.play();
      mario.spt.destroy();
      score=score-5;
      gameState=REPLAY;
    }

    if(shootGroup.isTouching(virusGroup) || (antivirus.isTouching(virusGroup))){
      pointsSound.play();
      virusDestroy();
      score=score+5;
    }



  }

  function virusDestroy(){
    virusGroup.destroyEach();
    score=score+5;
  }
    

 function reset(){
   gameState=BEGIN;
   score=0;
   mask=0;
   mario = new Player();
   shootGroup.destroyEach();
virusGroup.destroyEach();
v1.destroy();
v2.destroy();
v3.destroy();
v4.destroy();
v5.destroy();
v6.destroy();
v7.destroy();
v8.destroy();
v9.destroy();
v10.destroy();
v11.destroy();
v12.destroy();
v13.destroy();

bus=createSprite(300,540);
bus.addAnimation("bus",busAnimation);
bus.scale=3.5;
bus.velocityX=27.5;
   
bus2=createSprite(10000,540);
bus2.addAnimation("bus2",bus2Animation);
bus2.scale=3.5;
bus2.velocityX=-27.5;

car3=createSprite(20000,560);
car3.addAnimation("car3",car3Animation);
car3.scale=0.7;
car3.velocityX=-30;



  story=createSprite(100,980);
  story.addAnimation("story",storyAnimation);
  story.scale=1;

  instructions=createSprite(100,980);
  instructions.addAnimation("instructions",instructionsAnimation);
  instructions.scale=1;

  

  brige=createSprite(38000,560);
  brige.addAnimation("brige",brigeAnimation);
  brige.scale=1;
  brige.setCollider("circle",0,50,200);

  //king covid.
 
  vk5=createSprite(7003,490);
  vk5.addAnimation("vk5",vk5Animation);
  vk5.scale=0.4;
  vk5.visible=false;

  vk4=createSprite(10003,500);
  vk4.addAnimation("vk4",vk4Animation);
  vk4.scale=0.4;
  vk4.visible=false;

  vk3=createSprite(38000,500);
  vk3.addAnimation("vk3",vk3Animation);
  vk3.scale=0.4;
  vk3.visible=false;

  vk2=createSprite(39000,500);
  vk2.addAnimation("vk2",vk2Animation);
  vk2.scale=0.4;
  

  vk1=createSprite(49000,500);
  vk1.addAnimation("vk1",vk1Animation);
  vk1.scale=0.6;

//warrior covid.

  v1=createSprite(3003,500);
  v1.addAnimation("v1",vAnimation);
  v1.scale=0.09;
  v1.visible=false;
  
  v2=createSprite(3003,580);
  v2.addAnimation("v2",vAnimation);
  v2.scale=0.09;
  v2.visible=false;

  
  v3=createSprite(5003,500);
  v3.addAnimation("v3",vAnimation);
  v3.scale=0.09;
  v3.visible=false;

  v4=createSprite(5003,580);
  v4.addAnimation("v4",vAnimation);
  v4.scale=0.09;
  v4.visible=false;

  v5=createSprite(5003,540);
  v5.addAnimation("v5",vAnimation);
  v5.scale=0.09;
  v5.visible=false;

  v6=createSprite(7003,540);
  v6.addAnimation("v6",vAnimation);
  v6.scale=0.09;
  v6.visible=false;

  v7=createSprite(7003,590);
  v7.addAnimation("v7",vAnimation);
  v7.scale=0.09;
  v7.visible=false;

  v8=createSprite(7003,500);
  v8.addAnimation("v8",vAnimation);
  v8.scale=0.09;
  v8.visible=false;

  v9=createSprite(7003,490);
  v9.addAnimation("v9",vAnimation);
  v9.scale=0.09;
  v9.visible=false;

  v10=createSprite(7003,550);
  v10.addAnimation("v10",vAnimation);
  v10.scale=0.09;
  v10.visible=false;

  v11=createSprite(10003,540);
  v11.addAnimation("v11",vAnimation);
  v11.scale=0.09;
  v11.visible=false;

  v12=createSprite(10003,580);
  v12.addAnimation("v12",vAnimation);
  v12.scale=0.09;
  v12.visible=false;

  v13=createSprite(10003,500);
  v13.addAnimation("v13",vAnimation);
  v13.scale=0.09;
  v13.visible=false;

  //masks.

mask1=createSprite(1003,490);
mask1.addAnimation("mask1",maskAnimation);
mask1.scale=1.5;
mask1.visible=false;

mask2=createSprite(3003,430);
mask2.addAnimation("mask2",maskAnimation);
mask2.scale=1.5;
mask2.visible=false;

mask3=createSprite(3003,400);
mask3.addAnimation("mask3",maskAnimation);
mask3.scale=1.5;
mask3.visible=false;

mask4=createSprite(5003,400);
mask4.addAnimation("mask4",maskAnimation);
mask4.scale=1.5;
mask4.visible=false;

mask5=createSprite(5003,420);
mask5.addAnimation("mask5",maskAnimation);
mask5.scale=1.5;
mask5.visible=false;

mask6=createSprite(7003,500);
mask6.addAnimation("mask6",maskAnimation);
mask6.scale=1.5;
mask6.visible=false;

mask7=createSprite(7003,520);
mask7.addAnimation("mask7",maskAnimation);
mask7.scale=1.5;
mask7.visible=false;

//players helper.

antivirus=createSprite(105,450);
antivirus.addAnimation("antivirus",antivirusAnimation);
antivirus.scale=0.3;


//group of covid warriors.

virusGroup=new Group();


//strongest thing.

lotus=createSprite(45500,450);
lotus.addAnimation("lotus",lotusAnimation);
lotus.scale=0.5;






  

 }  

