//variables

var
  gun, gun_img, ballon, ballon_img, ballon_2, ballon_img_2, gun, bullets, bullet_img;

var red_group, blue_group, bullet_gp;

var gameState="play"

var score = 0
//loading images

function preload() {
  ballon_img = loadImage("b1.png")
  ballon_img_2 = loadImage("b2.png")
  gun_img = loadImage("PinClipart.com_pontoon-boat-clipart_19913.png");
  bullet_img = loadImage("hiclipart.com (2).png")
  sound_win = loadSound("12-Gauge-Pump-Action-Shotgun-Close-Gunshot-B-www.fesliyanstudios.com.mp3")

}

function setup() {
  //canvas
  createCanvas(600, 400);
  //group
  red_group = new Group();
  blue_group = new Group();
  bullet_gp = new Group();
  //gun
  gun = createSprite(541, 50, 10, 10)
  gun.addImage(gun_img)
  gun.scale = 0.1

}

//function draw
function draw() {
  text("score" + score)
  background(220);
  background("lightgrey");
  text("score" + score, 500, 50)
 
  drawSprites();


  
  if(gameState==="play"){
     gun.y = mouseY
      //calling arrow 
  if (keyDown("space")) {
    bullet_1();
    bullet.y = gun.y
   sound_win.play();

  }  
    
    
  }

else if(gameState==="end"){
blue_group .setVelocityXEach(0);  
 red_group.setVelocityXEach(0);  
  
  
  
}
  
  if(score=== 2){
 gameState==="end"    
    
    
  }
  //random function 
  r = Math.round(random(1, 4))

  if (World.frameCount % 80 === 0) {
    if (r === 2) {
      ballon_1();
    } else if (r === 3) {
      ballon_2_0()
    } else {
      ballon_1();
    }
  }

  //destroy functions
  if (bullet_gp.isTouching(red_group)) {
    red_group.destroyEach();
    score = score + 1

  }

  if (bullet_gp.isTouching(blue_group)) {
    blue_group.destroyEach();
    score = score + 2

  }

  if (score === 50) {
    sound_win.play();



  }


}



//ballons  and bullet functions
function ballon_1() {
  ballon = createSprite(10, Math.round(random(20, 370)), 10, 10);
  ballon.addImage(ballon_img)
  ballon.scale = 0.1
  ballon.velocityX = (7 + (score / 10));
  ballon.lifetime = 600 / 7
  red_group.add(ballon);

}


function ballon_2_0() {
  ballon_2 = createSprite(10, Math.round(random(20, 370)), 10, 10);
  ballon_2.addImage(ballon_img_2);
  ballon_2.scale = 0.1;
  ballon_2.velocityX = (5 + (score / 100));
  ballon_2.lifetime = 600 / 6
  blue_group.add(ballon_2);
}

function bullet_1() {
  bullet = createSprite(480, 10, 10, 10);
  bullet.addImage(bullet_img);
  bullet.scale = 0.6
  bullet.velocityX = -6
  bullet.lifetime = 600 / 6
  bullet.setCollider("rectangle", 10, 10, 70, 50)
  bullet_gp.add(bullet)
}