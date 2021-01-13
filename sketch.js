const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    Ground1 = new ground(600,height,1200,20);
 
    
    box1= new box (500,360,50,50);
    box2= new box (520,360,50,50);
    box3= new box (540,360,50,50);
    box4= new box (560,360,50,50);
    box5= new box (580,360,50,50);
    box6= new box (600,360,50,50);

    box7= new box (510,330,50,50);
    box8= new box (530,330,50,50);
    box9= new box (550,330,50,50);
    box10= new box (570,330,50,50);
    box11= new box (590,330,50,50);

    box12= new box (520,310,50,50);
    box13= new box (540,310,50,50);
    box14= new box (560,310,50,50);
    box15= new box (580,310,50,50);

    box16= new box (530,280,50,50); 
    box17= new box (550,280,50,50);
    box18= new box (570,280,50,50);

    box19= new box (540,250,50,50);
    box20= new box (560,250,50,50);

    box21= new box (550,220,50,50);



}







function draw(){
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();

Ground1.display();

drawSprites()
}

function mouseDraged(){
Matter.body.setPostion(ball.body,{x:mouseY,y:mouseY})

}

function mouseRelesed(){
spring.release

}









