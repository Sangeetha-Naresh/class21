var fixedrect1, movingrect,car1,car2, bus1, bus2;

var fixed2;

function setup() 
{
  createCanvas(1200,800);


  fixedrect1= createSprite(400,500,60,100);
  movingrect=createSprite(800,500,100,60);
  fixedrect1.shapeColor="green";
  movingrect.shapeColor="green";

  
 

  car1=createSprite(200,300,100,100);
  car1.shapeColor="yellow";
  car2=createSprite(800,300,100,100);
  car2.shapeColor="blue";
  car1.velocityX=5;
  car2.velocityX=-5;


  bus1=createSprite(200,100,50,50);
  bus2=createSprite(200,600,50,50);
  bus1.shapeColor="white";
  bus2.shapeColor="orange";
  bus1.velocityY=2;
  bus2.velocityY=-2;



  fixed2= createSprite(600,100,60,100);
  fixed2.shapeColor="green";

}

function draw() 
{
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  

 if( myistouch(movingrect, fixedrect1))
 {
  fixedrect1.shapeColor="red";
  movingrect.shapeColor="red";

 }
 else
 {

  fixedrect1.shapeColor="green";
  movingrect.shapeColor="green";
 }






  mybounce(car1, car2);

  mybounce(bus1,bus2);



  if( myistouch(movingrect, fixed2))
 {
   text("touched!!" , 200, 200)
 }



  
  drawSprites();
}


