var runner,path;
var runnerImg,pathImg;
var rightEdge,leftEdge;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
runnerImg=loadAnimation("Runner-1.png","Runner-2.png");  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;
rightEdge = createSprite(410,0,100,800);
rightEdge.visibile=false;
 leftEdge = createSprite(0,0,100,800);
 leftEdge.visibile=false;
runner=createSprite(180,340,30,30)
runner.addAnimation("Jackson",runnerImg);
runner.scale=0.08;
}

function draw() {
  background(0);
  path.velocityY=4;
  runner.collide(rightEdge,leftEdge);
  runner.x = World.mouseX
  edge=createEdgeSprites();
  runner.collide(edge[3]);
  runner.collide(leftEdge);
  runner.collide(rightEdge);
  if(path.y > 400 ){
    path.y = height/2;
  }
  drawSprites();
}
