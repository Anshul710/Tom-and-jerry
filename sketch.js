
function preload() {
    //load the images here
    bg = loadImage ("images/garden.png");
    tom1 = loadAnimation ("images/cat1.png")
    tom2 = loadAnimation ("images/cat2.png","images/cat3.png")
    tom3 = loadAnimation ("images/cat4.png")
    jerry1 = loadAnimation ("images/mouse1.png")
    jerry2 = loadAnimation ("images/mouse2.png","images/mouse3.png")
    jerry3 = loadAnimation ("images/mouse4.png")
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite (870,600);
    tom.scale = 0.2
    tom.addAnimation("sleeping1",tom1)
    jerry = createSprite (200,600);
    jerry.scale = 0.2
    jerry.addAnimation("standing1",jerry1)

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x <tom.width/4+jerry.width/4){
tom.velocityX = 0;
tom.addAnimation("sitting",tom3)
tom.changeAnimation("sitting")

jerry.addAnimation("lastImage",jerry3)
jerry.changeAnimation("lastImage")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("running",tom2) 
      tom.changeAnimation("running")

      jerry.addAnimation("teasing",jerry2)
      jerry.changeAnimation("teasing")
  }
   
}
