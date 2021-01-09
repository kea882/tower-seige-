const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

function preload() {
getTime();


}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box8= new Box(330,235,30,40)
    box9= new Box(360,235,30,40)
    box10= new Box(390,225,30,40)
    box11= new Box(420,225,30,40)
    box12= new Box(450,225,30,40)
    box13= new Box(360,195,30,40)
    box14= new Box(390,195,30,40)
    box15= new Box(420,195,30,40)
    box16= new Box(390,155,30,40)
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon)
    slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    //strokeWeight(4);
    
    slingshot.display();  
    

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}
async function getTime(){
var response=fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
var responseJSON=await response.json();
var dateTime=responseJSON.dateTime;
var hour=dateTime.slice(11,13)
if(hour>=06&& hour<=19){

bg="sprites/bg.png";
}
else{
    bg="sprites/bg2.png"

}
backgroundImg=loadImage(bg)
}




