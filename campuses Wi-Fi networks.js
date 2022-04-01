class Network {
    constructor(data, users) {
      this.data = data;
      this.users = users;
    }
    // Insert code below
    movieTime(){
      const userData = this.users * 5
      if( this.data - userData >= 10){
        return true
      } else {
        return false
      }
    }
  }
  const Math = new Network(20, 2)