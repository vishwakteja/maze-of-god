var base, border1, boder2, boder3, boder4;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15;
var  wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25;

var victoryCup, victoryCupIMG, player1, player2, player1Image, player2Imag, player1Img, player2Img,
playerImg1 ,player1Img2, player22, player23, player24, score=0, wallGroup, van, truck, monstertruck;

var vanImg1, van2Img, van3Img, van4Img, truck, truck1img, truck2img, truck3img, truck4img;

function preload(){
player1Image=loadImage("player1.png")
player1Img=loadImage("player12.png")
playerImg1=loadImage("player13.png")
player1Img2=loadImage("player14.png")


player2Image=loadImage("player2.png")
player22=loadImage("player22.png")
player23=loadImage("player23.png")
player24=loadImage("player24.png")

victoryCupIMG=loadImage("victory-cup.png")

van1Img=loadImage("van.png")
van2Img=loadImage("van2.png")
van3Img=loadImage("van3.png")
van4Img=loadImage("van4.png")

truck1img=loadImage("truck.png")
truck2img=loadImage("truck2.png")
truck3img=loadImage("truck3.png")
truck4img=loadImage("truck4.png")


}

function setup(){
//base=firebase.database();
    createCanvas(1300, 600)
border1=createSprite(650, 50, 1100, 20)
border2=createSprite(650, 550, 1100, 20)
border3=createSprite(90, 300, 20, 520)
border4=createSprite(1210, 300, 20, 520)

wall1=createSprite(170, 130, 170, 10)

wall2=createSprite(245, 210, 10, 160)

wall3=createSprite(195, 280, 100, 10)

wall4=createSprite(320, 250, 10, 380)

wall5=createSprite(225, 380, 80, 80)

wall7=createSprite(245, 490, 300, 10)

wall8=createSprite(395, 300, 10, 350)

wall9=createSprite(495, 110, 200, 20)

wall10=createSprite(595, 190, 10, 130)

wall11=createSprite(695, 280, 10, 430)

wall12=createSprite(625,190, 50, 30 )

wall13=createSprite(740,480, 100, 10 )

wall14=createSprite(600, 350, 130, 70 )

wall15=createSprite(520, 490, 220, 20)

wall16=createSprite(505, 200, 60, 60)

wall17=createSprite(840, 320, 10, 430)

wall18=createSprite(948, 314, 200, 10)

wall19=createSprite(1050, 229, 10, 180)

wall20=createSprite(970, 144, 150, 10)

wall21=createSprite(960, 100, 260, 10)

wall22=createSprite(1095, 295, 10, 400)

wall23=createSprite(1170, 295, 30, 500)

wall24=createSprite(960, 104, 190, 10)



victoryCup=createSprite(970, 230, 60, 60)
victoryCup.addImage("victoryCup", victoryCupIMG)
victoryCup.scale=0.07

player1=createSprite(130, 75, 25, 25)
player1.addImage("player1", player1Image)
player1.scale=0.15

player2=createSprite(130, 107, 25, 25)
player2.addImage("player2", player2Image)
player2.scale=0.19


van=createSprite(500, 312, 40,20 );
van.addImage("van", van1Img)
van.scale=0.1
//wallGroup= new Group();


truck=createSprite(770, 300, 30, 30)
truck.addImage("truck", truck1img)
truck.scale=0.3
}
function draw(){
background("green")

/*wallGroup.add(wall1)
wallGroup.add(wall2)
wallGroup.add(wall3)
wallGroup.add(wall4)
wallGroup.add(wall5)
wallGroup.add(wall6)
wallGroup.add(wall7)
wallGroup.add(wall8)
wallGroup.add(wall9)
wallGroup.add(wall10)
wallGroup.add(wall11)
wallGroup.add(wall12)
wallGroup.add(wall13)
wallGroup.add(wall14)
wallGroup.add(wall15)
wallGroup.add(wall16)
wallGroup.add(wall17)
wallGroup.add(wall18)
wallGroup.add(wall19)
wallGroup.add(wall20)
wallGroup.add(wall21)
wallGroup.add(wall22)
wallGroup.add(wall23)
wallGroup.add(wall24)*/


/*if(player1.isTouching(wallGroup)){
player1.x=130
player1.y=75

}*/

text(mouseX+","+mouseY, 30, 30, mouseY )

if(keyIsDown(UP_ARROW)){
player1.y=player1.y-5
player1.addImage("player1", player1Img2)
}

if(keyIsDown(DOWN_ARROW)){
    player1.y=player1.y+5
    player1.addImage("player1", player1Img)
    }

    if(keyIsDown(RIGHT_ARROW)){
        player1.x=player1.x+5
        player1.addImage("player1", player1Image)
        }

        if(keyIsDown(LEFT_ARROW)){
            player1.x=player1.x-5
            player1.addImage("player1", playerImg1)
            }


  if(keyDown("W")){
    player2.y=player2.y-5
player2.addImage("player2", player22)
  }

  if(keyDown("S")){
    player2.y=player2.y+5
player2.addImage("player2", player24)
  }

  if(keyDown("A")){
    player2.x=player2.x-5
player2.addImage("player2", player23)
  }

  if(keyDown("D")){
    player2.x=player2.x+5
player2.addImage("player2", player2Image)
  }
textSize(20)
fill("black")
   text("score:" +score, 1070, 25)
score=score+Math.round(getFrameRate())

  //if(player1.isTouching(wall1) || player1.isTouching(wall2) || player1.isTouching(wall3) || player1.isTouching(wall4) || player1.isTouching(wall4)|| player1.isTouching(wall5)|| player1.isTouching(wall6)|| player1.isTouching(wall7)|| player1.isTouching(wall8)|| player1.isTouching(wall9)|| player1.isTouching(wall10)|| player1.isTouching(wall11)|| player1.isTouching(wall12)|| player1.isTouching(wall2)|| player1.isTouching(wall13)|| player1.isTouching(wall14)|| player1.isTouching(wall15)|| player1.isTouching(wall16)|| player1.isTouching(wall17)|| player1.isTouching(wall18)|| player1.isTouching(wall19)|| player1.isTouching(wall20)|| player1.isTouching(wall21)|| player1.isTouching(wall22)|| player1.isTouching(wall23)|| player1.isTouching(wall24)) {
 //   player1.x=130 
  //  player1.y=75
//}

//if(player2.isTouching(wall1) || player2.isTouching(wall2) || player2.isTouching(wall3)|| player2.isTouching(wall4)|| player2.isTouching(wall4)|| player2.isTouching(wall5)|| player2.isTouching(wall6)|| player2.isTouching(wall7)|| player2.isTouching(wall8)|| player2.isTouching(wall9)|| player2.isTouching(wall10)|| player2.isTouching(wall11)|| player2.isTouching(wall12)|| player2.isTouching(wall2)|| player2.isTouching(wall13)|| player2.isTouching(wall14)|| player2.isTouching(wall15)|| player2.isTouching(wall16)|| player2.isTouching(wall17)|| player2.isTouching(wall18)|| player2.isTouching(wall19)|| player2.isTouching(wall20)|| player2.isTouching(wall21)|| player2.isTouching(wall22)|| player2.isTouching(wall23)|| player2.isTouching(wall24)) {
 //   player2.x=130
 //   player2.y=107
//}
drawSprites();
if(player1.isTouching(victoryCup)){
background("orange")
    stroke("blue")
textSize(50)
fill("red")
text("you won game player1", 370, 300)

}

if(player2.isTouching(victoryCup)){
  background("blue")
      stroke("red")
  textSize(50)
  fill("red")
  text("you won game player2", 370, 300)
  
  }


}


