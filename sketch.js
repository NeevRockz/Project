var  object;  
var wall,speed,weight, deformation ,wall2;





function setup() {
  createCanvas(1600,400);
  object=createSprite(50,200,50,50);
  wall=createSprite(1400,200,60,height/2);
  wall2=createSprite(1375,200,90,height/2);
  speed=random(55,90);
  weight = random(400,1500);
  deformation = 0.5 * weight * speed * speed/22509;
  object.velocityX=speed;
  wall2.visible=false;
}

function draw() {
  background(255,255,255);  

console.log(deformation);

  wall.shapeColor=0;

 
 

if(wall2.x-object.x <(object.width+wall2.width)/2 ){
object.velocityX=0;




if(deformation>180){
  object.shapeColor=color(255,0,0)

}

if(deformation<180 && deformation>100){
  object.shapeColor=color(230,230,0)

}
if(deformation<100){
  object.shapeColor=color(0,255,0)

}

}  drawSprites();
text("Deformation:",deformation,1300,50,fill("black"))
}
