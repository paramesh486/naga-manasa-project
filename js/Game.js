class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      image(background1,0,0,displayWidth,displayHeight)
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    
  }

  play(){
    //form.hide();
    textSize(40);
    Player.getPlayerInfo();
    player.getRank()
    if(allPlayers !== undefined){
      background("lightblue")
   image(background2,0,0,displayWidth,displayHeight)
   fill("purple")
   text("Quiz Game=Level1", 120, 100)
  // fill("black")
  // text("Who is the youngest bts member?",displayWidth/2-300,displayHeight/2-300)
    var xp=350
    var yp
    var no=0
    for(var f in allPlayers){
    
      no=no+1
     /* xp=xp+200
      yp=displayHeight-allPlayers[f].distance
     cars[no-1].x=xp
     cars[no-1].y=yp
  if(no==player.index){
   cars[no-1].shapeColor="pink"
  camera.position.x=displayWidth/2
  camera.position.y=cars[no-1].y
  }
*/
    }
      
    }

    if( isCorrect==1&& player.index !== null&&checkCorrect==0){
      player.score +=10
     checkCorrect=checkCorrect+1
      player.update();

    }
    if(player.distance>5*displayHeight){
    player.rank=player.rank+1
    player.updateRank(player.rank)
    gameState=2
    }
    drawSprites()
}
dancelevel(){
  form.hidelevel1()
  form.option1.hide()
  background("purple")
   image(background3,0,0,displayWidth,displayHeight)
   form.displaydancelevel()
   textSize(40)
   fill("black")
   text("DanceOff Game=Level2", 120, 100)
}
lastlevel(){
  form.hidedancelevelbuttons()
  background("orange")
console.log("hai not working or "+imagek)
  if(imagek==1){
        console.log("jdksfdskjf"+imagek)
       image(v,500,200,500,500)
    }
}
 end(){
  background("lightblue")
   textSize(50)
   fill("#E6E6FA")
  text("gameEND",500,-4*displayHeight-100)
  fill("#008080")
  text("RANK = "+player.rank,500,-4*displayHeight-200)
 }


}
