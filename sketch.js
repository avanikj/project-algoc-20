var fixed_rect,moving_rect;


function setup() {
  createCanvas(800,400);
  fixed_rect = createSprite(200, 200, 50, 50);
  moving_rect = createSprite(300,300,50,50);
}

function draw() {
  background("lightgreen");
  
  moving_rect.x = mouseX;
  moving_rect.y = mouseY;

  if(moving_rect.x -fixed_rect.x <fixed_rect. width/2+moving_rect.width/2
    && fixed_rect.x -moving_rect.x <fixed_rect. width/2+moving_rect.width/2
    && moving_rect.y -fixed_rect.y <fixed_rect. height/2+moving_rect.height/2
    && fixed_rect.y -moving_rect.y <fixed_rect. height/2+moving_rect.height/2){
     
       fixed_rect.shapeColor = "red";
       moving_rect.shapeColor = "red";
  }
  else{
    fixed_rect.shapeColor = "green";
    moving_rect.shapeColor = "green";



  }
  drawSprites();
}