var runner,path;
var runnerImg,pathImg;
var rightEdge,leftEdge;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg=loadAnimation("path.png");
runnerImg=loadAnimation("Runner-1.png,Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSpite(200,200);
  path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;
if(path.y > 400 ){
  path.y = height/2;
  runner.addImage(runnerImg);

}
}

function draw() {
  background(0);
 rightEdge = createSpite(400,0,20,400);
 leftEdge = createSpite(0,0,20,400);
  runner.collide(rightEdge,leftEdge);
  runner.y = Word.mouseY

 


}
