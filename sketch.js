//Create variables here
var dog;
var dogImg;

var happyDog;
var happyImg;

var database;
var foodStock;
var foodCount;

function preload(){
	//load images here#
dogImg = loadImage("images/dogImg.png")
happyImg = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);

	database = firebase.database();

dog = createSprite(250,300,20,20)
dog.addImage(dogImg)
dog.scale=0.3

foodStock = database.ref('Food');
foodStock.on("value", function readStock(data){
  foodCount=data.val();
})



}


function draw() {  
background(44,149,80);
  
if(keyWentDown(UP_ARROW)){
    if(foodCount<=0){
      foodCount=0;

    }else{

      foodCount=foodCount-1;

    } 
    database.ref('/').update({
      Food:foodCount
    })
    dog.addImage(happyImg);
  }

  
  if(keyWentUp(UP_ARROW)){
    
    dog.addImage(dogImg);
  }


  drawSprites();
  fill(255,255,254);
  stroke("black");
  // string concatentanation
  text("Food remaining : " + foodCount,180,170);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Tom Milk!",130,10,300,20);

drawSprites();
}



