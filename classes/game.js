class Game {
  constructor() {
    this.players = []
    // this.shipsToHit = 0
    
  }

    addGameBoard() {
    
    return boardCode
  }

  
  takeShot (playerIn) {
    this.players.forEach((player) => {
      if (playerIn.name === player.name) {
        player.attempts++
      }
    })
  }
  

    addPlayer(player) {
      this.players.push(player)
    }

    displayScoreboard() {
        // display scoreboard info:
        // Hits, Sunk ships, Total points
    }

    displayFiringReport() {
        
    }

    
}

