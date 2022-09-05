class Player {
    constructor(){

      this.index = null 
      this.distance = 0
      this.name = null
      this.rank = null
    }
   
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
   
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
   
    update(name){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
    static getPlayerInfo(){
      var PlayerInfoRef = database.ref("players")
      PlayerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
    getcarsatend(){
      database.ref('carsatend').on("value",(data)=>{
        this.rank = data.val();
      });
    }
    static updateCarsatend(rank){
      database.ref('/').update({
        carsatend:rank
      })
    }
  }
   
  