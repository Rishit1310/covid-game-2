const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,rand,image,infected,doctor,doctorimg,infectedimg,man1,man2,man3,man4,npcgroup;
var timer=1000

function preload(){
    infectedimg=loadImage("corona.png")
    doctorimg=loadImage("doctor.png")
    man1=loadImage("man.png")
    man2=loadImage("man2.png")
    man3=loadImage("man3.png")
    man4=loadImage("man4.png")
}
function setup(){
createCanvas(900,500)

engine=Engine.create()
world=engine.world


infected=createSprite(500,300,10,10)
infected.addImage(infectedimg)
doctor=createSprite(300,300,30,30)
doctor.addImage(doctorimg)
doctor.scale=0.5
infected.scale=0.5
npcgroup=createGroup();

}

function draw(){
    background("red")
    timer=Math.round(timer-0.05)
    text("Timer:"+timer,750,50)
    Engine.update(engine)
    text(mouseX+","+mouseY,mouseX,mouseY)
//------------npc creation-------------------------


    
//------------------doctor controls---------------
        if(keyDown("w")){
            doctor.position.y-=5
        }
        if(keyDown("a")){
            doctor.position.x-=5
        }   
        if(keyDown("s")){
            doctor.position.y+=5
        }    
        if(keyDown("d")){
            doctor.position.x+=5
        }
//---------------covid controls----------------------
        if(keyDown("UP")){
            infected.position.y-=5
        }
        if(keyDown("down")){
            infected.position.y+=5
        }

        if(keyDown("left")){
            infected.position.x-=5
        }
        if(keyDown("right")){
            infected.position.x+=5
        }
//------------------npc--------------------------------------
       
           
           newnpc();

        drawSprites()
}

function newnpc(){
    if(frameCount%100===0){

        npc1=createSprite(random(20,700),random(20,500))
        rand=Math.round(random(1,4))
        if(rand==1){
            npc1.addImage(man1)
            npc1.scale=1.3
        }
        else if(rand==2){
            npc1.addImage(man2)
            npc1.scale=1.3
        }
        else  if(rand==3){
            npc1.addImage(man3)
            npc1.scale=0.2
        }
        else   if(rand==4){
            npc1.addImage(man4)
            npc1.scale=0.5
        }
        npc1.lifetime=200
        npcgroup.add(npc1)
    }
}