var canvas;
var bg1,bg2,bg3,bg4,bg5;
var bg1Img,bg2Img,bg3Img,bg4Img,bg5Img;
var brick, bricks;
var level = 0;
var ball, ballImg;
var paddle;
var edges;
var irene, ireneImg;
var wendy, wendyImg;
var seulgi, seulgiImg;
var jin, jinImg;
var taehyung, taehyungImg;
var jungkook, jungkookImg;
var bat, batImg, castle, castleImg, intcastle,intcastleImg;
var gun, gunImg , thanos, thanosImg;
var invisiblegr, invisiblegr2;
var reset,play;

function preload(){
ballImg = loadImage("ball.png");
batImg = loadImage("bat.png");
castleImg = loadImage("castle.png");
gunImg = loadImage("gun.png");
ireneImg = loadImage("irene.png");
jinImg = loadImage("Jin.png");
jungkookImg = loadImage("JK.png");
seulgiImg = loadImage("seulgi.png");
thanosImg = loadImage("thanos.png");
taehyungImg = loadImage("V.png");
wendyImg = loadImage("wendy.png");
intcastleImg = loadImage("interior castle.png");
bg2Img  = loadImage("island2.png");
bg3Img = loadImage("island3.png");
bg4Img = loadImage("night island.png");
bg1Img = loadImage("island1.png");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  jin = createSprite(731, 999, 50, 50);
  jin.addImage(jinImg);
  jin.scale = 0.3;
  //jin.visible = false;

  bat  = createSprite(displayWidth/2+400, displayHeight-500, 50, 50);
  bat.addImage(batImg);
  bat.scale = 0.5;
  bat.visible = false;

  castle = createSprite(1227, 704, 50, 50);
  castle.addImage(castleImg);
  castle.scale = 1;
}

function draw(){
  background(bg1Img);
  console.log(mouseX,mouseY);
  
  if(keyDown("right_Arrow")){
    jin.x = jin.x+5;
  if(jin.y<50){
      jin.y = 50;
      }
    }

  if(keyDown("left_Arrow")){
    jin.x = jin.x-5;
  if(jin.x<50){
      jin.x = 50;
      }
    }

    if(keyDown("down_Arrow")){
      jin.y = jin.y+5;
    if(jin.y<788){
        jin.y = 788;
        }
      }
  
    if(keyDown("up_Arrow")){
      jin.y = jin.y-5;
    if(jin.x<788){
        jin.x = 788;
        }
      }

  if((jin.x === 1202) && (jin.y === 878)){
    level = 2;
  }
  jin.depth = castle.depth+1;
  if(level === 2){
    background(bg2Img);
  }

drawSprites();
}
