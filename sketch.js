
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;
var bone, BoneIMG;
var dog, dogIMG;

function preload(){
bg = loadImage('background.jpg');
dogIMG = loadImage('PuppySittingEdited.png');
BoneIMG = loadImage('BoneImage.png');
}
function setup() {
  createCanvas(900,550);
  engine = Engine.create();
  world = engine.world;
  
  dog = createSprite(World.mouseX,450);
  dog.scale = 0.3;
  dog.addImage(dogIMG);

  image(bg,0,0,width, height);    

}


function draw() 
{
  Engine.update(engine);

  

  
  drawSprites();
}

function spawnBones(){


if(framCount % 150 === 0){
  bone = createSprite(Math.round(random(100,500)));
  bone.scale = 0.4;
  bone.addImage();
}
}