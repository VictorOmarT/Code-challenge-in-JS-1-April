class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`);
    }
  }
  
  // Write function below
  const balloonAttack = (p1, p2) => {
    for (let i = 1; i <= 10; i++) {
      p1.balloonCount -= p2.hitsPerMinute;
      p2.balloonCount -= p1.hitsPerMinute;
      p1.status();
      p2.status();
    }
  
    if (p1.balloonCount > p2.balloonCount) {
      console.log(p1.name  + ' is the winner')
    } else if (p1.balloonCount < p2.balloonCount) {
        console.log(p2.name)
    } else {
      return "is a tie";
    }
  }
  const pLola = new Player("Lola", 5);
  const pLilu = new Player("Lilu", 4);
  
  balloonAttack(pLola, pLilu);
  